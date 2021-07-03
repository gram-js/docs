# account.AcceptAuthorization

Sends a Telegram Passport authorization form, effectively sharing data with the service

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
    new Api.account.AcceptAuthorization({
      botId: 43,
      scope: "some string here",
      publicKey: "some string here",
      valueHashes: [
        new Api.SecureValueHash({
          type: new Api.SecureValueTypePersonalDetails({}),
          hash: Buffer.from("arbitrary data here"),
        }),
      ],
      credentials: new Api.SecureCredentialsEncrypted({
        data: Buffer.from("arbitrary data here"),
        hash: Buffer.from("arbitrary data here"),
        secret: Buffer.from("arbitrary data here"),
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
  const result: Api.Bool = await client.invoke(
    new Api.account.AcceptAuthorization({
      botId: 43,
      scope: "some string here",
      publicKey: "some string here",
      valueHashes: [
        new Api.SecureValueHash({
          type: new Api.SecureValueTypePersonalDetails({}),
          hash: Buffer.from("arbitrary data here"),
        }),
      ],
      credentials: new Api.SecureCredentialsEncrypted({
        data: Buffer.from("arbitrary data here"),
        hash: Buffer.from("arbitrary data here"),
        secret: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name       | Type                                                                                                                   | Description                                              |
| :-------------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|    **botId**    | [int](https://core.telegram.org/type/int)                                                                              | Bot ID                                                   |
|    **scope**    | [string](https://core.telegram.org/type/string)                                                                        | Telegram Passport element types requested by the service |
|  **publicKey**  | [string](https://core.telegram.org/type/string)                                                                        | Service's public key                                     |
| **valueHashes** | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueHash](https://core.telegram.org/type/SecureValueHash)> | Types of values sent and their hashes                    |
| **credentials** | [SecureCredentialsEncrypted](https://core.telegram.org/type/SecureCredentialsEncrypted)                                | Encrypted values                                         |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
