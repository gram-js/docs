# contacts.getSaved

Get all contacts

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.getSaved({
		403: new Api.TAKEOUT_REQUIRED({...}),
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
    const result: Api.Vector<SavedContact> = await client.invoke(new Api.contacts.getSaved({
		403: new Api.TAKEOUT_REQUIRED({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
---functions---
contacts.getSaved#82f1e39f = Vector<SavedContact>;
```

## Parameters

| Name | Type             | Description                                    |
| :--: | ---------------- | ---------------------------------------------- |
| 403  | TAKEOUT_REQUIRED | A takeout session has to be initialized, first |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[SavedContact](https://core.telegram.org/type/SavedContact)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
