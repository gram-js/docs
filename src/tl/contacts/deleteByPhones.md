# contacts.deleteByPhones

Delete contacts by phone number

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
        new Api.contacts.deleteByPhones({
            phones: ['random string here'],
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
    const result: Api.Bool = await client.invoke(
        new Api.contacts.deleteByPhones({
            phones: ['random string here'],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.deleteByPhones#1013fd9e phones:Vector<string> = Bool;
```

## Parameters

|    Name    | Type                                                                                                    | Description   |
| :--------: | ------------------------------------------------------------------------------------------------------- | ------------- |
| **phones** | [Vector](https://core.telegram.org/type/Vector%20t) < [string](https://core.telegram.org/type/string) > | Phone numbers |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
