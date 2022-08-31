# account.GetNotifySettings

Gets current notification settings for a given user/group, from all users/all groups.

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
    new Api.account.GetNotifySettings({
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

  const result: Api.PeerNotifySettings = await client.invoke(
    new Api.account.GetNotifySettings({
      peer: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                              | Description         |
| :------: | ----------------------------------------------------------------- | ------------------- |
| **peer** | [InputNotifyPeer](https://core.telegram.org/type/InputNotifyPeer) | Notification source |

## Result

Returns a [PeerNotifySettings](https://core.telegram.org/type/PeerNotifySettings) object containing current notification settings.

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

No

## Related pages
