import re
from random import randint

import json

with open("saved.json", "r", encoding="utf-8") as out:
    methods = json.loads(out.read())


def camel(snake_str):
    first, *others = snake_str.split('_')
    return ''.join([first.lower(), *map(str.title, others)])


def get_type(param_type):
    if param_type == "#":
        return
    if 'flags.' in param_type:
        param_type = re.sub("flags.\d+\?", "", param_type)
    if 'Vector<' in param_type:
        param_type = re.sub("Vector<(.*)>", "\g<1>", param_type)
        return "[" + get_type(param_type) + "]"
    if param_type in ('int', 'long', 'int128', 'int256', 'double', 'date'):
        return str(randint(1, 10000000))
    elif param_type in ('true', 'bool'):
        return "true"
    elif param_type == "string":
        return "'random string here'"
    elif param_type == "bytes":
        return "Buffer.from('some bytes here')"
    else:
        # custom class
        return "new Api." + param_type + "({...})"


def generate_example(example, result):
    template_example = """::::tabs
:::tab{{title="JavaScript"}}
```js
{js}
```
:::

:::tab{{title="TypeScript"}}
```ts
{ts}
```
:::
::::

"""
    template_js = """const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(0);
    console.log(result); // prints the result
})();"""
    template_ts = """import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result1 = await client.invoke(0);
    console.log(result); // prints the result
})();"""

    data = example
    print("result", result)
    js_example = template_js.replace("0", data)
    if " " in result:
        result = ""
    else:
        result = ": Api." + result
    ts_example = template_ts.replace("1", result).replace("0", data)
    return template_example.format(js=js_example, ts=ts_example)
