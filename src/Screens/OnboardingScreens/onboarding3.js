import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomTextInput from '../../components/TextInput/textInput';
import { useNavigation } from '@react-navigation/native'; 

export default function OnBoarding3() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation(); 

  const handlePress = () => {
    navigation.navigate('OnBoarding4');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>دعونا نجعلك تقوم بالتسجيل</Text>
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
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>التالي</Text>
      </TouchableOpacity>
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
});
