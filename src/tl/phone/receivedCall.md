# phone.receivedCall

Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.receivedCall({
		peer: new Api.InputPhoneCall({...}),
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
    const result: Api.Bool = await client.invoke(new Api.phone.receivedCall({
		peer: new Api.InputPhoneCall({...}),
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
phone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;
```

## Parameters

|   Name   | Type                                                            | Description                       |
| :------: | --------------------------------------------------------------- | --------------------------------- |
| **peer** | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | The phone call we're currently in |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                  | Description                              |
| :--: | --------------------- | ---------------------------------------- |
| 400  | CALL_ALREADY_DECLINED | The call was already declined            |
| 400  | CALL_PEER_INVALID     | The provided call peer object is invalid |

## Can bots use this method?

Yes

## Related pages
