# ⌗ qwik-copy-text

A react text copy component to easily copy html as rich text format in clipboard. ✨

[![npm version](https://badge.fury.io/js/qwik-copy-text.svg)](https://badge.fury.io/js/qwik-copy-text)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Features

- Hassle free html to rich formatted text 🥳
- Lightweight ⚡
- Easy to use 🐥
- fully customizable style ⚒️

## Install

Via package managers:

```bash
npm i qwik-copy-text
```

## Example Usage

```bash
import QwikCopy from 'qwik-copy-text'

// custom style
const styles = {
    backgroundColor: '#ffebb3'
}


 <QwikCopy 
 isDisabled={false} 
 htmlContent={`<h1> Hello from qwikcopy! </h1>`} 
 />
```

## Props

| Prop      | Type      | Requirement  |Description                                         |
| --------- | --------- | ------------ | --------------------------------------------------- |
| isDisabled     | `boolean`  | `required` | hide/show the component `true or false` |
| htmlContent| `string`  | `required` | html to `rich text`   |
| styles| `object`  | `optional` | object of `React style`   |

## Contributing

Feel free to submit any issues or pull request 🙂
