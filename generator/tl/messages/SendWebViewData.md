# messages.SendWebViewData

No description found

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
    new Api.messages.SendWebViewData({
      bot: "username",
      randomId: BigInt("-4156887774564"),
      buttonText: "some string here",
      data: "some string here",
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
    new Api.messages.SendWebViewData({
      bot: "username",
      randomId: BigInt("-4156887774564"),
      buttonText: "some string here",
      data: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type      | Description          |
| :--------: | --------- | -------------------- |
|    bot     | InputUser | No description found |
|  randomId  | long      | No description found |
| buttonText | string    | No description found |
|    data    | string    | No description found |

## Result

Updates

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
