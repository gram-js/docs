# messages.GetInlineGameHighScores

Get highscores of a game sent using an inline bot



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetInlineGameHighScores({
    id: new Api.InputBotInlineMessageID({
        dcId: 43,
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    userId: 'username'
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
    const result: Api.messages.HighScores = await client.invoke(new Api.messages.GetInlineGameHighScores({
    id: new Api.InputBotInlineMessageID({
        dcId: 43,
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    userId: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **id** | [InputBotInlineMessageID](https://core.telegram.org/type/InputBotInlineMessageID) | ID of inline message 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | Get high scores of a certain user 


## Result

[messages.HighScores](https://core.telegram.org/type/messages.HighScores)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid 
| 400 | USER\_BOT\_REQUIRED | This method can only be called by a bot 


## Can bots use this method?

Yes

## Related pages


