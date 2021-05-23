# messages.SearchGlobal

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
    new Api.messages.SearchGlobal({
      q: "some string here",
      filter: new Api.InputMessagesFilterPhotos({}),
      minDate: 43,
      maxDate: 43,
      offsetRate: 43,
      offsetPeer: "username",
      offsetId: 43,
      limit: 100,
      folderId: 43,
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
  const result: Api.messages.Messages = await client.invoke(
    new Api.messages.SearchGlobal({
      q: "some string here",
      filter: new Api.InputMessagesFilterPhotos({}),
      minDate: 43,
      maxDate: 43,
      offsetRate: 43,
      offsetPeer: "username",
      offsetId: 43,
      limit: 100,
      folderId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type           | Description          |
| :--------: | -------------- | -------------------- |
|  folderId  | int            | No description found |
|     q      | string         | No description found |
|   filter   | MessagesFilter | No description found |
|  minDate   | int            | No description found |
|  maxDate   | int            | No description found |
| offsetRate | int            | No description found |
| offsetPeer | InputPeer      | No description found |
|  offsetId  | int            | No description found |
|   limit    | int            | No description found |

### [](#result)Result

messages.Messages

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
