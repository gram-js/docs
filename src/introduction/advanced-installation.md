# Advanced Installation

This page will walk you through various types of installation

## Table of Contents

## Node.js

GramJS works out of the box in node and can be installed from npm:

```bash
$ npm i telegram
```

> The package name is telegram not gramjs.

You can also install it from github where you will find the latest changes (possibly not stable):

```bash
$ git clone https://github.com/gram-js/gramjs
$ tsc
```

## Browser

GramJS uses webpack to provide a browser file if needed. You can also import it into your project and it will compile fine.

To get a JS file first clone the repo and install all dev dependencies then simply use

```bash
$ webpack
```

you will find the bundle file in the `browser` folder.

Currently, bundle files aren't provided separately and need to be compiled. GramJS has [a telegram group](https://t.me/GramJSChat) where you can ask for a file if building is out of the option for you.
