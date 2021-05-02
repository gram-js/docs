# account.updateNotifySettings

Edits notification settings from a given user/group, from all users/all groups.

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
        new Api.account.updateNotifySettings({
            peer: new Api.InputNotifyPeer({
                /* ... */
            }),
            settings: new Api.InputPeerNotifySettings({
                /* ... */
            }),
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
        new Api.account.updateNotifySettings({
            peer: new Api.InputNotifyPeer({
                /* ... */
            }),
            settings: new Api.InputPeerNotifySettings({
                /* ... */
            }),
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
account.updateNotifySettings#84be5b93 peer:InputNotifyPeer settings:InputPeerNotifySettings = Bool;
```

## Parameters

|     Name     | Type                                                                              | Description           |
| :----------: | --------------------------------------------------------------------------------- | --------------------- |
|   **peer**   | [InputNotifyPeer](https://core.telegram.org/type/InputNotifyPeer)                 | Notification source   |
| **settings** | [InputPeerNotifySettings](https://core.telegram.org/type/InputPeerNotifySettings) | Notification settings |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description                                |
| :--: | ---------------- | ------------------------------------------ |
| 400  | CHANNEL_PRIVATE  | You haven't joined this channel/supergroup |
| 400  | MSG_ID_INVALID   | Invalid message ID provided                |
| 400  | PEER_ID_INVALID  | The provided peer id is invalid            |
| 400  | SETTINGS_INVALID | Invalid settings were provided             |

## Can bots use this method?

Yes

## Related pages