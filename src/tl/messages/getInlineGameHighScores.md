# messages.getInlineGameHighScores

Get highscores of a game sent using an inline bot

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
        new Api.messages.getInlineGameHighScores({
            id: new Api.InputBotInlineMessageID({
                /* ... */
            }),
            userId: new Api.InputUser({
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
    const result: Api.messages.HighScores = await client.invoke(
        new Api.messages.getInlineGameHighScores({
            id: new Api.InputBotInlineMessageID({
                /* ... */
            }),
            userId: new Api.InputUser({
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
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
---functions---
messages.getInlineGameHighScores#f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

## Parameters

|    Name     | Type                                                                              | Description                       |
| :---------: | --------------------------------------------------------------------------------- | --------------------------------- |
|   **id**    | [InputBotInlineMessageID](https://core.telegram.org/type/InputBotInlineMessageID) | ID of inline message              |
| **user_id** | [InputUser](https://core.telegram.org/type/InputUser)                             | Get high scores of a certain user |

## Result

[messages.HighScores](https://core.telegram.org/type/messages.HighScores)

## Possible errors

| Code | Type               | Description                             |
| :--: | ------------------ | --------------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid      |
| 400  | USER_BOT_REQUIRED  | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
