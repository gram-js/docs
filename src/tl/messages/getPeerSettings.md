# messages.getPeerSettings

Get peer settings

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getPeerSettings({
		peer: new Api.InputPeer({...}),
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
    const result: Api.PeerSettings = await client.invoke(new Api.messages.getPeerSettings({
		peer: new Api.InputPeer({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
peerSettings#733f2961 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true geo_distance:flags.6?int = PeerSettings;
---functions---
messages.getPeerSettings#3672e09c peer:InputPeer = PeerSettings;
```

## Parameters

|   Name   | Type                                                  | Description |
| :------: | ----------------------------------------------------- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The peer    |

## Result

[PeerSettings](https://core.telegram.org/type/PeerSettings)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHANNEL_INVALID | The provided channel is invalid |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages
