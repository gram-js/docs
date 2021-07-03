# contacts.AddContact

Add an existing telegram user as contact.

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
    new Api.contacts.AddContact({
      id: "username",
      firstName: "some string here",
      lastName: "some string here",
      phone: "some string here",
      addPhonePrivacyException: true,
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
  const result: Api.Updates = await client.invoke(
    new Api.contacts.AddContact({
      id: "username",
      firstName: "some string here",
      lastName: "some string here",
      phone: "some string here",
      addPhonePrivacyException: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|             Name             | Type                                                                                                                              | Description                                                                                             |
| :--------------------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|          **flags**           | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **addPhonePrivacyException** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Allow the other user to see our phone number?                                                           |
|            **id**            | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | Telegram ID of the other user                                                                           |
|        **firstName**         | [string](https://core.telegram.org/type/string)                                                                                   | First name                                                                                              |
|         **lastName**         | [string](https://core.telegram.org/type/string)                                                                                   | Last name                                                                                               |
|          **phone**           | [string](https://core.telegram.org/type/string)                                                                                   | User's phone number                                                                                     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | CONTACT_ID_INVALID | The provided contact ID is invalid |
| 400  | CONTACT_NAME_EMPTY | Contact name empty                 |
| 400  | MSG_ID_INVALID     | Invalid message ID provided        |

## Can bots use this method?

No

## Related pages

#### [contacts.importContacts](https://core.telegram.org/method/contacts.importContacts)

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.
