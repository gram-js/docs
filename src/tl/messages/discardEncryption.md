# messages.discardEncryption

Cancels a request for creation and/or delete info on secret chat.

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
        new Api.messages.discardEncryption({
            chatId: 8710678,
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.discardEncryption({
            chatId: 8710678,
        }),
    );
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
messages.discardEncryption#edd923c5 chat_id:int = Bool;
```

## Parameters

|    Name     | Type                                      | Description    |
| :---------: | ----------------------------------------- | -------------- |
| **chat_id** | [int](https://core.telegram.org/type/int) | Secret chat ID |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                        | Description                            |
| :--: | --------------------------- | -------------------------------------- |
| 400  | CHAT_ID_EMPTY               | The provided chat ID is empty          |
| 400  | ENCRYPTION_ALREADY_DECLINED | The secret chat was already declined   |
| 400  | ENCRYPTION_ID_INVALID       | The provided secret chat ID is invalid |

## Can bots use this method?

Yes

## Related pages
