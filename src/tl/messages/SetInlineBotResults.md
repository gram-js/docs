# messages.SetInlineBotResults

No description found

### [](#example)Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.messages.SetInlineBotResults({
      queryId: BigInt("-4156887774564"),
      results: [
        new Api.InputBotInlineResult({
          id: "some string here",
          type: "some string here",
          sendMessage: new Api.InputBotInlineMessageMediaAuto({
            message: "Hello there!",
          }),
          title: "My very normal title",
          description: "some string here",
          url: "some string here",
          thumb: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
          content: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
        }),
      ],
      cacheTime: 43,
      gallery: true,
      private: true,
      nextOffset: "some string here",
      switchPm: new Api.InlineBotSwitchPM({
        text: "some string here",
        startParam: "some string here",
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
    new Api.messages.SetInlineBotResults({
      queryId: BigInt("-4156887774564"),
      results: [
        new Api.InputBotInlineResult({
          id: "some string here",
          type: "some string here",
          sendMessage: new Api.InputBotInlineMessageMediaAuto({
            message: "Hello there!",
          }),
          title: "My very normal title",
          description: "some string here",
          url: "some string here",
          thumb: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
          content: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
        }),
      ],
      cacheTime: 43,
      gallery: true,
      private: true,
      nextOffset: "some string here",
      switchPm: new Api.InlineBotSwitchPM({
        text: "some string here",
        startParam: "some string here",
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type                 | Description          |
| :--------: | -------------------- | -------------------- |
|  gallery   | true                 | No description found |
|  private   | true                 | No description found |
|  queryId   | long                 | No description found |
|  results   | InputBotInlineResult | No description found |
| cacheTime  | int                  | No description found |
| nextOffset | string               | No description found |
|  switchPm  | InlineBotSwitchPM    | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
