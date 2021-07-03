# messages.InitHistoryImport

No description found

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.messages.InitHistoryImport({
      peer: "username",
      file: client.uploadFile("/path/to/file.jpg"),
      mediaCount: 43,
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
  const result: Api.messages.HistoryImport = await client.invoke(
    new Api.messages.InitHistoryImport({
      peer: "username",
      file: client.uploadFile("/path/to/file.jpg"),
      mediaCount: 43,
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
|    peer    | InputPeer | No description found |
|    file    | InputFile | No description found |
| mediaCount | int       | No description found |

## Result

messages.HistoryImport

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
