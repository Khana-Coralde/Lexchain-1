// app/ConnectWalletScreen.js
import { useWeb3Modal } from '@web3modal/wagmi-react-native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAccount } from 'wagmi';

export default function ConnectWalletScreen() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <Text style={styles.text}>Connected Wallet:</Text>
          <Text style={styles.address}>{address}</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>No wallet connected</Text>
          <Button title="Connect Wallet" onPress={open} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
  address: { fontSize: 16, fontWeight: 'bold', color: '#333' },
});
