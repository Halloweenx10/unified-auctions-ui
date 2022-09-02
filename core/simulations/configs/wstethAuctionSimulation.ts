import { HARDHAT_PRIVATE_KEY, HARDHAT_PUBLIC_KEY } from '../../helpers/constants';
import { warpTime, resetBlockchainFork } from '../../helpers/hardhat';
export default {
    title: 'Fork block with active WSTETH-A auction',
    steps: [
        {
            title: 'Reset blockchain fork',
            // Few blocks before WSTETH-A is taken at 14052147,
            // https://etherscan.io/address/0x49a33a28c4c7d9576ab28898f4c9ac7e52ea457at
            entry: async () => {
                console.info(
                    `Wallet Credentials: public key: ${HARDHAT_PUBLIC_KEY}, private key: ${HARDHAT_PRIVATE_KEY}`
                );
                await resetBlockchainFork(14052140, HARDHAT_PRIVATE_KEY);
            },
        },
        {
            title: 'Skip time',
            entry: async () => await warpTime('custom'),
        },
    ],
};
