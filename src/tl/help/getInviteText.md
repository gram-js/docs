# help.getInviteText

Returns localized text of a text message with an invitation.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.getInviteText({}));
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
    const result: Api.help.InviteText = await client.invoke(
        new Api.help.getInviteText({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
help.inviteText#18cb9f78 message:string = help.InviteText;
---functions---
help.getInviteText#4d392343 = help.InviteText;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[help.InviteText](https://core.telegram.org/type/help.InviteText)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
