import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import 'react-native-get-random-values';

export default function Index() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("token");
            console.log("Token:", token); // ✅ Add this for debugging

            if (token) {
                router.replace("/home");
            } else {
                router.replace("/login");
            }

            setLoading(false);
        };
        checkAuth();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Checking login status...</Text>
            </View>
        );
    }

    return null;
}
