# account.getNotifySettings

Gets current notification settings for a given user/group, from all users/all groups.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getNotifySettings({
		peer: new Api.InputNotifyPeer({...}),
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
    const result: Api.Returns a PeerNotifySettings object containing current notification settings. = await client.invoke(new Api.account.getNotifySettings({
		peer: new Api.InputNotifyPeer({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
peerNotifySettings#af509d20 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?string = PeerNotifySettings;
---functions---
account.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;
```

## Parameters

|   Name   | Type                                                              | Description         |
| :------: | ----------------------------------------------------------------- | ------------------- |
| **peer** | [InputNotifyPeer](https://core.telegram.org/type/InputNotifyPeer) | Notification source |

## Result

Returns a [PeerNotifySettings](https://core.telegram.org/type/PeerNotifySettings) object containing current notification settings.

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages
