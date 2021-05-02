# help.getCdnConfig

Get configuration for [CDN](https://core.telegram.org/cdn) file downloads.

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
        new Api.help.getCdnConfig({
            401: new Api.AUTH_KEY_PERM_EMPTY({
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
    const result: Api.CdnConfig = await client.invoke(
        new Api.help.getCdnConfig({
            401: new Api.AUTH_KEY_PERM_EMPTY({
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
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;
---functions---
help.getCdnConfig#52029342 = CdnConfig;
```

## Parameters

| Name | Type                | Description                                                                           |
| :--: | ------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY | The temporary auth key must be binded to the permanent auth key to use these methods. |

## Result

[CdnConfig](https://core.telegram.org/type/CdnConfig)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)
