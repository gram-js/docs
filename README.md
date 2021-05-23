# GramJS docs
Docs for [GramJS](https://github.com/gram-js/gramjs). mostly generated and partially written

### How to generate
To generate the docs you'll need to run 

* `python generator/scrape_data.py`
* `python generator/main_parser.py`
* `npm run build`

this will scrape some description from telegram documentation and then generates the rest from the api.tl file.

The docs will be in `/docs/`
