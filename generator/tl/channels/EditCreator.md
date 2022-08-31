# channels.EditCreator

Transfer channel ownership

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
    new Api.channels.EditCreator({
      channel: "username",
      userId: "username",
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
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
    new Api.channels.EditCreator({
      channel: "username",
      userId: "username",
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                          | Description                                                  |
| :----------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **channel**  | [InputChannel](https://core.telegram.org/type/InputChannel)                   | Channel                                                      |
|  **userId**  | [InputUser](https://core.telegram.org/type/InputUser)                         | New channel owner                                            |
| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | [2FA password](https://core.telegram.org/api/srp) of account |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                   | Description                                                                |
| :--: | ---------------------- | -------------------------------------------------------------------------- |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup.                                |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this.                              |
| 403  | CHAT_WRITE_FORBIDDEN   | You can't write in this chat.                                              |
| 400  | PASSWORD_HASH_INVALID  | The provided password hash is invalid.                                     |
| 400  | PASSWORD_MISSING       | You must enable 2FA in order to transfer ownership of a channel.           |
| 400  | PASSWORD_TOO_FRESH\_%d | The password was modified less than 24 hours ago, try again in %d seconds. |
| 400  | SESSION_TOO_FRESH\_%d  | This session was created less than 24 hours ago, try again in %d seconds.  |
| 400  | SRP_ID_INVALID         | Invalid SRP ID provided.                                                   |
| 400  | USER_ID_INVALID        | The provided user ID is invalid.                                           |

## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
