# channels.editLocation

Edit location of geogroup

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.editLocation({
		channel: new Api.InputChannel({...}),
		geoPoint: new Api.InputGeoPoint({...}),
		address: 'random string here',
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
    const result: Api.Bool = await client.invoke(new Api.channels.editLocation({
		channel: new Api.InputChannel({...}),
		geoPoint: new Api.InputGeoPoint({...}),
		address: 'random string here',
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
channels.editLocation#58e63f6d channel:InputChannel geo_point:InputGeoPoint address:string = Bool;
```

## Parameters

|     Name      | Type                                                          | Description                                       |
| :-----------: | ------------------------------------------------------------- | ------------------------------------------------- |
|  **channel**  | [InputChannel](https://core.telegram.org/type/InputChannel)   | [Geogroup](https://core.telegram.org/api/channel) |
| **geo_point** | [InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | New geolocation                                   |
|  **address**  | [string](https://core.telegram.org/type/string)               | Address string                                    |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                                  |
| :--: | ------------------ | -------------------------------------------- |
| 400  | MEGAGROUP_REQUIRED | You can only use this method on a supergroup |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
