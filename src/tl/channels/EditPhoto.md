# channels.EditPhoto

Change the photo of a [channel/supergroup](https://core.telegram.org/api/channel)

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
    new Api.channels.EditPhoto({
      channel: "username",
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
    new Api.channels.EditPhoto({
      channel: "username",
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

|    Name     | Type                                                            | Description                                     |
| :---------: | --------------------------------------------------------------- | ----------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)     | Channel/supergroup whose photo should be edited |
|  **photo**  | [InputChatPhoto](https://core.telegram.org/type/InputChatPhoto) | New photo                                       |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                  | Description                                  |
| :--: | --------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID       | The provided channel is invalid              |
| 400  | CHAT_ADMIN_REQUIRED   | You must be an admin in this chat to do this |
| 400  | CHAT_NOT_MODIFIED     | The pinned message wasn't modified           |
| 403  | CHAT_WRITE_FORBIDDEN  | You can't write in this chat                 |
| 400  | PHOTO_CROP_SIZE_SMALL | Photo is too small                           |
| 400  | PHOTO_EXT_INVALID     | The extension of the photo is invalid        |
| 400  | PHOTO_INVALID         | Photo invalid                                |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
