import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import Header from '../../../../../components/Header/header';
import AppColors from '../../../../../utils/appColors';
import Button from '../../../../../components/Button/button';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function PregnancyScan() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header headerText="Pregnancy test" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../assets/images/info1bg.png')} 
          style={styles.backgroundImage}
        />
        <Image
          source={require('../../../../../assets/images/pregnancy.png')}
          style={styles.foregroundImage}
        />
      </View>
      <Text style={styles.text}>Is there any good news? are you pregnant?</Text>
      <Text style={styles.textFooter}>Scan or upload the image</Text>

      <Button
        title="Scan your report"
        backgroundColor={AppColors.lavenderBlue}
        textColor="white"
        onPress={() => navigation.navigate('PregnancyTestResult')}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop:100,
    position: 'relative',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:100,
  },
  backgroundImage: {
    position: 'absolute',
    width: 250, 
    height: 250, 
    resizeMode: 'cover',
  },
  foregroundImage: {
    position: 'absolute',
    width: 280, 
    height: 280, 
    resizeMode: 'contain',
  },
  text: {
    fontSize: 28,
    color: AppColors.grey,
    textAlign: 'center',
    paddingHorizontal: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  textFooter: {
    fontSize: 18,
    color: AppColors.lightGrey,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 40,
  },
});
