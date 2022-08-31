# contacts.ImportContacts

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.

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
    new Api.contacts.ImportContacts({
      contacts: [
        new Api.InputPhoneContact({
          clientId: readBigIntFromBuffer(generateRandomBytes(8)),
          phone: "some string here",
          firstName: "some string here",
          lastName: "some string here",
        }),
      ],
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

  const result: Api.contacts.ImportedContacts = await client.invoke(
    new Api.contacts.ImportContacts({
      contacts: [
        new Api.InputPhoneContact({
          clientId: readBigIntFromBuffer(generateRandomBytes(8)),
          phone: "some string here",
          firstName: "some string here",
          lastName: "some string here",
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                                                             | Description                |
| :----------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **contacts** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputContact](https://core.telegram.org/type/InputContact)> | List of contacts to import |

## Result

[contacts.ImportedContacts](https://core.telegram.org/type/contacts.ImportedContacts)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [contacts.addContact](https://core.telegram.org/method/contacts.addContact)

Add an existing telegram user as contact.
