# account.SaveSecureValue

No description found

### [](#example)Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.account.SaveSecureValue({
      value: new Api.InputSecureValue({
        type: new Api.SecureValueTypePersonalDetails({}),
        data: new Api.SecureData({
          data: Buffer.from("arbitrary data here"),
          dataHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        frontSide: new Api.InputSecureFileUploaded({
          id: BigInt("-4156887774564"),
          parts: 43,
          md5Checksum: "some string here",
          fileHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        reverseSide: new Api.InputSecureFileUploaded({
          id: BigInt("-4156887774564"),
          parts: 43,
          md5Checksum: "some string here",
          fileHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        selfie: new Api.InputSecureFileUploaded({
          id: BigInt("-4156887774564"),
          parts: 43,
          md5Checksum: "some string here",
          fileHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        translation: [
          new Api.InputSecureFileUploaded({
            id: BigInt("-4156887774564"),
            parts: 43,
            md5Checksum: "some string here",
            fileHash: Buffer.from("arbitrary data here"),
            secret: Buffer.from("arbitrary data here"),
          }),
        ],
        files: [
          new Api.InputSecureFileUploaded({
            id: BigInt("-4156887774564"),
            parts: 43,
            md5Checksum: "some string here",
            fileHash: Buffer.from("arbitrary data here"),
            secret: Buffer.from("arbitrary data here"),
          }),
        ],
        plainData: new Api.SecurePlainPhone({
          phone: "some string here",
        }),
      }),
      secureSecretId: BigInt("-4156887774564"),
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
  const result: Api.SecureValue = await client.invoke(
    new Api.account.SaveSecureValue({
      value: new Api.InputSecureValue({
        type: new Api.SecureValueTypePersonalDetails({}),
        data: new Api.SecureData({
          data: Buffer.from("arbitrary data here"),
          dataHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        frontSide: new Api.InputSecureFileUploaded({
          id: BigInt("-4156887774564"),
          parts: 43,
          md5Checksum: "some string here",
          fileHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        reverseSide: new Api.InputSecureFileUploaded({
          id: BigInt("-4156887774564"),
          parts: 43,
          md5Checksum: "some string here",
          fileHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        selfie: new Api.InputSecureFileUploaded({
          id: BigInt("-4156887774564"),
          parts: 43,
          md5Checksum: "some string here",
          fileHash: Buffer.from("arbitrary data here"),
          secret: Buffer.from("arbitrary data here"),
        }),
        translation: [
          new Api.InputSecureFileUploaded({
            id: BigInt("-4156887774564"),
            parts: 43,
            md5Checksum: "some string here",
            fileHash: Buffer.from("arbitrary data here"),
            secret: Buffer.from("arbitrary data here"),
          }),
        ],
        files: [
          new Api.InputSecureFileUploaded({
            id: BigInt("-4156887774564"),
            parts: 43,
            md5Checksum: "some string here",
            fileHash: Buffer.from("arbitrary data here"),
            secret: Buffer.from("arbitrary data here"),
          }),
        ],
        plainData: new Api.SecurePlainPhone({
          phone: "some string here",
        }),
      }),
      secureSecretId: BigInt("-4156887774564"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|      Name      | Type             | Description          |
| :------------: | ---------------- | -------------------- |
|     value      | InputSecureValue | No description found |
| secureSecretId | long             | No description found |

### [](#result)Result

SecureValue

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
