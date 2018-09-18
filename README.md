# ex-react-native-i18n-ts

This repository is forked from [react-native-i18n-ts](https://github.com/quipper/react-native-i18n-ts)

`ex-react-native-i18n-ts` is a `d.ts` file generator for [ex-react-native-i18n](https://github.com/xcarpentier/ex-react-native-i18n).

With generated `d.ts` file you can treat `I18n` object type-safely!

![demo](https://raw.githubusercontent.com/quipper/react-native-i18n-ts/master/doc/demo.gif)

## Installation

#### NPM

```sh
npm install -D ex-react-native-i18n-ts
```

#### Yarn

```sh
yarn add -D ex-react-native-i18n-ts
```

## Configuration

First of all specify the following settings in root `package.json`.

- `model`: file extension type can be either `.json`, `.ts` or `.js`
- `outputDir`: `d.ts` file will be emitted in specified directory

```json
"ex-react-native-i18n-ts": {
  "model": "./src/locale/languages/en.json",
  "outputDir": "./typings"
}
```

And add `outputDir` dir into `filesGlob` option in `tsconfig.json`.

```json
"filesGlob": [
  "typings/*.d.ts",
],
```

That's it! Now you can use `ex-react-native-i18n-ts` command which generates corresponding `d.ts` file.

We recommend to add scripts below into `package.json`.

```json
"scripts": {
  "i18n-ts": "ex-react-native-i18n-ts",
  "i18n-ts:watch": "ex-react-native-i18n-ts -w"
},
```

## Options

### Watch mode

You can enable watch mode by adding `--watch` (shorthand `-w`) flag.

In the watch mode, react-native-i18n-ts watches update of model file and generates d.ts file when the model is updated.

```sh
i18n-ts --watch
```

## Licence

```
Copyright 2018 Quipper Limited.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
