# used to create the saved two json files.
# full.json contains a list of function names and description and their links.
# used later to get more info about those functions
# saved.json contains all info about a particular function
# run this file first
import json
import re
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

abs_url = "https://core.telegram.org"
absolutize2 = lambda m: ' href="' + urljoin(abs_url, m.group(1)) + '"'


def fix(my_html):
    return re.sub(r' href="([^"]+)"', absolutize2, my_html)


def scape_page(url):
    result = requests.get(url).text
    soup = BeautifulSoup(result, "html.parser")
    title = soup.find(id="dev_page_title").text
    content = soup.find(id="dev_page_content")
    description = fix(str(content.find("p")))
    tables = content.find_all(class_="table")
    result = fix(str(content.find(id="result").find_next("p")))
    params = []
    errors = []
    if len(tables) == 1:
        tbody = tables[0].find("tbody")
        for row in tbody.find_all("tr"):
            row_name, row_type, row_description = row.find_all("td")
            if soup.find(id="possible-errors"):
                errors.append({
                    "errors_name": fix(str(row_name)),
                    "errors_type": fix(str(row_type)),
                    "errors_description": fix(str(row_description)),
                })
            else:
                params.append({
                    "param_name": fix(str(row_name)),
                    "param_type": fix(str(row_type)),
                    "param_description": fix(str(row_description)),
                })
    elif len(tables) == 2:
        tbody = tables[0].find("tbody")
        for row in tbody.find_all("tr"):
            row_name, row_type, row_description = row.find_all("td")
            params.append({
                "param_name": fix(str(row_name)),
                "param_type": fix(str(row_type)),
                "param_description": fix(str(row_description)),
            })
        tbody = tables[1].find("tbody")
        for row in tbody.find_all("tr"):
            row_name, row_type, row_description = row.find_all("td")
            errors.append({
                "errors_name": fix(str(row_name)),
                "errors_type": fix(str(row_type)),
                "errors_description": fix(str(row_description)),
            })
    can_bots_user = soup.find(id="bots-can-use-this-method")
    can_use = "no"
    if can_bots_user:
        can_use = "yes"
    related_pages = content.find(id="related-pages")
    related = []
    while related_pages:
        related_pages = related_pages.find_next("h4")
        if not related_pages:
            break
        _, name = related_pages.find_all("a")
        related_description = related_pages.find_next("p")
        if related_description:
            related_description = fix(str(related_description))
        else:
            related_description = ""
        related.append({
            "page_name": name.text,
            "page_link": name["href"],
            "description": related_description
        })

    return {
        "title": title,
        "description": description,
        "result": result,
        "params": params,
        "errors": errors,
        "can_bot_use": can_use,
        "related_pages": related,
    }


def get_all_links(page):
    result = requests.get(page).text
    soup = BeautifulSoup(result, "html.parser")
    titles = soup.find_all("h3")

    tables = soup.find_all("table")
    methods = []
    for title, table in zip(titles, tables):
        tbody = table.find("tbody")
        trs = tbody.find_all("tr")
        rows = []
        for tr in trs:
            name, description = tr.find_all("td")
            name = name.find("a")
            rows.append({
                "name": name.text,
                "description": description.text,
                "link": name["href"]
            })
        methods.extend(rows)

    with open("full.json", "w", encoding="utf-8") as out:
        out.write(json.dumps(methods))


get_all_links("https://core.telegram.org/methods")
with open("full.json", "r", encoding="utf-8") as out:
    data = json.loads(out.read())
    final = []
    for x in data:
        print("https://core.telegram.org{link}".format(link=x["link"]))
        res = scape_page("https://core.telegram.org{link}".format(link=x["link"]))
        final.append(res)
    with open("saved.json", "w", encoding="utf-8") as writer:
        writer.write(json.dumps(final))
