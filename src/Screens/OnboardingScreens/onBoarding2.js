import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; 
import CustomTextInput from '../../components/TextInput/textInput';

export default function Onboarding2() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');

  const navigation = useNavigation(); 

  const handlePress = () => {
    navigation.navigate('OnBoarding3');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>دعونا نجعلك تقوم بالتسجيل</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur</Text>
      </View>
      <CustomTextInput
        placeholder="اسم المستخدم"
        value={username}
        onChangeText={setUsername}
      />
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={birthYear}
          style={styles.picker}
          onValueChange={(itemValue) => setBirthYear(itemValue)}
        >
          <Picker.Item label="سنة الميلاد" value="" />
        </Picker>
        <Picker
          selectedValue={birthMonth}
          style={styles.picker}
          onValueChange={(itemValue) => setBirthMonth(itemValue)}
        >
          <Picker.Item label="شهر الميلاد" value="" />
        </Picker>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>التالي</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>هل لديك حساب؟ تسجيل الدخول</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54b0b3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 5,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  picker: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});
