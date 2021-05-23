# InitConnection

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
    new Api.InitConnection({
      apiId: 43,
      deviceModel: "some string here",
      systemVersion: "some string here",
      appVersion: "some string here",
      systemLangCode: "some string here",
      langPack: "some string here",
      langCode: "some string here",
      query: new Api.AnyRequest({
        /*...*/
      }),
      proxy: new Api.InputClientProxy({
        address: "some string here",
        port: 43,
      }),
      params: new Api.JsonNull({}),
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
  const result: Api.AnyRequest = await client.invoke(
    new Api.InitConnection({
      apiId: 43,
      deviceModel: "some string here",
      systemVersion: "some string here",
      appVersion: "some string here",
      systemLangCode: "some string here",
      langPack: "some string here",
      langCode: "some string here",
      query: new Api.AnyRequest({
        /*...*/
      }),
      proxy: new Api.InputClientProxy({
        address: "some string here",
        port: 43,
      }),
      params: new Api.JsonNull({}),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|      Name      | Type             | Description          |
| :------------: | ---------------- | -------------------- |
|       x        | Type             | No description found |
|     apiId      | int              | No description found |
|  deviceModel   | string           | No description found |
| systemVersion  | string           | No description found |
|   appVersion   | string           | No description found |
| systemLangCode | string           | No description found |
|    langPack    | string           | No description found |
|    langCode    | string           | No description found |
|     proxy      | InputClientProxy | No description found |
|     params     | JSONValue        | No description found |
|     query      | X                | No description found |

### [](#result)Result

AnyRequest

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
