import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Header from '../../../components/Header/header';
import Button from '../../../components/Button/button';
import { useNavigation } from '@react-navigation/native';
import AppColors from '../../../utils/appColors';

const { width } = Dimensions.get('window');

export default function MyProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header headerText="My Profile" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Important information about IVF procedure</Text>
        <View style={styles.stepsContainer}>
          <View style={styles.stepRow}>
            <Step title="Tests" highlighted />
            <Step title="Energizing" />
            <Step title="Recovery" />
            <Step title="Transformation" />
          </View>
          <View style={styles.stepRow}>
            <Step title="Wait two weeks" />
            <Step title="Pharmacological stimulation" />
            <Step title="Egg retrieval" />
            <Step title="Embryo transfer" />
          </View>
          <View style={styles.stepRow}>
            <Step title="Be empowered" />
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Disclaimer</Text>
          <Text style={styles.contactText}>
            In order to proceed with your IVF file, you need to read or see important information. Click "I agree" to continue.          </Text>
        </View>
      </View>
      <Button
        title="I Agree"
        backgroundColor="#8ed5d7"
        textColor="white"
        onPress={() => navigation.navigate('Profile1')}
      />
    </ScrollView>
  );
}

const Step = ({ title, highlighted }) => (
  <View style={[styles.step, highlighted && styles.highlightedStep]}>
    <Text style={styles.stepText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: AppColors.white,
    paddingTop: 20,
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: AppColors.grey,
    marginVertical: 25,
    textAlign: 'center'
  },
  stepsContainer: {
    width: width * 0.9,
    marginBottom: 20,
  },
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  step: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: AppColors.black_25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  highlightedStep: {
    backgroundColor: AppColors.downy,
  },
  stepText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  footerNote: {
    fontSize: 16,
    color: '#00adf5',
    marginVertical: 10,
  },
  contactContainer: {
    width: width * 0.9,
    padding: 20,
    height: 150,
    backgroundColor: 'rgba(233, 245, 245, 0.3)',
    borderColor: '#8ed5d7',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },

  contactTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: AppColors.lavenderBlue,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: AppColors.grey,
  },
});
