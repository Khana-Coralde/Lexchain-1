import { AntDesign, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './HomeScreenStyles';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <AntDesign name="logout" size={20} color="#1d3954" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LexChain</Text>
        <Text style={styles.subtitle}>Simple and easy to use app</Text>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        <GridItem
          icon={<MaterialIcons name="qr-code-scanner" size={48} color="#1d3954" />}
          label="Scan Document"
          onPress={() => router.push("/scan")}
        />
        <GridItem
          icon={<FontAwesome5 name="folder" size={48} color="#1d3954" />}
          label="My Documents"
        />
        <GridItem
          icon={<Entypo name="back-in-time" size={48} color="#1d3954" />}
          label="History"
        />
        <GridItem
          icon={<AntDesign name="setting" size={48} color="#1d3954" />}
          label="Settings"
        />
      </View>
    </SafeAreaView>
  );
}

const GridItem = ({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity style={styles.gridItem} onPress={onPress}>
    {icon}
    <Text style={styles.gridLabel}>{label}</Text>
  </TouchableOpacity>
);