# account.SetGlobalPrivacySettings

Set global privacy settings



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result = await client.invoke(new Api.account.SetGlobalPrivacySettings({
    settings: new Api.GlobalPrivacySettings({
        archiveAndMuteNewNoncontactPeers: false
    })
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.GlobalPrivacySettings = await client.invoke(new Api.account.SetGlobalPrivacySettings({
    settings: new Api.GlobalPrivacySettings({
        archiveAndMuteNewNoncontactPeers: false
    })
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **settings** | [GlobalPrivacySettings](https://core.telegram.org/type/GlobalPrivacySettings) | Global privacy settings 


## Result

[GlobalPrivacySettings](https://core.telegram.org/type/GlobalPrivacySettings)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | AUTOARCHIVE\_NOT\_AVAILABLE | The autoarchive setting is not available at this time: please check the value of the [autoarchive\_setting\_available field in client config »](https://core.telegram.org/api/config#client-configuration) before calling this method. 


## Can bots use this method?

No

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.




