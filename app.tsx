// App.tsx
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import './polyfills';

// This tells expo-router where to find the pages directory
export function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);