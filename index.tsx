import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Screen1() {
  const router = useRouter();

  
  const [userName, setUserName] = useState('');
  const [mssv, setMssv] = useState('');

  
  const handleNext = () => {
    // 1. Validate: không được để trống
    if (!userName.trim() || !mssv.trim()) {
      if (Platform.OS === 'web') {
        alert('Vui lòng nhập đầy đủ UserName và MSSV!');
      } else {
        Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ UserName và MSSV!');
      }
      return;
    }

    // 2. Chuyển sang Screen 2 
    router.push({
      pathname: '/screen2' as any,
      params: { 
        userName: userName.trim(), 
        mssv: mssv.trim() 
      }
    });
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.phoneFrame}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
          style={{ flex: 1 }}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* 1. KHỐI 6 Ô MÀU */}
            <View style={styles.gridContainer}>
              {/* Hàng 1 */}
              <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: '#1E88E5', flex: 1 }]}>
                  <Text style={styles.textNumber}>1</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#E53935', flex: 1 }]}>
                  <Text style={styles.textNumber}>2</Text>
                </View>
              </View>

              {/* Hàng 2 */}
              <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: '#FFD54F', flex: 1 }]}>
                  <Text style={[styles.textNumber, { color: '#000000' }]}>3</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#43A047', flex: 1 }]}>
                  <Text style={styles.textNumber}>4</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#8E24AA', flex: 2 }]}>
                  <Text style={styles.textNumber}>5</Text>
                </View>
              </View>

              {/* Hàng 3 */}
              <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: '#FF7043', flex: 1 }]}>
                  <Text style={styles.textNumber}>6</Text>
                </View>
              </View>
            </View>

            {/* 2. KHU VỰC NHẬP DỮ LIỆU USERNAME & MSSV */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nhập UserName"
                value={userName}
                onChangeText={setUserName}
                placeholderTextColor="#888"
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập MSSV"
                value={mssv}
                onChangeText={setMssv}
                placeholderTextColor="#888"
              />
            </View>

            {/* 3. KHU VỰC ĐÁY: DÒNG CHỮ VÀ NÚT BẤM "CLICK ME" */}
            <View style={styles.bottomArea}>
              {/* Dòng chữ cố định Họ và tên - MSSV */}
              <Text style={styles.studentInfoText}>Họ và tên - MSSV</Text>

              <TouchableOpacity 
                style={styles.clickMeBtn} 
                onPress={handleNext}
                activeOpacity={0.7}
              >
                <Text style={styles.clickMeText}>Click me</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    alignItems: 'center',
  },
  phoneFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    boxShadow: Platform.OS === 'web' ? '0px 0px 15px rgba(0, 0, 0, 0.1)' : undefined,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  gridContainer: {
    height: 340,
    gap: 8,
    marginBottom: 16,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputContainer: {
    gap: 10,
    marginBottom: 20,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
  },
  bottomArea: {
    alignItems: 'center',
    paddingBottom: 16,
    gap: 16,
  },
  studentInfoText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  clickMeBtn: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 24,
    elevation: 2,
  },
  clickMeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});