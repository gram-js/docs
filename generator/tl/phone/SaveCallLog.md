# phone.SaveCallLog

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
    new Api.phone.SaveCallLog({
      peer: new Api.InputPhoneCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      file: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.phone.SaveCallLog({
      peer: new Api.InputPhoneCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      file: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

| Name | Type           | Description          |
| :--: | -------------- | -------------------- |
| peer | InputPhoneCall | No description found |
| file | InputFile      | No description found |

## Result

Bool

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
