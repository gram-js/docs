# channels.EditLocation

Edit location of geogroup

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
    new Api.channels.EditLocation({
      channel: "username",
      geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43,
      }),
      address: "some string here",
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
    new Api.channels.EditLocation({
      channel: "username",
      geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43,
      }),
      address: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                          | Description                                       |
| :----------: | ------------------------------------------------------------- | ------------------------------------------------- |
| **channel**  | [InputChannel](https://core.telegram.org/type/InputChannel)   | [Geogroup](https://core.telegram.org/api/channel) |
| **geoPoint** | [InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | New geolocation                                   |
| **address**  | [string](https://core.telegram.org/type/string)               | Address string                                    |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                | Description                                   |
| :--: | ------------------- | --------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400  | CHAT_NOT_MODIFIED   | The pinned message wasn't modified.           |
| 400  | MEGAGROUP_REQUIRED  | You can only use this method on a supergroup. |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
