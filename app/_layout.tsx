import { Stack } from "expo-router";
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
// import { WalletConnectProvider } from '../context/WalletConnectProvider'; // real wallet
import { MockWalletConnectProvider } from '../context/MockWalletConnectProvider'; //mock wallet

export default function Layout() {
  return (
    <MockWalletConnectProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="ConnectWalletScreen" />
        <Stack.Screen name="HomeScreen" />
        <Stack.Screen name="Profile" />
      </Stack>
    </MockWalletConnectProvider>
  );
}

