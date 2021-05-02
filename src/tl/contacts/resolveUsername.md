# contacts.resolveUsername

Resolve a @username to get peer info

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
        new Api.contacts.resolveUsername({
            username: 'random string here',
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
    const result: Api.contacts.ResolvedPeer = await client.invoke(
        new Api.contacts.resolveUsername({
            username: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolveUsername#f93ccba3 username:string = contacts.ResolvedPeer;
```

## Parameters

|     Name     | Type                                            | Description          |
| :----------: | ----------------------------------------------- | -------------------- |
| **username** | [string](https://core.telegram.org/type/string) | @username to resolve |

## Result

[contacts.ResolvedPeer](https://core.telegram.org/type/contacts.ResolvedPeer)

## Possible errors

| Code | Type                          | Description                                                                           |
| :--: | ----------------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY           | The temporary auth key must be binded to the permanent auth key to use these methods. |
| 400  | CONNECTION_DEVICE_MODEL_EMPTY | Device model empty                                                                    |
| 400  | CONNECTION_LAYER_INVALID      | Layer invalid                                                                         |
| 400  | USERNAME_INVALID              | The provided username is not valid                                                    |
| 400  | USERNAME_NOT_OCCUPIED         | The provided username is not occupied                                                 |

## Can bots use this method?

Yes

## Related pages
