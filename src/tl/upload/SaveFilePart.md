# upload.SaveFilePart

Saves a part of file for futher sending to one of the methods.

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
    new Api.upload.SaveFilePart({
      fileId: BigInt("-4156887774564"),
      filePart: 43,
      bytes: Buffer.from("arbitrary data here"),
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

  const result: Api.Bool = await client.invoke(
    new Api.upload.SaveFilePart({
      fileId: BigInt("-4156887774564"),
      filePart: 43,
      bytes: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                          | Description                                  |
| :----------: | --------------------------------------------- | -------------------------------------------- |
|  **fileId**  | [long](https://core.telegram.org/type/long)   | Random file identifier created by the client |
| **filePart** | [int](https://core.telegram.org/type/int)     | Numerical order of a part                    |
|  **bytes**   | [bytes](https://core.telegram.org/type/bytes) | Binary data, contend of a part               |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type              | Description                     |
| :--: | ----------------- | ------------------------------- |
| 400  | FILE_PART_EMPTY   | The provided file part is empty |
| 400  | FILE_PART_INVALID | The file part number is invalid |

## Can bots use this method?

Yes

## Related pages
