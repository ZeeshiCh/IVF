import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnBoarding4() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Info1'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.circleLarge}></View>
      <View style={styles.circleMedium}></View>
      <View style={styles.circleSmall}></View>
      <View style={styles.circleSmall1}></View>
      <View style={styles.circleSmall2}></View>
      <View style={styles.circleMini}></View>

      <View style={styles.textContainer}>
        <Text style={styles.footerText}>التطبيق عيادة</Text>
        <Text style={styles.footerText1}>التطبيقالتطبيقالتطبيق عيادةعيادة</Text>
        <Text style={styles.footerText}>التطبيق عيادة</Text>
      </View>
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
    top: -270,
    right: -150,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#45b7c4',
  },
  circleMedium: {
    position: 'absolute',
    bottom: -250,
    left: -100,
    width: 540,
    height: 540,
    borderRadius: 270,
    backgroundColor: '#57c6e6',
  },
  circleSmall: {
    position: 'absolute',
    top: 200,
    right: 35,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'pink',
  },
  circleSmall1: {
    position: 'absolute',
    bottom: 50,
    right: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'pink',
  },
  circleSmall2: {
    position: 'absolute',
    bottom: 240,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'pink',
  },
  circleMini: {
    position: 'absolute',
    bottom: 150,
    right: 35,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(248, 248, 248, 0.3)',
  },
  textContainer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom:2,
  },
  footerText1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginBottom:10,
  },
});
