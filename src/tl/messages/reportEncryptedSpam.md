# messages.reportEncryptedSpam

Report a secret chat for spam

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.reportEncryptedSpam({
		peer: new Api.InputEncryptedChat({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.reportEncryptedSpam({
		peer: new Api.InputEncryptedChat({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportEncryptedSpam#4b0c8c0f peer:InputEncryptedChat = Bool;
```

## Parameters

|   Name   | Type                                                                    | Description               |
| :------: | ----------------------------------------------------------------------- | ------------------------- |
| **peer** | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | The secret chat to report |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |

## Can bots use this method?

Yes

## Related pages
