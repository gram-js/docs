# channels.reportSpam

Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup

## Example

::::tabs

:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.reportSpam({
		channel: new Api.InputChannel({...}),
		userId: new Api.InputUser({...}),
		id: [1656135],
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
    const result: Api.Bool = await client.invoke(new Api.channels.reportSpam({
		channel: new Api.InputChannel({...}),
		userId: new Api.InputUser({...}),
		id: [1656135],
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
channels.reportSpam#fe087810 channel:InputChannel user_id:InputUser id:Vector<int> = Bool;
```

## Parameters

|    Name     | Type                                                                                              | Description                                |
| :---------: | ------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                       | Supergroup                                 |
| **user_id** | [InputUser](https://core.telegram.org/type/InputUser)                                             | ID of the user that sent the spam messages |
|   **id**    | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | IDs of spam messages                       |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code  | Type                   | Description                                  |
| :---: | ---------------------- | -------------------------------------------- |
|  400  | CHANNEL_INVALID        | The provided channel is invalid              |
|  400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this |
|  400  | INPUT_USER_DEACTIVATED | The specified user was deleted               |
|  400  | USER_ID_INVALID        | The provided user ID is invalid              |

## Can bots use this method?

Yes

## Related pages
