# account.checkUsername

Validates a username and checks availability.

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
        new Api.account.checkUsername({
            username: 'random string here',
        }),
    );
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
    const result: Api.Return Bool result on whether the passed username can be used. = await client.invoke(new Api.account.checkUsername({
		username: 'random string here',
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
account.checkUsername#2714d86c username:string = Bool;
```

## Parameters

|     Name     | Type                                            | Description |
| :----------: | ----------------------------------------------- | ----------- |
| **username** | [string](https://core.telegram.org/type/string) | username    |

Accepted characters: A-z (case-insensitive), 0-9 and underscores.  
Length: 5-32 characters.|

## Result

Return [Bool](https://core.telegram.org/type/Bool) result on whether the passed username can be used.

## Possible errors

| Code | Type             | Description           |
| :--: | ---------------- | --------------------- |
| 400  | USERNAME_INVALID | Unacceptable username |

## Can bots use this method?

Yes

## Related pages
