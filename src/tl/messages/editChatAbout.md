# messages.editChatAbout

Edit the description of a [group/supergroup/channel](https://core.telegram.org/api/channel).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.editChatAbout({
		peer: new Api.InputPeer({...}),
		about: 'random string here',
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
    const result: Api.Bool = await client.invoke(new Api.messages.editChatAbout({
		peer: new Api.InputPeer({...}),
		about: 'random string here',
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
messages.editChatAbout#def60797 peer:InputPeer about:string = Bool;
```

## Parameters

|   Name    | Type                                                  | Description                                                            |
| :-------: | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer) | The [group/supergroup/channel](https://core.telegram.org/api/channel). |
| **about** | [string](https://core.telegram.org/type/string)       | The new description                                                    |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                    | Description                                  |
| :--: | ----------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID         | The provided channel is invalid              |
| 400  | CHANNEL_PRIVATE         | You haven't joined this channel/supergroup   |
| 400  | CHAT_ABOUT_NOT_MODIFIED | About text has not changed                   |
| 400  | CHAT_ABOUT_TOO_LONG     | Chat about too long                          |
| 400  | CHAT_ADMIN_REQUIRED     | You must be an admin in this chat to do this |
| 400  | CHAT_NOT_MODIFIED       | The pinned message wasn't modified           |
| 403  | CHAT_WRITE_FORBIDDEN    | You can't write in this chat                 |
| 400  | PEER_ID_INVALID         | The provided peer id is invalid              |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
