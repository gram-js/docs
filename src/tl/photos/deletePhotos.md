# photos.deletePhotos

Deletes profile photos.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.photos.deletePhotos({
		id: [new Api.InputPhoto({...})],
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
    const result: Api.Method returns a list of successfully deleted photos in Vector<long> = await client.invoke(new Api.photos.deletePhotos({
		id: [new Api.InputPhoto({...})],
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
photos.deletePhotos#87cf7f2f id:Vector<InputPhoto> = Vector<long>;
```

## Parameters

|  Name  | Type                                                                                                            | Description            |
| :----: | --------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t) < [InputPhoto](https://core.telegram.org/type/InputPhoto) > | Input photos to delete |

## Result

Method returns a list of successfully deleted photos in [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
