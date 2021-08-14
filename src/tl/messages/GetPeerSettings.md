# messages.GetPeerSettings

Get peer settings

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
    new Api.messages.GetPeerSettings({
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

  const result: Api.PeerSettings = await client.invoke(
    new Api.messages.GetPeerSettings({
      peer: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                  | Description |
| :------: | ----------------------------------------------------- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The peer    |

## Result

[PeerSettings](https://core.telegram.org/type/PeerSettings)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHANNEL_INVALID | The provided channel is invalid |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

No

## Related pages
