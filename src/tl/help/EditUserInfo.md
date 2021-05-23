# help.EditUserInfo

Internal use



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.EditUserInfo({
    userId: 'username',
    message: 'Hello there!',
    entities: [new Api.MessageEntityUnknown({
        offset: 43,
        length: 43
    })]
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
    const result: Api.help.UserInfo = await client.invoke(new Api.help.EditUserInfo({
    userId: 'username',
    message: 'Hello there!',
    entities: [new Api.MessageEntityUnknown({
        offset: 43,
        length: 43
    })]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | User 
| **message** | [string](https://core.telegram.org/type/string) | Message 
| **entities** | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | [Message entities for styled text](https://core.telegram.org/api/entities) 


## Result

[help.UserInfo](https://core.telegram.org/type/help.UserInfo)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities




