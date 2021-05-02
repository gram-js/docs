# help.saveAppLog

Saves logs of application on the server.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.saveAppLog({
		events: [new Api.InputAppEvent({...})],
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
    const result: Api.Bool = await client.invoke(new Api.help.saveAppLog({
		events: [new Api.InputAppEvent({...})],
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
help.saveAppLog#6f02f748 events:Vector<InputAppEvent> = Bool;
```

## Parameters

|    Name    | Type                                                                                                                  | Description          |
| :--------: | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| **events** | [Vector](https://core.telegram.org/type/Vector%20t) < [InputAppEvent](https://core.telegram.org/type/InputAppEvent) > | List of input events |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
