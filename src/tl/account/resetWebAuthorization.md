# account.resetWebAuthorization

Log out an active web [telegram login](https://core.telegram.org/widgets/login) session

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
        new Api.account.resetWebAuthorization({
            hash: 4457235,
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
    const result: Api.Bool = await client.invoke(
        new Api.account.resetWebAuthorization({
            hash: 4457235,
        }),
    );
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
account.resetWebAuthorization#2d01b9ef hash:long = Bool;
```

## Parameters

|   Name   | Type                                        | Description                                                            |
| :------: | ------------------------------------------- | ---------------------------------------------------------------------- |
| **hash** | [long](https://core.telegram.org/type/long) | [Session](https://core.telegram.org/constructor/webAuthorization) hash |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [webAuthorization](https://core.telegram.org/constructor/webAuthorization)

Represents a bot logged in using the [Telegram login widget](https://core.telegram.org/widgets/login)

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)
