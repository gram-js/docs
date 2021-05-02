# users.getUsers

Returns basic user info according to their identifiers.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.users.getUsers({
		id: [new Api.InputUser({...})],
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
    const result: Api.Vector<User> = await client.invoke(new Api.users.getUsers({
		id: [new Api.InputUser({...})],
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
users.getUsers#d91a548 id:Vector<InputUser> = Vector<User>;
```

## Parameters

|  Name  | Type                                                                                                          | Description              |
| :----: | ------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t) < [InputUser](https://core.telegram.org/type/InputUser) > | List of user identifiers |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[User](https://core.telegram.org/type/User)>

## Possible errors

| Code | Type                  | Description                                                                           |
| :--: | --------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY   | The temporary auth key must be binded to the permanent auth key to use these methods. |
| 400  | CHANNEL_PRIVATE       | You haven't joined this channel/supergroup                                            |
| 400  | CONNECTION_NOT_INITED | Connection not initialized                                                            |
| 400  | INPUT_LAYER_INVALID   | The provided layer is invalid                                                         |
| 400  | MSG_ID_INVALID        | Invalid message ID provided                                                           |

## Can bots use this method?

Yes

## Related pages
