# InvokeWithoutUpdates

Invoke a request without subscribing the used connection for [updates](https://core.telegram.org/api/updates) (this is enabled by default for [file queries](https://core.telegram.org/api/files)).

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
    new Api.InvokeWithoutUpdates({
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.AnyRequest = await client.invoke(
    new Api.InvokeWithoutUpdates({
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

|   Name    | Type | Description |
| :-------: | ---- | ----------- |
| **query** | !X   | The query   |

## Result

X

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.
