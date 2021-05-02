# messages.requestUrlAuth

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.requestUrlAuth({
		peer: new Api.InputPeer({...}),
		msgId: 1818782,
		buttonId: 8052013,
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
    const result: Api.UrlAuthResult = await client.invoke(new Api.messages.requestUrlAuth({
		peer: new Api.InputPeer({...}),
		msgId: 1818782,
		buttonId: 8052013,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
urlAuthResultRequest#92d33a0e flags:# request_write_access:flags.0?true bot:User domain:string = UrlAuthResult;
urlAuthResultAccepted#8f8c0e4e url:string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;
---functions---
messages.requestUrlAuth#e33f5613 peer:InputPeer msg_id:int button_id:int = UrlAuthResult;
```

## Parameters

|     Name      | Type                                                  | Description                                         |
| :-----------: | ----------------------------------------------------- | --------------------------------------------------- |
|   **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where the message is located                   |
|  **msg_id**   | [int](https://core.telegram.org/type/int)             | The message                                         |
| **button_id** | [int](https://core.telegram.org/type/int)             | The ID of the button with the authorization request |

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
