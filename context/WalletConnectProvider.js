// context/WalletConnectProvider.js
import { WalletConnectProvider as WCProvider } from '@walletconnect/react-native-dapp';
import { Web3Modal } from '@web3modal/wagmi-react-native';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Make sure you replace with **your actual project ID**
const projectId = '65a452aa65ce3ba1aca19618ba991bba';

// Set up wagmi config
const { chains, publicClient } = configureChains(
  [polygon],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

export const WalletConnectProvider = ({ children }) => {
  return (
    <WCProvider>
      <WagmiConfig config={wagmiConfig}>
        {children}
        <Web3Modal projectId={projectId} chains={chains} />
      </WagmiConfig>
    </WCProvider>
  );
};
