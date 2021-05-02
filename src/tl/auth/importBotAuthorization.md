# auth.importBotAuthorization

Login as a bot

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
        new Api.auth.importBotAuthorization({
            flags: 8379541,
            apiId: 8032379,
            apiHash: 'random string here',
            botAuthToken: 'random string here',
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
    const result: Api.Returns an auth.Authorization object with information on the new authorization. = await client.invoke(new Api.auth.importBotAuthorization({
		flags: 8379541,
		apiId: 8032379,
		apiHash: 'random string here',
		botAuthToken: 'random string here',
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
auth.authorization#cd050916 flags:# tmp_sessions:flags.0?int user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
```

## Parameters

|        Name        | Type                                            | Description                                                                             |
| :----------------: | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
|     **flags**      | [int](https://core.telegram.org/type/int)       | Reserved for future use                                                                 |
|     **api_id**     | [int](https://core.telegram.org/type/int)       | Application identifier (see. [App configuration](https://core.telegram.org/myapp))      |
|    **api_hash**    | [string](https://core.telegram.org/type/string) | Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) |
| **bot_auth_token** | [string](https://core.telegram.org/type/string) | Bot token (see [bots](https://core.telegram.org/bots))                                  |

## Result

Returns an [auth.Authorization](https://core.telegram.org/type/auth.Authorization) object with information on the new authorization.

## Possible errors

| Code | Type                 | Description                                |
| :--: | -------------------- | ------------------------------------------ |
| 400  | ACCESS_TOKEN_EXPIRED | Bot token expired                          |
| 400  | ACCESS_TOKEN_INVALID | The provided token is not valid            |
| 400  | API_ID_INVALID       | The api_id/api_hash combination is invalid |
| 401  | AUTH_KEY_INVALID     | Auth key invalid                           |

## Can bots use this method?

Yes

## Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)
