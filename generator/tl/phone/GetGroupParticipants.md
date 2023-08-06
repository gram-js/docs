# phone.GetGroupParticipants

Get group call participants



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

    const result = await client.invoke(new Api.phone.GetGroupParticipants({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    ids: ['username'],
    sources: [43],
    offset: 'some string here',
    limit: 100
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

    const result: Api.phone.GroupParticipants = await client.invoke(new Api.phone.GetGroupParticipants({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    ids: ['username'],
    sources: [43],
    offset: 'some string here',
    limit: 100
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | Group call 
| **ids** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](https://core.telegram.org/type/InputPeer)> | If specified, will fetch group participant info about the specified peers 
| **sources** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | If specified, will fetch group participant info about the specified WebRTC source IDs 
| **offset** | [string](https://core.telegram.org/type/string) | Offset for results, taken from the `next_offset` field of [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants), initially an empty string. Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants) if it is empty, to avoid an infinite loop. 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 


## Result

[phone.GroupParticipants](https://core.telegram.org/type/phone.GroupParticipants)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants)

Info about the participants of a group call or livestream



#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




