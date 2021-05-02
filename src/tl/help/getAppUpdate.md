# help.getAppUpdate

Returns information on update availability for the current application.

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
        new Api.help.getAppUpdate({
            source: 'random string here',
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
    const result: Api.help.AppUpdate = await client.invoke(
        new Api.help.getAppUpdate({
            source: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
help.appUpdate#1da7158f flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;
---functions---
help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

## Parameters

|    Name    | Type                                            | Description |
| :--------: | ----------------------------------------------- | ----------- |
| **source** | [string](https://core.telegram.org/type/string) | Source      |

## Result

[help.AppUpdate](https://core.telegram.org/type/help.AppUpdate)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
