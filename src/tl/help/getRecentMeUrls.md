# help.getRecentMeUrls

Get recently used t.me links

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.help.getRecentMeUrls({
            referer: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.help.RecentMeUrls = await client.invoke(
        new Api.help.getRecentMeUrls({
            referer: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
t.me
```

## Parameters

|    Name     | Type                                            | Description |
| :---------: | ----------------------------------------------- | ----------- |
| **referer** | [string](https://core.telegram.org/type/string) | Referer     |

## Result

[help.RecentMeUrls](https://core.telegram.org/type/help.RecentMeUrls)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
