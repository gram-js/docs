# account.UnregisterDevice

Deletes a device by its token, stops sending PUSH-notifications to it.

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
    new Api.account.UnregisterDevice({
      tokenType: 43,
      token: "some string here",
      otherUids: [43],
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
    new Api.account.UnregisterDevice({
      tokenType: 43,
      token: "some string here",
      otherUids: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-----------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **tokenType** | [int](https://core.telegram.org/type/int)                                                      | Device token type. <br>**Possible values**: <br>`1` - APNS (device token for apple push) <br>`2` - FCM (firebase token for google firebase) <br>`3` - MPNS (channel URI for microsoft push) <br>`4` - Simple push (endpoint for firefox's simple push API) <br>`5` - Ubuntu phone (token for ubuntu push) <br>`6` - Blackberry (token for blackberry push) <br>`7` - Unused <br>`8` - WNS (windows push) <br>`9` - APNS VoIP (token for apple push VoIP) <br>`10` - Web push (web push, see below) <br>`11` - MPNS VoIP (token for microsoft push VoIP) <br>`12` - Tizen (token for tizen push) <br> <br>For `10` web push, the token must be a JSON-encoded object containing the keys described in [PUSH updates](https://core.telegram.org/api/push-updates) |
|   **token**   | [string](https://core.telegram.org/type/string)                                                | Device token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **otherUids** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | List of user identifiers of other users currently using the client                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type          | Description                   |
| :--: | ------------- | ----------------------------- |
| 400  | TOKEN_INVALID | The provided token is invalid |

## Can bots use this method?

No

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications
