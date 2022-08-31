# help.DismissSuggestion

Dismiss a [suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions).

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
    new Api.help.DismissSuggestion({
      peer: "username",
      suggestion: "some string here",
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
    new Api.help.DismissSuggestion({
      peer: "username",
      suggestion: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                  | Description                                                                                                          |
| :------------: | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | In the case of pending suggestions in [channels](https://core.telegram.org/constructor/channelFull), the channel ID. |
| **suggestion** | [string](https://core.telegram.org/type/string)       | [Suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions).                            |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [channelFull](https://core.telegram.org/constructor/channelFull)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
