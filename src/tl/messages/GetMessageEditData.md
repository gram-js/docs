# messages.GetMessageEditData

Find out if a media message's caption can be edited

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.messages.GetMessageEditData({
      peer: "username",
      id: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.messages.MessageEditData = await client.invoke(
    new Api.messages.GetMessageEditData({
      peer: "username",
      id: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                  | Description                   |
| :------: | ----------------------------------------------------- | ----------------------------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where the media was sent |
|  **id**  | [int](https://core.telegram.org/type/int)             | ID of message                 |

## Result

[messages.MessageEditData](https://core.telegram.org/type/messages.MessageEditData)

## Possible errors

| Code | Type                    | Description                                  |
| :--: | ----------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED     | You must be an admin in this chat to do this |
| 403  | MESSAGE_AUTHOR_REQUIRED | Message author required                      |
| 400  | MESSAGE_ID_INVALID      | The provided message id is invalid           |
| 400  | PEER_ID_INVALID         | The provided peer id is invalid              |

## Can bots use this method?

No

## Related pages
