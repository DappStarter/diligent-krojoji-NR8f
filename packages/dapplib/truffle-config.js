require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember hour hunt fat surround stable'; 
let testAccounts = [
"0x8b6b76c87ab54cd1dab2ca799c0af9774b8f59f479848dd4ee4eb6e654f62d4d",
"0xd03fc4b63fb693ca5af341adafa67a78a8b28a6a06b2748e9b06ec8dae6b3faf",
"0xe85eb1751640408d5a8965bbefb049feb14d9ff61f494474a324b045a74d744b",
"0x44b6e71bbe19dae1ebcbbf09b343bfb4939bc6fb384656ccb3338d55426e3d58",
"0xb1b0763f5cd70cae6eb2d704b903f49b89b925e03f225d6cf87f3d24c6ca2252",
"0xa2111b145da8828a70728dd7ebc0c41d3863f0e72f795bf1c5b360d2fa7640c5",
"0x6db36333dd840e59acbf3d3027cd054a47d2a7198b752909f7cc47be56304ee4",
"0x2156ece80a17029efd5e2423273416c6e3021e792d314958cfebe6edb08071b7",
"0xd1811849222337fec546447771f9dde14d221fea05420ddbf84a9c60928f4aad",
"0xe3f41e29e7f57bc9463fa6c171ea367367c494d4e00c98f4900a67e79f22f5dc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

