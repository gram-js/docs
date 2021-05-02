# invokeWithLayer

Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking#layers)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.invokeWithLayer({
		layer: 2490042,
		query: new Api.!X({...}),
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
    const result: Api.X = await client.invoke(new Api.invokeWithLayer({
		layer: 2490042,
		query: new Api.!X({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
---functions---
invokeWithLayer#da9b0d0d {X:Type} layer:int query:!X = X;
```

## Parameters

|   Name    | Type                                      | Description      |
| :-------: | ----------------------------------------- | ---------------- |
| **layer** | [int](https://core.telegram.org/type/int) | The layer to use |
| **query** | !X                                        | The query        |

## Result

X

## Possible errors

| Code | Type                          | Description                            |
| :--: | ----------------------------- | -------------------------------------- |
| 400  | AUTH_BYTES_INVALID            | The provided authorization is invalid  |
| 400  | CDN_METHOD_INVALID            | You can't call this method in a CDN DC |
| 403  | CHAT_WRITE_FORBIDDEN          | You can't write in this chat           |
| 400  | CONNECTION_API_ID_INVALID     | The provided API id is invalid         |
| 400  | CONNECTION_DEVICE_MODEL_EMPTY | Device model empty                     |
| 400  | CONNECTION_LANG_PACK_INVALID  | Language pack invalid                  |
| 400  | CONNECTION_NOT_INITED         | Connection not initialized             |
| 400  | CONNECTION_SYSTEM_EMPTY       | Connection system empty                |
| 400  | INPUT_LAYER_INVALID           | The provided layer is invalid          |
| 400  | INVITE_HASH_EXPIRED           | The invite link has expired            |

## Can bots use this method?

Yes

## Related pages

#### [Calling API Methods](https://core.telegram.org/api/invoking)

Additional options for calling methods.
