# help.getCountriesList

Get name, ISO code, localized name and phone codes/patterns of all available countries

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
        new Api.help.getCountriesList({
            langCode: 'random string here',
            hash: 9454367,
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
    const result: Api.help.CountriesList = await client.invoke(
        new Api.help.getCountriesList({
            langCode: 'random string here',
            hash: 9454367,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
help.countriesListNotModified#93cc1f32 = help.CountriesList;
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;
---functions---
help.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;
```

## Parameters

|     Name      | Type                                            | Description                                                                                            |
| :-----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **lang_code** | [string](https://core.telegram.org/type/string) | Language code of the current user                                                                      |
|   **hash**    | [int](https://core.telegram.org/type/int)       | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[help.CountriesList](https://core.telegram.org/type/help.CountriesList)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
