# messages.setEncryptedTyping

Send typing event by the current user to a secret chat.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.setEncryptedTyping({
		peer: new Api.InputEncryptedChat({...}),
		typing: new Api.Bool({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.setEncryptedTyping({
		peer: new Api.InputEncryptedChat({...}),
		typing: new Api.Bool({...}),
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
messages.setEncryptedTyping#791451ed peer:InputEncryptedChat typing:Bool = Bool;
```

## Parameters

|    Name    | Type                                                                    | Description    |
| :--------: | ----------------------------------------------------------------------- | -------------- |
|  **peer**  | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID |
| **typing** | [Bool](https://core.telegram.org/type/Bool)                             | Typing.        |

**Possible values**:  
[(boolTrue)](https://core.telegram.org/constructor/boolTrue), if the user started typing and more than **5 seconds** have passed since the last request  
[(boolFalse)](https://core.telegram.org/constructor/boolFalse), if the user stopped typing|

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |

## Can bots use this method?

Yes

## Related pages

#### [boolTrue](https://core.telegram.org/constructor/boolTrue)

The constructor can be interpreted as a **boolean**true value.

#### [boolFalse](https://core.telegram.org/constructor/boolFalse)

Constructor may be interpreted as a **boolean**false value.
