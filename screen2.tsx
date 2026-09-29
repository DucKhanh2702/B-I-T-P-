import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Screen2() {
  const router = useRouter();

  // Nhận dữ liệu truyền qua từ Screen 1
  const { userName, mssv } = useLocalSearchParams<{ userName: string; mssv: string }>();

  return (
    <SafeAreaView style={styles.outerContainer}>
      {/* Khung giới hạn chuẩn kích thước điện thoại */}
      <View style={styles.phoneFrame}>
        {/* 1. NÚT BLACK-ARROW Ở TOP-LEFT */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()} // Quay về Screen 1
            activeOpacity={0.6}
          >
            <Text style={styles.blackArrowText}>←</Text>
          </TouchableOpacity>
        </View>

        {/* 2. NỘI DUNG HIỂN THỊ DỮ LIỆU ĐÃ TRUYỀN SANG */}
        <View style={styles.content}>
          <Text style={styles.title}>SCREEN 2</Text>
          
          <View style={styles.infoCard}>
            <Text style={styles.label}>UserName:</Text>
            <Text style={styles.value}>{userName}</Text>

            <Text style={styles.label}>MSSV:</Text>
            <Text style={styles.value}>{mssv}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Nền màu xám nhạt toàn màn hình ngoài
    alignItems: 'center',       // Căn khung điện thoại ra chính giữa
  },
  phoneFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 420,              // Chiều rộng tối đa chuẩn smartphone
    backgroundColor: '#FFFFFF',  // Màn hình trắng bên trong
    paddingHorizontal: 16,
    paddingTop: 12,
    boxShadow: Platform.OS === 'web' ? '0px 0px 15px rgba(0, 0, 0, 0.1)' : undefined,
  },
  header: {
    paddingTop: 8,
    alignItems: 'flex-start',   // Nằm ở góc trên bên trái (top-left)
  },
  backButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackArrowText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',           // Mũi tên màu đen
  },
  content: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  label: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});