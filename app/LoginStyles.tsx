import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F3A56",
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 80,
    },
    logoWrapper: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
    },
    logo: {
        width: 60,
        height: 60,
    },
    formContainer: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1F3A56",
        textAlign: "center",
    },
    subtitle: {
        textAlign: "center",
        color: "gray",
        marginBottom: 20,
    },
    label: {
        color: "gray",
        marginBottom: 5,
        fontSize: 12,
    },
    input: {
        backgroundColor: "#E0E0E0",
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: "#1F3A56",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    forgotPassword: {
        textAlign: "center",
        color: "gray",
        marginTop: 10,
    },
});