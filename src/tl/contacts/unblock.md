# contacts.unblock

Deletes the user from the blacklist.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.unblock({
		id: new Api.InputPeer({...}),
		}));
    console.log(result); // prints the result
})();

```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Bool = await client.invoke(new Api.contacts.unblock({
		id: new Api.InputPeer({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.unblock#bea65d50 id:InputPeer = Bool;
```

## Parameters

|  Name  | Type                                                  | Description |
| :----: | ----------------------------------------------------- | ----------- |
| **id** | [InputPeer](https://core.telegram.org/type/InputPeer) | User ID     |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | CONTACT_ID_INVALID | The provided contact ID is invalid |

## Can bots use this method?

Yes

## Related pages
