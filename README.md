# __Path (JavaScript)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/underscore-path-js](https://img.shields.io/badge/hugoalh--studio/underscore--path--js-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/underscore-path-js")](https://github.com/hugoalh-studio/underscore-path-js)
[![NPM: @hugoalh/underscore-path](https://img.shields.io/badge/@hugoalh/underscore--path-CB3837?logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/underscore-path")](https://www.npmjs.com/package/@hugoalh/underscore-path)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/underscore-path-js?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/underscore-path-js?color=2187C0&label=&style=flat "Latest Release Date"))

A JavaScript module to bring back `__dirname` and `__filename` within 2 lines of code.

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

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via Installation

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via console/shell/terminal:
    - Via NPM
      ```sh
      npm install @hugoalh/underscore-path[@<Tag>]
      ```
    - Via PNPM
      ```sh
      pnpm add @hugoalh/underscore-path[@<Tag>]
      ```
    - Via Yarn
      ```sh
      yarn add @hugoalh/underscore-path[@<Tag>]
      ```
2. Import at the script (`<ScriptName>.js`):
    ```js
    import ... from "@hugoalh/underscore-path";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `package.json`](./package.json) property `exports` for available sub paths.

### Via NPM Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script (`<ScriptName>.js`):
    ```js
    import ... from "npm:@hugoalh/underscore-path[@<Tag>]";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `package.json`](./package.json) property `exports` for available sub paths.

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
