# help.getPromoData

Get MTProxy/Public Service Announcement information

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.getPromoData({}));
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
    const result: Api.help.PromoData = await client.invoke(
        new Api.help.getPromoData({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;
help.promoData#8c39793f flags:# proxy:flags.0?true expires:int peer:Peer chats:Vector<Chat> users:Vector<User> psa_type:flags.1?string psa_message:flags.2?string = help.PromoData;
---functions---
help.getPromoData#c0977421 = help.PromoData;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[help.PromoData](https://core.telegram.org/type/help.PromoData)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
