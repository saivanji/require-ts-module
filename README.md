# require-ts-module

A package for requiring TypeScript modules inside a JavaScript file

## Usage

```js
const path = require("path");
const { requireTs } = require("require-ts-module");

const absoluteModulePath = require.resolve("path/to/typescript/file.ts");
const tsModule = requireTs(absoluteModulePath);

// `tsModule` will contain variables exported by requiring module
console.log(tsModule);
```
