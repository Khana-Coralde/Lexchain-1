import { Core } from '@walletconnect/core';
import { WalletConnectModal, createWeb3Wallet, useWalletConnectModal } from '@walletconnect/modal-react-native';
import { ethers } from 'ethers';
import React, { createContext, useContext, useEffect, useState } from 'react';

const PROJECT_ID = '65a452aa65ce3ba1aca19618ba991bba';

const metadata = {
  name: 'LexChain',
  description: 'Blockchain app built with Expo + WalletConnect',
  url: 'https://yourapp.com',
  icons: ['https://walletconnect.com/walletconnect-logo.png'],
};

const WalletConnectContext = createContext(null);

export const WalletConnectProvider = ({ children }) => {
  const [web3wallet, setWeb3Wallet] = useState(null);
  const [session, setSession] = useState(null);

  const { open, close } = useWalletConnectModal();

  useEffect(() => {
    const core = new Core({ projectId: PROJECT_ID });

    async function init() {
      try {
        const wallet = await createWeb3Wallet({
          core,
          metadata,
        });

        setWeb3Wallet(wallet);

        wallet.on('session_proposal', async (proposal) => {
          await wallet.approveSession({
            id: proposal.id,
            namespaces: {
              eip155: {
                accounts: [`eip155:1:${ethers.Wallet.createRandom().address}`],
                methods: ['eth_sendTransaction', 'personal_sign', 'eth_signTypedData'],
                events: ['chainChanged', 'accountsChanged'],
              },
            },
          });
        });

        wallet.on('session_created', (session) => {
          setSession(session);
        });

        wallet.on('session_delete', () => {
          setSession(null);
        });

      } catch (err) {
        console.error('Failed to initialize WalletConnect:', err);
      }
    }

    init();
  }, []);

  const connect = async () => {
    try {
      await open();
    } catch (err) {
      console.error('Error opening WalletConnect modal:', err);
    }
  };

  const disconnect = async () => {
    if (session && web3wallet) {
      await web3wallet.disconnectSession({
        topic: session.topic,
        reason: { code: 6000, message: 'User disconnected' },
      });
      setSession(null);
    }
  };

  const address = session?.namespaces?.eip155?.accounts?.[0]?.split(':')[2] || null;

  return (
    <WalletConnectContext.Provider value={{ session, connect, disconnect, address }}>
      {children}
      <WalletConnectModal
        projectId={PROJECT_ID}
        providerMetadata={metadata}
      />
    </WalletConnectContext.Provider>
  );
};

export const useWallet = () => useContext(WalletConnectContext);

