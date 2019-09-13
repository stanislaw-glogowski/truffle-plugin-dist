# Truffle distribution plugin

[![NPM version][npm-image]][npm-url]

## Installation

```bash 
$ npm i truffle-plugin-dist -D
```

## Setup
Activate plugin in `truffle.js`
```
  plugins: [
    'truffle-plugin-dist',
  ],
```
Add `main` and `types` in `package.json`
```
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
```

## Configuration
Define `dist` schema in `truffle.js`
```
  dist: {
    'Example': { 
      abi: true,
      addresses: true,
      byteCodeHash: true,
    },
  },
```

## Usage
```bash
$ truffle run dist
```

## License

The MIT License

[npm-image]: https://badge.fury.io/js/truffle-plugin-dist.svg
[npm-url]: https://npmjs.org/package/truffle-plugin-dist

