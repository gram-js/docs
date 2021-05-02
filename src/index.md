# Quick Start

This should set you up in no time!

## Table of Contents

## Installation

Installing GramJS is a straight forward process:

```bash
$ npm i telegram
```

> If you want to use GramJS in a browser please check the advanced installation page.

Once you've installed GramJS, you'll need an API ID and an API hash (read more in [Authorization](./getting-started/authorization)). Get them from https://my.telegram.org/apps:

Afterward, you can use the following code to send a message to yourself.

::::tabs
:::tab{title="JavaScript"}

```js
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const input = require('input'); // npm i input

const apiId = 123456;
const apiHash = '123456abcdfg';
const stringSession = new StringSession(''); // fill this later with the value from session.save()

(async () => {
    console.log('Loading interactive example...');
    const client = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });
    await client.start({
        phoneNumber: async () => await input.text('number ?'),
        password: async () => await input.text('password?'),
        phoneCode: async () => await input.text('Code ?'),
        onError: err => console.log(err),
    });
    console.log('You should now be connected.');
    console.log(client.session.save()); // Save this string to avoid logging in again
    await client.sendMessage('me', { message: 'Hello!' });
})();
```

:::
:::tab{title="TypeScript"}

```ts
import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import input from 'input'; // npm i input

const apiId = 123456;
const apiHash = '123456abcdfg';
const stringSession = new StringSession(''); // fill this later with the value from session.save()

(async () => {
    console.log('Loading interactive example...');
    const client = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });
    await client.start({
        phoneNumber: async () => await input.text('number ?'),
        password: async () => await input.text('password?'),
        phoneCode: async () => await input.text('Code ?'),
        onError: err => console.log(err),
    });
    console.log('You should now be connected.');
    console.log(client.session.save()); // Save this string to avoid logging in again
    await client.sendMessage('me', { message: 'Hello!' });
})();
```

:::
::::

Using session strings is the most reliable way to save your session for now.

## Full API

GramJS is still in its early stages but it can access all API methods from telegram using the following

::::tabs
:::tab{title="JavaScript"}

```js
const { Api } = require('telegram/tl');

const result = await client.invoke(
    new Api.channels.CheckUsername({
        username: 'testing',
    }),
);
console.log('Result is ', result);
```

:::
:::tab{title="TypeScript"}

```ts
import { Api } from 'telegram/tl';

const result = await client.invoke(
    new Api.channels.CheckUsername({
        username: 'testing',
    }),
);
console.log('Result is ', result);
```

:::
::::

All methods and classes are accessible under Api. for a full list of them check out https://gram.js.org/
