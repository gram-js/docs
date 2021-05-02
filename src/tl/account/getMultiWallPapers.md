# account.getMultiWallPapers

Get info about multiple wallpapers

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getMultiWallPapers({
		wallpapers: [new Api.InputWallPaper({...})],
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
    const result: Api.Vector<WallPaper> = await client.invoke(new Api.account.getMultiWallPapers({
		wallpapers: [new Api.InputWallPaper({...})],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
---functions---
account.getMultiWallPapers#65ad71dc wallpapers:Vector<InputWallPaper> = Vector<WallPaper>;
```

## Parameters

|      Name      | Type                                                                                                                    | Description                    |
| :------------: | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **wallpapers** | [Vector](https://core.telegram.org/type/Vector%20t) < [InputWallPaper](https://core.telegram.org/type/InputWallPaper) > | Wallpapers to fetch info about |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[WallPaper](https://core.telegram.org/type/WallPaper)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
