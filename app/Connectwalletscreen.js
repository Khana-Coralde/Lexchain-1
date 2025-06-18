import React from 'react';
import { Button, Text, View } from 'react-native';
import { useWallet } from '../context/WalletConnectProvider';

export default function ConnectWalletScreen() {
  const { connect, address } = useWallet();

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      {address ? (
        <Text>Connected: {address}</Text>
      ) : (
        <Button title="Connect Wallet" onPress={() => connect()} />
      )}
    </View>
  );
}
