# phone.ToggleGroupCallSettings

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
    new Api.phone.ToggleGroupCallSettings({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      resetInviteHash: true,
      joinMuted: false,
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
    new Api.phone.ToggleGroupCallSettings({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      resetInviteHash: true,
      joinMuted: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name       | Type           | Description          |
| :-------------: | -------------- | -------------------- |
| resetInviteHash | true           | No description found |
|      call       | InputGroupCall | No description found |
|    joinMuted    | Bool           | No description found |

## Result

Updates

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
