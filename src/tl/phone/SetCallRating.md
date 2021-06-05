# phone.SetCallRating

Rate a call



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.SetCallRating({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    rating: 43,
    comment: 'some string here',
    userInitiative: true
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
    const result: Api.Updates = await client.invoke(new Api.phone.SetCallRating({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    rating: 43,
    comment: 'some string here',
    userInitiative: true
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
| **userInitiative** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether the user decided on their own initiative to rate the call 
| **peer** | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | The call to rate 
| **rating** | [int](https://core.telegram.org/type/int) | Rating in `1-5` stars 
| **comment** | [string](https://core.telegram.org/type/string) | An additional comment 


## Result

[Updates](https://core.telegram.org/type/Updates) with info about the rating message sent to the official VoIP bot



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CALL\_PEER\_INVALID | The provided call peer object is invalid 


## Can bots use this method?

No

## Related pages


