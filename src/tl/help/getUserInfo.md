# help.getUserInfo

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
    const result = await client.invoke(new Api.help.getUserInfo({
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
    const result: Api.help.UserInfo = await client.invoke(new Api.help.getUserInfo({
		userId: new Api.InputUser({...}),
		}));
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
help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
```

## Parameters

|    Name     | Type                                                  | Description |
| :---------: | ----------------------------------------------------- | ----------- |
| **user_id** | [InputUser](https://core.telegram.org/type/InputUser) | User ID     |

## Result

[help.UserInfo](https://core.telegram.org/type/help.UserInfo)

## Possible errors

| Code | Type         | Description           |
| :--: | ------------ | --------------------- |
| 403  | USER_INVALID | Invalid user provided |

## Can bots use this method?

Yes

## Related pages
