# __Path (NodeJS)

[⚖️ MIT](./LICENSE.md)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/underscore-path-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/underscore-path-nodejs)

|  | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/underscore-path-nodejs) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/underscore-path-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/underscore-path-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/underscore-path-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/underscore-path-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/underscore-path) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/underscore-path/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/underscore-path/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

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
import { underscorePath } from "@hugoalh/underscore-path";
const { __dirname, __filename } = underscorePath(import.meta.url);
```

## 🔰 Begin

### Bun

> **🧪 Experimental:** Bun is still under development.

- **Target Version:** ^ v1.0.0, &:
  - TypeScript >= v5.1.0 *\[Development\]*
- **Require Permission:** *N/A*
- **Domain/Registry:**
  - [NPM](https://www.npmjs.com/package/@hugoalh/underscore-path)
    ```sh
    bun add @hugoalh/underscore-path[@<Tag>]
    ```
    ```js
    import ... from "@hugoalh/underscore-path[@<Tag>]";
    ```

> **ℹ️ Notice:** It is also able to import part of the module with sub path if available, see [file `package.json`](./package.json) property `exports` for available sub paths.

### NodeJS

- **Target Version:** ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0, &:
  - TypeScript >= v5.1.0 *\[Development\]*
- **Require Permission:** *N/A*
- **Domain/Registry:**
  - [NPM](https://www.npmjs.com/package/@hugoalh/underscore-path)
    ```sh
    npm install @hugoalh/underscore-path[@<Tag>]
    ```
    ```js
    import ... from "@hugoalh/underscore-path";
    ```

> **ℹ️ Notice:** It is also able to import part of the module with sub path if available, see [file `package.json`](./package.json) property `exports` for available sub paths.

## 🧩 API

- ```ts
  function underscorePath(importMetaURL: string): UnderscorePathOutput;
  ```
- ```ts
  interface UnderscorePathOutput {
    __dirname: string;
    __filename: string;
  }
  ```

> **ℹ️ Notice:** Documentation is included inside the script file.
