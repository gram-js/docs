# contacts.ResolveUsername

Resolve a @username to get peer info

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
    new Api.contacts.ResolveUsername({
      username: "some string here",
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

  const result: Api.contacts.ResolvedPeer = await client.invoke(
    new Api.contacts.ResolveUsername({
      username: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                            | Description          |
| :----------: | ----------------------------------------------- | -------------------- |
| **username** | [string](https://core.telegram.org/type/string) | @username to resolve |

## Result

[contacts.ResolvedPeer](https://core.telegram.org/type/contacts.ResolvedPeer)

## Possible errors

| Code | Type                     | Description                            |
| :--: | ------------------------ | -------------------------------------- |
| 400  | CONNECTION_LAYER_INVALID | Layer invalid.                         |
| 400  | USERNAME_INVALID         | The provided username is not valid.    |
| 400  | USERNAME_NOT_OCCUPIED    | The provided username is not occupied. |

## Can bots use this method?

Yes

## Related pages
