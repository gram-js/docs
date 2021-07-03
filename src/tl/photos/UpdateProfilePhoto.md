# photos.UpdateProfilePhoto

Installs a previously uploaded photo as a profile photo.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.photos.UpdateProfilePhoto({
      id: new Api.InputPhoto({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.photos.Photo = await client.invoke(
    new Api.photos.UpdateProfilePhoto({
      id: new Api.InputPhoto({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name  | Type                                                    | Description |
| :----: | ------------------------------------------------------- | ----------- |
| **id** | [InputPhoto](https://core.telegram.org/type/InputPhoto) | Input photo |

## Result

[UserProfilePhoto](https://core.telegram.org/type/UserProfilePhoto)

## Possible errors

| Code | Type                  | Description                           |
| :--: | --------------------- | ------------------------------------- |
| 400  | FILE_PARTS_INVALID    | The number of file parts is invalid   |
| 400  | IMAGE_PROCESS_FAILED  | Failure while processing image        |
| 400  | LOCATION_INVALID      | The provided location is invalid      |
| 400  | PHOTO_CROP_SIZE_SMALL | Photo is too small                    |
| 400  | PHOTO_EXT_INVALID     | The extension of the photo is invalid |
| 400  | PHOTO_ID_INVALID      | Photo ID invalid                      |

## Can bots use this method?

No

## Related pages
