# langpack.GetStrings

Get strings from a language pack

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
    new Api.langpack.GetStrings({
      langPack: "some string here",
      langCode: "some string here",
      keys: ["some string here"],
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

  const result: Api.Vector<LangPackString> = await client.invoke(
    new Api.langpack.GetStrings({
      langPack: "some string here",
      langCode: "some string here",
      keys: ["some string here"],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                                                 | Description        |
| :----------: | ---------------------------------------------------------------------------------------------------- | ------------------ |
| **langPack** | [string](https://core.telegram.org/type/string)                                                      | Language pack name |
| **langCode** | [string](https://core.telegram.org/type/string)                                                      | Language code      |
|   **keys**   | [Vector](https://core.telegram.org/type/Vector%20t)<[string](https://core.telegram.org/type/string)> | Strings to get     |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackString](https://core.telegram.org/type/LangPackString)>

## Possible errors

| Code | Type              | Description                            |
| :--: | ----------------- | -------------------------------------- |
| 400  | LANG_PACK_INVALID | The provided language pack is invalid. |

## Can bots use this method?

No

## Related pages
