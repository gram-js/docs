# messages.readEncryptedHistory

Marks message history within a secret chat as read.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.readEncryptedHistory({
		peer: new Api.InputEncryptedChat({...}),
		maxDate: 1860430,
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
    const result: Api.Bool = await client.invoke(new Api.messages.readEncryptedHistory({
		peer: new Api.InputEncryptedChat({...}),
		maxDate: 1860430,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readEncryptedHistory#7f4b690a peer:InputEncryptedChat max_date:int = Bool;
```

## Parameters

|     Name     | Type                                                                    | Description                                         |
| :----------: | ----------------------------------------------------------------------- | --------------------------------------------------- |
|   **peer**   | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID                                      |
| **max_date** | [int](https://core.telegram.org/type/int)                               | Maximum date value for received messages in history |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | MSG_WAIT_FAILED | A waiting call returned an error |

## Can bots use this method?

Yes

## Related pages
