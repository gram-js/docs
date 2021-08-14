# messages.EditChatPhoto

Changes chat photo and sends a service message on it

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
    new Api.messages.EditChatPhoto({
      chatId: 43,
      photo: await client.uploadFile({
        file: new CustomFile(
          "photo.jpg",
          fs.statSync("../photo.jpg").size,
          "../photo.jpg"
        ),
        workers: 1,
      }),
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

  const result: Api.Updates = await client.invoke(
    new Api.messages.EditChatPhoto({
      chatId: 43,
      photo: await client.uploadFile({
        file: new CustomFile(
          "photo.jpg",
          fs.statSync("../photo.jpg").size,
          "../photo.jpg"
        ),
        workers: 1,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                            | Description     |
| :--------: | --------------------------------------------------------------- | --------------- |
| **chatId** | [int](https://core.telegram.org/type/int)                       | Chat ID         |
| **photo**  | [InputChatPhoto](https://core.telegram.org/type/InputChatPhoto) | Photo to be set |

## Result

Returns a [messages.StatedMessage](https://core.telegram.org/type/messages.StatedMessage) object containing a service message sent during an action.

## Possible errors

| Code | Type                      | Description                           |
| :--: | ------------------------- | ------------------------------------- |
| 400  | CHAT_ID_INVALID           | The provided chat id is invalid       |
| 400  | CHAT_NOT_MODIFIED         | The pinned message wasn't modified    |
| 400  | INPUT_CONSTRUCTOR_INVALID | The provided constructor is invalid   |
| 400  | PEER_ID_INVALID           | The provided peer id is invalid       |
| 400  | PHOTO_CROP_SIZE_SMALL     | Photo is too small                    |
| 400  | PHOTO_EXT_INVALID         | The extension of the photo is invalid |
| 400  | PHOTO_INVALID             | Photo invalid                         |

## Can bots use this method?

Yes

## Related pages
