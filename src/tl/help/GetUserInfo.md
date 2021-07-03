# help.GetUserInfo

Internal use

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
    new Api.help.GetUserInfo({
      userId: "username",
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
  const result: Api.help.UserInfo = await client.invoke(
    new Api.help.GetUserInfo({
      userId: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                  | Description |
| :--------: | ----------------------------------------------------- | ----------- |
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | User ID     |

## Result

[help.UserInfo](https://core.telegram.org/type/help.UserInfo)

## Possible errors

| Code | Type         | Description           |
| :--: | ------------ | --------------------- |
| 403  | USER_INVALID | Invalid user provided |

## Can bots use this method?

No

## Related pages
