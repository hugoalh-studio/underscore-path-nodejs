# __Path (NodeJS)

[⚖️ MIT](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/underscore-path-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/underscore-path-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/underscore-path-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/underscore-path-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/underscore-path-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/underscore-path-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/underscore-path-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/underscore-path-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/underscore-path) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/underscore-path?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/underscore-path/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/underscore-path/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to bring back `__dirname` and `__filename` within 2 lines of code.

```js
/* ☹️ */
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

```js
/* 🙂 */
import underscorePath from "@hugoalh/underscore-path";
const { __dirname, __filename } = underscorePath(import.meta.url);
```

## 📓 Documentation

### Getting Started

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/underscore-path
```

```js
/* Either */
import { ... } from "@hugoalh/underscore-path";// Named Import
import * as underscorePath from "@hugoalh/underscore-path";// Namespace Import
import underscorePath from "@hugoalh/underscore-path";// Default Import (Function `underscorePath`)
```

### API

- ```ts
  function underscorePath(importMetaURL: string): UnderscorePathOutput;
  ```
- ```ts
  interface UnderscorePathOutput {
    __dirname: string;
    __filename: string;
  }
  ```

### Example

- ```js
  const { __dirname, __filename } = underscorePath(import.meta.url);
  ```
