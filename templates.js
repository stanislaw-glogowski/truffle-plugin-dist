const now = new Date();

const prefix = `// updated at: ${now.toISOString()}`;

/**
 * index.js template
 */
const indexJs = (contracts) => `${prefix}

/* eslint-disable */

const data = require('./data');

const ContractNames = {
${contracts
  .map(({ name }) => `  ${name}: '${name}',`)
  .join('\n')}
};

function getContractAddress(contractName, network) {
  let result;

  if (data[contractName]) {
    result = data[contractName].addresses[network];
  }

  return result || null;
}

function getContractAbi(contractName) {
  let result;

  if (data[contractName]) {
    result = data[contractName].abi;
  }

  return result || null;
}

function getContractByteCodeHash(contractName) {
  let result;

  if (data[contractName]) {
    result = data[contractName].byteCodeHash;
  }

  return result || null;
}

module.exports = {
  ContractNames,
  getContractAddress,
  getContractAbi,
  getContractByteCodeHash,
};
`;

/**
 * index.d.ts template
 */
const indexDTs = (contracts) => `${prefix}

export declare enum ContractNames {
${contracts
  .map(({ name }) => `  ${name} = '${name}',`)
  .join('\n')}
}

export declare function getContractAddress(contractName: ContractNames, network: string): string;

export declare function getContractAbi(contractName: ContractNames): any;

export declare function getContractByteCodeHash(contractName: ContractNames): string;
`;

/**
 * data.js template
 */
const dataJs = (data) => `${prefix}

/* eslint-disable */

module.exports = ${JSON.stringify(data, undefined, 2)};
`;

module.exports = {
  now,
  indexJs,
  indexDTs,
  dataJs,
};
