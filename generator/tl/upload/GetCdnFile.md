# upload.GetCdnFile

Download a [CDN](https://core.telegram.org/cdn) file.

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
    new Api.upload.GetCdnFile({
      fileToken: Buffer.from("arbitrary data here"),
      offset: BigInt("-4156887774564"),
      limit: 100,
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

  const result: Api.upload.CdnFile = await client.invoke(
    new Api.upload.GetCdnFile({
      fileToken: Buffer.from("arbitrary data here"),
      offset: BigInt("-4156887774564"),
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                          | Description                 |
| :-----------: | --------------------------------------------- | --------------------------- |
| **fileToken** | [bytes](https://core.telegram.org/type/bytes) | File token                  |
|  **offset**   | [int](https://core.telegram.org/type/int)     | Offset of chunk to download |
|   **limit**   | [int](https://core.telegram.org/type/int)     | Length of chunk to download |

## Result

[upload.CdnFile](https://core.telegram.org/type/upload.CdnFile)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)
