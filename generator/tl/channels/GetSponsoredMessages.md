# channels.GetSponsoredMessages

Get a list of sponsored messages

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
    new Api.channels.GetSponsoredMessages({
      channel: "username",
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

  const result: Api.messages.SponsoredMessages = await client.invoke(
    new Api.channels.GetSponsoredMessages({
      channel: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description |
| :---------: | ----------------------------------------------------------- | ----------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Peer        |

## Result

[messages.SponsoredMessages](https://core.telegram.org/type/messages.SponsoredMessages)

## Possible errors

| Code | Type            | Description                                 |
| :--: | --------------- | ------------------------------------------- |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |

## Can bots use this method?

No

## Related pages
