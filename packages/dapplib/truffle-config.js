require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain proof gesture deputy force general'; 
let testAccounts = [
"0xfa881e6918ef97f0cef8b030140b44927e9d53d3aab5643291e2d78490012294",
"0x2eddbba16e87f118ffe90b37b89c73dc59e7f2534b85289554ec6e4d14d4fed7",
"0x28fe8c665393ca5bbca384bfe8cd0685146a29d6bae2802e0d17a83e8e48bc34",
"0xfdb2f1268258b1a90999034810642458b9a68c3c543073350bad3ec81e2cf152",
"0x3ee91598867d7535713b6d1c28eb7ab71ef8a2685e4480ab96fee38748c483ea",
"0xfa09d06be27d06b568d5baea787c93f2f8cadebd4283d676f41ebc4931227dd8",
"0xc477d81d80cd16639453f6946a9bb20f9cac28d4b5c864b32cb00ac7a1d6342d",
"0xef6cddcf0efdeb8b05f421c48a1487ed0570304b09f923939a8846793f11d088",
"0x2fcc104e8f72610248ef4af36ec781ad0ebc8184cca07c9f3a7d2c20e9fd0297",
"0xa3b7d08dc27ded577ebf7772ff70da85bc6ea47024eb976dd3911595304ae984"
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

