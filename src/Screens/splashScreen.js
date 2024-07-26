import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoarding1');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.circleLarge}></View>
      <View style={styles.circleMedium}></View>
      <View style={styles.circleSmall}></View>
      <View style={styles.circleMini}></View>
      <View style={styles.circleContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>
      <Text style={styles.footerText}>التطبيق عيادة IVF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ed5d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleLarge: {
    position: 'absolute',
    top: -100,
    right: -150,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#45b7c4',
  },
  circleMedium: {
    position: 'absolute',
    bottom: 130,
    left: -100,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: '#57c6e6',
  },
  circleSmall: {
    position: 'absolute',
    top: 170,
    left: 35,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'pink',
  },
  circleMini: {
    position: 'absolute',
    bottom: 170,
    right: 35,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(248, 248, 248, 0.5)',
  },
  circleContainer: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logoText: {
    fontSize: 36,
    color: 'pink',
  },
  footerText: {
    position: 'absolute',
    bottom: 100,
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
