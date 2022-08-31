# phone.ToggleGroupCallRecord

Start or stop recording a group call: the recorded audio and video streams will be automatically sent to `Saved messages` (the chat with ourselves).

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
    new Api.phone.ToggleGroupCallRecord({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      start: true,
      video: true,
      title: "My very normal title",
      videoPortrait: false,
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
    new Api.phone.ToggleGroupCallRecord({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      start: true,
      video: true,
      title: "My very normal title",
      videoPortrait: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name        | Type                                                                                                                              | Description                                                                                             |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|     **start**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to start or stop recording                                                                      |
|     **video**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether to also record video streams                                                                    |
|     **call**      | [InputGroupCall](https://core.telegram.org/type/InputGroupCall)                                                                   | The group call or livestream                                                                            |
|     **title**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string)    | Recording title                                                                                         |
| **videoPortrait** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Bool](https://core.telegram.org/type/Bool)        | If video stream recording is enabled, whether to record in portrait or landscape mode                   |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
