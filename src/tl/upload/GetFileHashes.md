# upload.GetFileHashes

Get SHA256 hashes for verifying downloaded files

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
    new Api.upload.GetFileHashes({
      location: new Api.InputFileLocation({
        volumeId: BigInt("-4156887774564"),
        localId: 43,
        secret: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      offset: 43,
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

  const result: Api.Vector<FileHash> = await client.invoke(
    new Api.upload.GetFileHashes({
      location: new Api.InputFileLocation({
        volumeId: BigInt("-4156887774564"),
        localId: 43,
        secret: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      offset: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                  | Description                          |
| :----------: | --------------------------------------------------------------------- | ------------------------------------ |
| **location** | [InputFileLocation](https://core.telegram.org/type/InputFileLocation) | File                                 |
|  **offset**  | [int](https://core.telegram.org/type/int)                             | Offset from which to get file hashes |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](https://core.telegram.org/type/FileHash)>

## Possible errors

| Code | Type             | Description                      |
| :--: | ---------------- | -------------------------------- |
| 400  | LOCATION_INVALID | The provided location is invalid |

## Can bots use this method?

Yes

## Related pages
