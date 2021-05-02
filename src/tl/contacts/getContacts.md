# contacts.getContacts

Returns the current user's contact list.

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
        new Api.contacts.getContacts({
            hash: 3457568,
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
    const result: Api.contacts.Contacts = await client.invoke(
        new Api.contacts.getContacts({
            hash: 3457568,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;
---functions---
contacts.getContacts#c023849f hash:int = contacts.Contacts;
```

## Parameters

|   Name   | Type                                      | Description                                                                                                                                                                                                                                                                                                                                                        |
| :------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **hash** | [int](https://core.telegram.org/type/int) | If there already is a full contact list on the client, a [hash](https://core.telegram.org/api/offsets#hash-generation) of a the list of contact IDs in ascending order may be passed in this parameter. If the contact set was not changed, [(contacts.contactsNotModified)](https://core.telegram.org/constructor/contacts.contactsNotModified) will be returned. |

## Result

[contacts.Contacts](https://core.telegram.org/type/contacts.Contacts)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [contacts.contactsNotModified](https://core.telegram.org/constructor/contacts.contactsNotModified)

Contact list on the server is the same as the list on the client.
