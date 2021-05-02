# messages.getGameHighScores

Get highscores of a game

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getGameHighScores({
		peer: new Api.InputPeer({...}),
		id: 8119184,
		userId: new Api.InputUser({...}),
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
    const result: Api.messages.HighScores = await client.invoke(new Api.messages.getGameHighScores({
		peer: new Api.InputPeer({...}),
		id: 8119184,
		userId: new Api.InputUser({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
---functions---
messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
```

## Parameters

|    Name     | Type                                                  | Description                              |
| :---------: | ----------------------------------------------------- | ---------------------------------------- |
|  **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer) | Where was the game sent                  |
|   **id**    | [int](https://core.telegram.org/type/int)             | ID of message with game media attachment |
| **user_id** | [InputUser](https://core.telegram.org/type/InputUser) | Get high scores made by a certain user   |

## Result

[messages.HighScores](https://core.telegram.org/type/messages.HighScores)

## Possible errors

| Code | Type               | Description                             |
| :--: | ------------------ | --------------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid      |
| 400  | PEER_ID_INVALID    | The provided peer id is invalid         |
| 400  | USER_BOT_REQUIRED  | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
