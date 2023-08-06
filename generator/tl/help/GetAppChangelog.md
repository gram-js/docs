# help.GetAppChangelog

Get changelog of current app.  

Typically, an [updates](https://core.telegram.org/constructor/updates) constructor will be returned, containing one or more [updateServiceNotification](https://core.telegram.org/constructor/updateServiceNotification) updates with app-specific changelogs.



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

    const result = await client.invoke(new Api.help.GetAppChangelog({
    prevAppVersion: 'some string here'
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

    const result: Api.Updates = await client.invoke(new Api.help.GetAppChangelog({
    prevAppVersion: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **prevAppVersion** | [string](https://core.telegram.org/type/string) | Previous app version 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [Updates](https://core.telegram.org/constructor/updates)

Full constructor of updates



#### [updateServiceNotification](https://core.telegram.org/constructor/updateServiceNotification)

A service message for the user.




