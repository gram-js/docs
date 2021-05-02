# messages.readMessageContents

Notifies the sender about the recipient having listened a voice message or watched a video.

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
        new Api.messages.readMessageContents({
            id: [7235023],
        }),
    );
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
    const result: Api.Returns a list of listened\watched messages as Vector<int>. = await client.invoke(new Api.messages.readMessageContents({
		id: [7235023],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;
```

## Parameters

|  Name  | Type                                                                                              | Description     |
| :----: | ------------------------------------------------------------------------------------------------- | --------------- |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | Message ID list |

## Result

Returns a list of listened\watched messages as [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)>.

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
