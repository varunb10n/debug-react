# @domlog/react-log

A tiny react component for logging!

## Install

```sh
npm install @domlog/react-log
```

## Import

```js
import Log from "@domlog/react-log";
```

## Usage

```js
const data = {
    name: 'Sun',
    type: "star"
    radius: 696340,
}

<Log data={...data} />
```

# Options

```js
data: {
    [key: string]: any;
};
open?: boolean;
type?: "raw" | "formatted";
```

## Test

```sh
npm test
```

## Pack

```sh
npm pack
```

## Linking locally, from project directory

```sh
npm link @domlog/react-log
```
