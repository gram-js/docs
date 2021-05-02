# invokeAfterMsg

Invokes a query after successfull completion of one of the previous queries.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.invokeAfterMsg({
		msgId: 5572845,
		query: new Api.!X({...}),
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
    const result: Api.X = await client.invoke(new Api.invokeAfterMsg({
		msgId: 5572845,
		query: new Api.!X({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
---functions---
invokeAfterMsg#cb9f372d {X:Type} msg_id:long query:!X = X;
```

## Parameters

|    Name    | Type                                        | Description                                         |
| :--------: | ------------------------------------------- | --------------------------------------------------- |
| **msg_id** | [long](https://core.telegram.org/type/long) | Message identifier on which a current query depends |
| **query**  | !X                                          | The query itself                                    |

## Result

X

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
