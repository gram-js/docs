# InvokeAfterMsgs

Invokes a query after a successfull completion of previous queries

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
    new Api.InvokeAfterMsgs({
      msgIds: [BigInt("-4156887774564")],
      query: new Api.AnyRequest({
        /*...*/
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
  const result: Api.AnyRequest = await client.invoke(
    new Api.InvokeAfterMsgs({
      msgIds: [BigInt("-4156887774564")],
      query: new Api.AnyRequest({
        /*...*/
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                                                             | Description                                       |
| :--------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **msgIds** | [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)> | List of messages on which a current query depends |
| **query**  | !X                                                                                               | The query itself                                  |

## Result

X

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
