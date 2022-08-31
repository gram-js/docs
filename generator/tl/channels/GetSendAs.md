# channels.GetSendAs

Obtains a list of peers that can be used to send messages in a specific group

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
    new Api.channels.GetSendAs({
      peer: "username",
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

  const result: Api.channels.SendAsPeers = await client.invoke(
    new Api.channels.GetSendAs({
      peer: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                  | Description                                |
| :------: | ----------------------------------------------------- | ------------------------------------------ |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The group where we intend to send messages |

## Result

[channels.SendAsPeers](https://core.telegram.org/type/channels.SendAsPeers)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

Yes

## Related pages
