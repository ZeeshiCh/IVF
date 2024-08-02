import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Header from '../../../components/Header/header';
import Button from '../../../components/Button/button';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function MyProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header headerText="ملفي" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>معلومات هامة عن IVF الإجراء</Text>
        <View style={styles.stepsContainer}>
          <View style={styles.stepRow}>
            <Step title="تحويل" />
            <Step title="استرجاع" />
            <Step title="تنشيط" />
            <Step title="اختبارات" highlighted />
          </View>
          <View style={styles.stepRow}>
            <Step title="نقل الأجنة" />
            <Step title="استرجاع البيض" />
            <Step title="التحفيز الدوائي" />
            <Step title="اسبوعين انتظر" />
          </View>
          <View style={styles.stepRow}>
            <Step title="كن متحكماً" />
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>تتصل</Text>
          <Text style={styles.contactText}>
            من أجل متابعة ملف IVF الخاص بك، تحتاج إلى قراءة المعلومات المهمة أو الاطلاع عليها. انقر فوق "أوافق" للمتابعةللمتابعةللمتابعةللمتابعةللمتابعة.
          </Text>
        </View>
      </View>
      <Button
        title="أنا موافق"
        backgroundColor="#8ed5d7"
        textColor="white"
        onPress={() => navigation.navigate('Profile1')} // Navigate to Profile screen
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
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight:'bold',
    color: '#8ed5d7',
    marginVertical: 25,
  },
  stepsContainer: {
    width: width * 0.9,
    marginBottom: 20,
  },
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom:50,
  },
  step: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e6f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  highlightedStep: {
    backgroundColor: '#d1e7dd',
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
    color: '#00adf5',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 20,
    color: '#00adf5',
  },
});
