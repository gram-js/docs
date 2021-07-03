# photos.UploadProfilePhoto

Updates current user profile photo.

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
    new Api.photos.UploadProfilePhoto({
      file: client.uploadFile("/path/to/file.jpg"),
      video: client.upload_file("/path/to/file.mp4"),
      videoStartTs: 8.24,
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
    new Api.photos.UploadProfilePhoto({
      file: client.uploadFile("/path/to/file.jpg"),
      video: client.upload_file("/path/to/file.mp4"),
      videoStartTs: 8.24,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type                                                                                                                                 | Description                                                                                                        |
| :--------------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)            |
|     **file**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](https://core.telegram.org/type/InputFile) | File saved in parts by means of [upload.saveFilePart](https://core.telegram.org/method/upload.saveFilePart) method |
|    **video**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputFile](https://core.telegram.org/type/InputFile) | [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video                    |
| **videoStartTs** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[double](https://core.telegram.org/type/double)       | Floating point UNIX timestamp in seconds, indicating the frame of the video that should be used as static preview. |

## Result

[photos.Photo](https://core.telegram.org/type/photos.Photo)

## Possible errors

| Code | Type                    | Description                           |
| :--: | ----------------------- | ------------------------------------- |
| 400  | FILE_PARTS_INVALID      | The number of file parts is invalid   |
| 400  | IMAGE_PROCESS_FAILED    | Failure while processing image        |
| 400  | PHOTO_CROP_FILE_MISSING | Photo crop file missing               |
| 400  | PHOTO_CROP_SIZE_SMALL   | Photo is too small                    |
| 400  | PHOTO_EXT_INVALID       | The extension of the photo is invalid |
| 400  | PHOTO_FILE_MISSING      | Profile photo file missing            |
| 400  | VIDEO_FILE_INVALID      | The specified video file is invalid   |

## Can bots use this method?

No

## Related pages

#### [upload.saveFilePart](https://core.telegram.org/method/upload.saveFilePart)

Saves a part of file for futher sending to one of the methods.

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.
