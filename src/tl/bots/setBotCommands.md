# bots.setBotCommands

Set bot command list

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.bots.setBotCommands({
		commands: [new Api.BotCommand({...})],
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
    const result: Api.Bool = await client.invoke(new Api.bots.setBotCommands({
		commands: [new Api.BotCommand({...})],
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
bots.setBotCommands#805d46f6 commands:Vector<BotCommand> = Bool;
```

## Parameters

|     Name     | Type                                                                                                            | Description  |
| :----------: | --------------------------------------------------------------------------------------------------------------- | ------------ |
| **commands** | [Vector](https://core.telegram.org/type/Vector%20t) < [BotCommand](https://core.telegram.org/type/BotCommand) > | Bot commands |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
