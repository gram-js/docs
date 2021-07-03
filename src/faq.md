# FAQ

> Frequently asked questions

## Table of Contents

## How do I stop logging?

logging is enabled by default to the most verbose option.to remove it you can do the following

::::tabs
:::tab{title="JavaScript"}

```js
const { Logger } = require("telegram/extensions");
Logger.setLevel("none"); // no logging
Logger.setLevel("error"); // only errors
Logger.setLevel("none"); // warnings too
Logger.setLevel("none"); // info too
Logger.setLevel("debug"); // everything
```

:::
:::tab{title="TypeScript"}

```ts
import { Logger } from "telegram/extensions";
Logger.setLevel("none"); // no logging
Logger.setLevel("error"); // only errors
Logger.setLevel("none"); // warnings too
Logger.setLevel("none"); // info too
Logger.setLevel("debug"); // everything
```

:::
::::

## Can I use a proxy?

Sadly no, GramJS is meant to be used in both browser and Node.js ecosystem, and as far as I know, there is no way to use proxies in browsers so it's not currently possible.
