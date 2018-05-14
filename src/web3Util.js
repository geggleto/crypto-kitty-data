import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/metamask'));
// set the provider you want from Web3.providers
export default web3;
