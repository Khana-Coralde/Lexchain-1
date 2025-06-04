import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginStyles } from "./LoginStyles"; // Ensure the correct path

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert("Error", "Please enter both username and password.");
            return;
        }

        try {
            const response = await axios.post("https://devapi-618v.onrender.com/api/auth/login", {
                username,
                password,
            });

            if (response.data?.token) {
                await AsyncStorage.setItem("token", response.data.token);
                router.replace("/home");
            } else {
                throw new Error("Invalid response from server.");
            }
        } catch (error) {
            Alert.alert("Login Failed", "Invalid username or password");
        }
    };

    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.logoContainer}>
                <View style={loginStyles.logoWrapper}>
                    <Image source={require("./logo.png")} style={loginStyles.logo} />
                </View>
            </View>

            <View style={loginStyles.formContainer}>
                <Text style={loginStyles.title}>Login</Text>
                <Text style={loginStyles.subtitle}>Sign in to continue.</Text>

                <Text style={loginStyles.label}>USERNAME</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Text style={loginStyles.label}>PASSWORD</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                />

                <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
                    <Text style={loginStyles.loginButtonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;