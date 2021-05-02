# auth.resetAuthorizations

Terminates all user's authorized sessions except for the current one.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.auth.resetAuthorizations({
		406: new Api.FRESH_RESET_AUTHORISATION_FORBIDDEN({...}),
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
    const result: Api.Bool = await client.invoke(new Api.auth.resetAuthorizations({
		406: new Api.FRESH_RESET_AUTHORISATION_FORBIDDEN({...}),
		}));
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
auth.resetAuthorizations#9fab0d1a = Bool;
```

## Parameters

| Name | Type                                | Description                                                                                               |
| :--: | ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 406  | FRESH_RESET_AUTHORISATION_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [account.registerDevice](https://core.telegram.org/method/account.registerDevice)

Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates)
