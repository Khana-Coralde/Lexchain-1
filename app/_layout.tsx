import { Stack } from "expo-router";
import 'react-native-get-random-values';
import { WalletConnectProvider } from '../context/WalletConnectProvider';

export default function Layout() {
  return (
      <WalletConnectProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="LoginScreen" />
          <Stack.Screen name="HomeScreen" />
          <Stack.Screen name="Profile" />
          <Stack.Screen name="ScanScreen" />
        </Stack>
      </WalletConnectProvider>
  );
}
