# help.getSupportName

Get localized name of the telegram support user

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
        new Api.help.getSupportName({
            403: new Api.USER_INVALID({
                /* ... */
            }),
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
    const result: Api.help.SupportName = await client.invoke(
        new Api.help.getSupportName({
            403: new Api.USER_INVALID({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
help.supportName#8c05f1c9 name:string = help.SupportName;
---functions---
help.getSupportName#d360e72c = help.SupportName;
```

## Parameters

| Name | Type         | Description           |
| :--: | ------------ | --------------------- |
| 403  | USER_INVALID | Invalid user provided |

## Result

[help.SupportName](https://core.telegram.org/type/help.SupportName)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
