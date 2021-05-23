# photos.GetUserPhotos

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
    new Api.photos.GetUserPhotos({
      userId: "username",
      offset: 43,
      maxId: 0,
      limit: 100,
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
  const result: Api.photos.Photos = await client.invoke(
    new Api.photos.GetUserPhotos({
      userId: "username",
      offset: 43,
      maxId: 0,
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name  | Type      | Description          |
| :----: | --------- | -------------------- |
| userId | InputUser | No description found |
| offset | int       | No description found |
| maxId  | long      | No description found |
| limit  | int       | No description found |

### [](#result)Result

photos.Photos

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
