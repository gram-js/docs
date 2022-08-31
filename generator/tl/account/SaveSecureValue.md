# account.SaveSecureValue

Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

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

## Parameters

|        Name        | Type                                                                | Description                                                                                                             |
| :----------------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|     **value**      | [InputSecureValue](https://core.telegram.org/type/InputSecureValue) | Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)         |
| **secureSecretId** | [long](https://core.telegram.org/type/long)                         | Passport secret hash, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |

## Result

[SecureValue](https://core.telegram.org/type/SecureValue)

## Possible errors

| Code | Type              | Description                                                                                      |
| :--: | ----------------- | ------------------------------------------------------------------------------------------------ |
| 400  | PASSWORD_REQUIRED | A [2FA password](https://core.telegram.org/api/srp) must be configured to use Telegram Passport. |

## Can bots use this method?

No

## Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
