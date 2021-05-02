# messages.setInlineGameScore

Use this method to set the score of the specified user in a game sent as an inline message (bots only).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.setInlineGameScore({
		editMessage: true,
		force: true,
		id: new Api.InputBotInlineMessageID({...}),
		userId: new Api.InputUser({...}),
		score: 3916422,
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
    const result: Api.Bool = await client.invoke(new Api.messages.setInlineGameScore({
		editMessage: true,
		force: true,
		id: new Api.InputBotInlineMessageID({...}),
		userId: new Api.InputUser({...}),
		score: 3916422,
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
messages.setInlineGameScore#15ad9f64 flags:# edit_message:flags.0?true force:flags.1?true id:InputBotInlineMessageID user_id:InputUser score:int = Bool;
```

## Parameters

|       Name       | Type                                                                                                                              | Description                                                                                                         |
| :--------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)             |
| **edit_message** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set this flag if the game message should be automatically edited to include the current scoreboard                  |
|    **force**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
|      **id**      | [InputBotInlineMessageID](https://core.telegram.org/type/InputBotInlineMessageID)                                                 | ID of the inline message                                                                                            |
|   **user_id**    | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | User identifier                                                                                                     |
|    **score**     | [int](https://core.telegram.org/type/int)                                                                                         | New score                                                                                                           |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                             |
| :--: | ------------------ | --------------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid      |
| 400  | USER_BOT_REQUIRED  | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
