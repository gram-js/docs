# contacts.getContactIDs

Get contact by telegram IDs

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
        new Api.contacts.getContactIDs({
            hash: 4483311,
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
    const result: Api.Vector<int> = await client.invoke(
        new Api.contacts.getContactIDs({
            hash: 4483311,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
contacts.getContactIDs#2caa4a42 hash:int = Vector<int>;
```

## Parameters

|   Name   | Type                                      | Description                                                                                            |
| :------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
