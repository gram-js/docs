# help.getConfig

Returns current configuration, including data center configuration.

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
        new Api.help.getConfig({
            400: new Api.CONNECTION_API_ID_INVALID({
                /* ... */
            }),
            400: new Api.CONNECTION_APP_VERSION_EMPTY({
                /* ... */
            }),
            400: new Api.CONNECTION_DEVICE_MODEL_EMPTY({
                /* ... */
            }),
            400: new Api.CONNECTION_LANG_PACK_INVALID({
                /* ... */
            }),
            400: new Api.CONNECTION_LAYER_INVALID({
                /* ... */
            }),
            400: new Api.CONNECTION_NOT_INITED({
                /* ... */
            }),
            400: new Api.CONNECTION_SYSTEM_EMPTY({
                /* ... */
            }),
            400: new Api.CONNECTION_SYSTEM_LANG_CODE_EMPTY({
                /* ... */
            }),
            400: new Api.DATA_INVALID({
                /* ... */
            }),
            400: new Api.INPUT_LAYER_INVALID({
                /* ... */
            }),
            400: new Api.MSG_ID_INVALID({
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
    const result: Api.Config = await client.invoke(
        new Api.help.getConfig({
            400: new Api.CONNECTION_API_ID_INVALID({
                /* ... */
            }),
            400: new Api.CONNECTION_APP_VERSION_EMPTY({
                /* ... */
            }),
            400: new Api.CONNECTION_DEVICE_MODEL_EMPTY({
                /* ... */
            }),
            400: new Api.CONNECTION_LANG_PACK_INVALID({
                /* ... */
            }),
            400: new Api.CONNECTION_LAYER_INVALID({
                /* ... */
            }),
            400: new Api.CONNECTION_NOT_INITED({
                /* ... */
            }),
            400: new Api.CONNECTION_SYSTEM_EMPTY({
                /* ... */
            }),
            400: new Api.CONNECTION_SYSTEM_LANG_CODE_EMPTY({
                /* ... */
            }),
            400: new Api.DATA_INVALID({
                /* ... */
            }),
            400: new Api.INPUT_LAYER_INVALID({
                /* ... */
            }),
            400: new Api.MSG_ID_INVALID({
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
config#330b4067 flags:# phonecalls_enabled:flags.1?true default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true ignore_phone_entities:flags.5?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true pfs_enabled:flags.13?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int saved_gifs_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int stickers_faved_limit:int channels_read_media_period:int tmp_sessions:flags.0?int pinned_dialogs_count_max:int pinned_infolder_count_max:int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int = Config;
---functions---
help.getConfig#c4f9186b = Config;
```

## Parameters

| Name | Type                              | Description                         |
| :--: | --------------------------------- | ----------------------------------- |
| 400  | CONNECTION_API_ID_INVALID         | The provided API id is invalid      |
| 400  | CONNECTION_APP_VERSION_EMPTY      | App version is empty                |
| 400  | CONNECTION_DEVICE_MODEL_EMPTY     | Device model empty                  |
| 400  | CONNECTION_LANG_PACK_INVALID      | Language pack invalid               |
| 400  | CONNECTION_LAYER_INVALID          | Layer invalid                       |
| 400  | CONNECTION_NOT_INITED             | Connection not initialized          |
| 400  | CONNECTION_SYSTEM_EMPTY           | Connection system empty             |
| 400  | CONNECTION_SYSTEM_LANG_CODE_EMPTY | The system_lang_code field is empty |
| 400  | DATA_INVALID                      | Encrypted data invalid              |
| 400  | INPUT_LAYER_INVALID               | The provided layer is invalid       |
| 400  | MSG_ID_INVALID                    | Invalid message ID provided         |

## Result

[Config](https://core.telegram.org/type/Config)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
