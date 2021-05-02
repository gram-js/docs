# messages.getWebPage

Get [instant view](https://instantview.telegram.org) page

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
        new Api.messages.getWebPage({
            url: 'random string here',
            hash: 1631224,
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
    const result: Api.WebPage = await client.invoke(
        new Api.messages.getWebPage({
            url: 'random string here',
            hash: 1631224,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
webPageEmpty#eb1477e8 id:long = WebPage;
webPagePending#c586da1c id:long date:int = WebPage;
webPage#e89c45b2 flags:# id:long url:string display_url:string hash:int type:flags.0?string site_name:flags.1?string title:flags.2?string description:flags.3?string photo:flags.4?Photo embed_url:flags.5?string embed_type:flags.5?string embed_width:flags.6?int embed_height:flags.6?int duration:flags.7?int author:flags.8?string document:flags.9?Document cached_page:flags.10?Page attributes:flags.12?Vector<WebPageAttribute> = WebPage;
webPageNotModified#7311ca11 flags:# cached_page_views:flags.0?int = WebPage;
---functions---
messages.getWebPage#32ca8f91 url:string hash:int = WebPage;
```

## Parameters

|   Name   | Type                                            | Description                                                                                            |
| :------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **url**  | [string](https://core.telegram.org/type/string) | URL of IV page to fetch                                                                                |
| **hash** | [int](https://core.telegram.org/type/int)       | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[WebPage](https://core.telegram.org/type/WebPage)

## Possible errors

| Code | Type                   | Description            |
| :--: | ---------------------- | ---------------------- |
| 400  | WC_CONVERT_URL_INVALID | WC convert URL invalid |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
