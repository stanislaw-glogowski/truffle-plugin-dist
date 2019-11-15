# Truffle distribution plugin

[![NPM version][npm-image]][npm-url]

## Installation

```bash 
$ npm i truffle-plugin-dist -D
```

## Configuration
Activate plugin in `truffle.js`
```js
module.exports = {

// ...

  plugins: [
    'truffle-plugin-dist',
  ],
}
```
Add `main` and `types` in `package.json`
```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

Define `schema` schema in `truffle.js`
```js
module.exports = {

// ...

  schema: {
    Example: { 
      abi: true,
      addresses: true,
      byteCodeHash: true,
    },
  },
};
```

## Create distribution
```bash
$ truffle run dist
```

## Usage
```js
import { 
  ContractNames, 
  getContractAddress, 
  getContractAbiDefinition, 
  getContractByteCodeHash, 
} from 'your-contracts-npm-package'; 

console.log(
  'Example contract mainnet address:', 
  getContractAddress(ContractNames.Example, '1'),
);
console.log(
  'Example contract kovan address:', 
  getContractAddress(ContractNames.Example, '42'),
);
console.log(
  'Example contract abi definition:', 
  getContractAbiDefinition(ContractNames.Example),
);
console.log(
  'Example contract byteCodeHash:',
  getContractByteCodeHash(ContractNames.Example),
);
```

## License

The MIT License

[npm-image]: https://badge.fury.io/js/truffle-plugin-dist.svg
[npm-url]: https://npmjs.org/package/truffle-plugin-dist

