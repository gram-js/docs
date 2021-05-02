# users.setSecureValueErrors

Notify the user that the sent [passport](https://core.telegram.org/passport) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.users.setSecureValueErrors({
		id: new Api.InputUser({...}),
		errors: [new Api.SecureValueError({...})],
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
    const result: Api.Bool = await client.invoke(new Api.users.setSecureValueErrors({
		id: new Api.InputUser({...}),
		errors: [new Api.SecureValueError({...})],
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
users.setSecureValueErrors#90c894b5 id:InputUser errors:Vector<SecureValueError> = Bool;
```

## Parameters

|    Name    | Type                                                                                                                        | Description |
| :--------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   **id**   | [InputUser](https://core.telegram.org/type/InputUser)                                                                       | The user    |
| **errors** | [Vector](https://core.telegram.org/type/Vector%20t) < [SecureValueError](https://core.telegram.org/type/SecureValueError) > | Errors      |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | USER_ID_INVALID | The provided user ID is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)
