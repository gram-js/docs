# help.getTermsOfServiceUpdate

Look for updates of telegram's terms of service

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
        new Api.help.getTermsOfServiceUpdate({}),
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
    const result: Api.help.TermsOfServiceUpdate = await client.invoke(
        new Api.help.getTermsOfServiceUpdate({}),
    );
    console.log(result); // prints the result
})();
```

:::

::::

## TL schema

```txt
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;
---functions---
help.getTermsOfServiceUpdate#2ca51fd1 = help.TermsOfServiceUpdate;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[help.TermsOfServiceUpdate](https://core.telegram.org/type/help.TermsOfServiceUpdate)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
