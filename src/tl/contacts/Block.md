# contacts.Block

Adds the user to the blacklist.

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
    new Api.contacts.Block({
      id: "username",
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
    new Api.contacts.Block({
      id: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name  | Type                                                  | Description |
| :----: | ----------------------------------------------------- | ----------- |
| **id** | [InputPeer](https://core.telegram.org/type/InputPeer) | User ID     |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                   | Description                        |
| :--: | ---------------------- | ---------------------------------- |
| 400  | CONTACT_ID_INVALID     | The provided contact ID is invalid |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted     |
| 400  | MSG_ID_INVALID         | Invalid message ID provided        |
| 400  | PEER_ID_INVALID        | The provided peer id is invalid    |

## Can bots use this method?

No

## Related pages
