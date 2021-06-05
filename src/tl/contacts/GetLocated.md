# contacts.GetLocated

Get contacts near you



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.GetLocated({
    geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43
    }),
    selfExpires: 43
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
    const result: Api.Updates = await client.invoke(new Api.contacts.GetLocated({
    geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43
    }),
    selfExpires: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **background** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | While the geolocation of the current user is public, clients should update it in the background every half-an-hour or so, while setting this flag.   <br>Do this only if the new location is more than 1 KM away from the previous one, or if the previous location is unknown. 
| **geoPoint** | [InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | Geolocation 
| **selfExpires** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | If set, the geolocation of the current user will be public for the specified number of seconds; pass 0x7fffffff to disable expiry, 0 to make the current geolocation private; if the flag isn't set, no changes will be applied. 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | GEO\_POINT\_INVALID | Invalid geoposition provided 
| 406 | USERPIC\_UPLOAD\_REQUIRED | You must have a profile picture to publish your geolocation 


## Can bots use this method?

No

## Related pages


