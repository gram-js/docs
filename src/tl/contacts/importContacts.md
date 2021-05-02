# contacts.importContacts

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.contacts.importContacts({
            contacts: [
                new Api.InputContact({
                    /* ... */
                }),
            ],
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.contacts.ImportedContacts = await client.invoke(
        new Api.contacts.importContacts({
            contacts: [
                new Api.InputContact({
                    /* ... */
                }),
            ],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
---functions---
contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

## Parameters

|     Name     | Type                                                                                                                | Description                |
| :----------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **contacts** | [Vector](https://core.telegram.org/type/Vector%20t) < [InputContact](https://core.telegram.org/type/InputContact) > | List of contacts to import |

## Result

[contacts.ImportedContacts](https://core.telegram.org/type/contacts.ImportedContacts)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [contacts.addContact](https://core.telegram.org/method/contacts.addContact)

Add an existing telegram user as contact.
