# help.editUserInfo

Internal use

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
        new Api.help.editUserInfo({
            userId: new Api.InputUser({
                /* ... */
            }),
            message: 'random string here',
            entities: [
                new Api.MessageEntity({
                    /* ... */
                }),
            ],
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
    const result: Api.help.UserInfo = await client.invoke(
        new Api.help.editUserInfo({
            userId: new Api.InputUser({
                /* ... */
            }),
            message: 'random string here',
            entities: [
                new Api.MessageEntity({
                    /* ... */
                }),
            ],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;
---functions---
help.editUserInfo#66b91b70 user_id:InputUser message:string entities:Vector<MessageEntity> = help.UserInfo;
```

## Parameters

|     Name     | Type                                                                                                                  | Description                                                                |
| :----------: | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **user_id**  | [InputUser](https://core.telegram.org/type/InputUser)                                                                 | User                                                                       |
| **message**  | [string](https://core.telegram.org/type/string)                                                                       | Message                                                                    |
| **entities** | [Vector](https://core.telegram.org/type/Vector%20t) < [MessageEntity](https://core.telegram.org/type/MessageEntity) > | [Message entities for styled text](https://core.telegram.org/api/entities) |

## Result

[help.UserInfo](https://core.telegram.org/type/help.UserInfo)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
