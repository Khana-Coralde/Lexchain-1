import React, { createContext, ReactNode, useContext, useState } from 'react';

type WalletContextType = {
  address: string | null;
  connect: () => void;
  disconnect: () => void;
};

const WalletConnectContext = createContext<WalletContextType | null>(null);

export const MockWalletConnectProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);

  const connect = () => {
    console.log('Mock connect called');
    setTimeout(() => {
      setAddress('0xMockWalletAddress12345'); // Simulated address
    }, 1000);
  };

  const disconnect = () => {
    console.log('Mock disconnect called');
    setAddress(null);
  };

  return (
    <WalletConnectContext.Provider value={{ address, connect, disconnect }}>
      {children}
    </WalletConnectContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletConnectContext);
  if (!context) throw new Error("useWallet must be used within a MockWalletConnectProvider");
  return context;
};
