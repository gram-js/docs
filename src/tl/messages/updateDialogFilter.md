# messages.updateDialogFilter

Update [folder](https://core.telegram.org/api/folders)

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
        new Api.messages.updateDialogFilter({
            id: 5100686,
            filter: new Api.DialogFilter({
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.updateDialogFilter({
            id: 5100686,
            filter: new Api.DialogFilter({
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
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateDialogFilter#1ad4a04a flags:# id:int filter:flags.0?DialogFilter = Bool;
```

## Parameters

|    Name    | Type                                                                                                                                       | Description                                                                                             |
| :--------: | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **flags**  | [#](https://core.telegram.org/type/%23)                                                                                                    | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **id**   | [int](https://core.telegram.org/type/int)                                                                                                  | [Folder](https://core.telegram.org/api/folders) ID                                                      |
| **filter** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[DialogFilter](https://core.telegram.org/type/DialogFilter) | [Folder](https://core.telegram.org/api/folders) info                                                    |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type              | Description                        |
| :--: | ----------------- | ---------------------------------- |
| 400  | FILTER_ID_INVALID | The specified filter ID is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
