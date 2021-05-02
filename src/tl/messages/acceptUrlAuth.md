# messages.acceptUrlAuth

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.acceptUrlAuth({
		writeAllowed: true,
		peer: new Api.InputPeer({...}),
		msgId: 9723223,
		buttonId: 3768630,
		}));
    console.log(result); // prints the result
})();

```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.UrlAuthResult = await client.invoke(new Api.messages.acceptUrlAuth({
		writeAllowed: true,
		peer: new Api.InputPeer({...}),
		msgId: 9723223,
		buttonId: 3768630,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
urlAuthResultRequest#92d33a0e flags:# request_write_access:flags.0?true bot:User domain:string = UrlAuthResult;
urlAuthResultAccepted#8f8c0e4e url:string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;
---functions---
messages.acceptUrlAuth#f729ea98 flags:# write_allowed:flags.0?true peer:InputPeer msg_id:int button_id:int = UrlAuthResult;
```

## Parameters

|       Name        | Type                                                                                                                              | Description                                                                                             |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **write_allowed** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set this flag to allow the bot to send messages to you (if requested)                                   |
|     **peer**      | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | The location of the message                                                                             |
|    **msg_id**     | [int](https://core.telegram.org/type/int)                                                                                         | Message ID of the message with the login button                                                         |
|   **button_id**   | [int](https://core.telegram.org/type/int)                                                                                         | ID of the login button                                                                                  |

## Result

[UrlAuthResult](https://core.telegram.org/type/UrlAuthResult)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.
