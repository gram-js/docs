# FAQ

> Frequently asked questions

## Table of Contents

## How do I stop logging?

logging is enabled by default to the most verbose option.to remove it you can do the following

::::tabs
:::tab{title="JavaScript"}

```js
client.setLogLevel("none"); // no logging
client.setLogLevel("error"); // only errors
client.setLogLevel("warn"); // warnings too
client.setLogLevel("info"); // info too
client.setLogLevel("debug"); // everything
```

:::
:::tab{title="TypeScript"}

```ts
client.setLogLevel("none"); // no logging
client.setLogLevel("error"); // only errors
client.setLogLevel("warn"); // warnings too
client.setLogLevel("info"); // info too
client.setLogLevel("debug"); // everything
```

:::
::::

## Can I use a proxy?

Yes you can, but only on Node!

Currently only socks5,4 and MTProto proxies are supported.
HTTP proxies are not supported as they required a completely different connection type.
