# payments.getBankCardData

Get info about a credit card

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
        new Api.payments.getBankCardData({
            number: 'random string here',
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
    const result: Api.payments.BankCardData = await client.invoke(
        new Api.payments.getBankCardData({
            number: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
payments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;
---functions---
payments.getBankCardData#2e79d779 number:string = payments.BankCardData;
```

## Parameters

|    Name    | Type                                            | Description        |
| :--------: | ----------------------------------------------- | ------------------ |
| **number** | [string](https://core.telegram.org/type/string) | Credit card number |

## Result

[payments.BankCardData](https://core.telegram.org/type/payments.BankCardData)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages