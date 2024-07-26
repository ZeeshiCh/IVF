import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/button';

export default function OnBoarding1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>
      <Button
        title="Continue With Google"
        backgroundColor="#8ed5d7"
        textColor="white"
        iconName="logo-google"
        onPress={() => alert('Continue with Google')}
      />
      <Button
        title="انشاء حساب جديد"
        backgroundColor="#57c6e6"
        textColor="white"
        onPress={() => navigation.navigate('OnBoarding2')}
      />
      <Text style={styles.footerText}>هل لديك حساب؟ تسجيل الدخول</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
  },
  logoText: {
    fontSize: 24,
    color: 'pink',
  },
  footerText: {
    color: 'grey',
    fontSize: 18,
  },
});
