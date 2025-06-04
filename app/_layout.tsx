import { Stack } from "expo-router";
import 'react-native-get-random-values';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* Define the screens. 'index' handles the redirect to login or home */}
            <Stack.Screen name="index" />
            <Stack.Screen name="LoginScreen" />
            <Stack.Screen name="HomeScreen" />
            <Stack.Screen name="Profile" />
            <Stack.Screen name="ScanScreen" />
        </Stack>
    );
}
