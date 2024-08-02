import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Header from '../../../components/Header/header';

const { width } = Dimensions.get('window');

export default function Profile2Screen() {
  return (
    <ScrollView style={styles.container}>
      <Header headerText="ملفي" />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>دورة IVF الحالية الخاصة بك</Text>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>Today</Text>
              <Text style={styles.dateText}>Friday, 22 Aug</Text>
              <Text style={styles.dayText}>11. Cycle Day</Text>
              <Text style={styles.waitText}>اسبوعين انتظر</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.overviewButton}>
            <Text style={styles.buttonText}>نظرة عامة على العلاج</Text>
          </TouchableOpacity>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>ملفك الصحي</Text>
              <View style={styles.iconContainer}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>دورتك الحالية</Text>
              <View style={styles.iconContainer}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>دورتك السابقة</Text>
              <View style={styles.iconContainer}></View>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>معلومات هامة عن IVF الإجراء</Text>
          <View style={styles.stepsContainer}>
            <View style={styles.stepRow}>
              <View style={styles.step}>
                <Text style={styles.stepText}>تحويل</Text>
              </View>
              <View style={styles.step}>
                <Text style={styles.stepText}>استرجاع</Text>
              </View>
              <View style={styles.step}>
                <Text style={styles.stepText}>تنشيط</Text>
              </View>
              <View style={styles.step}>
                <Text style={styles.stepText}>اختبارات</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.showAllButton}>
              <Text style={styles.showAllText}>اظهار الكل</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8ed5d7',
    marginVertical: 20,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#8ed5d7',
    borderRadius: 140,
  },
  circle: {
    margin: 10,
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 10,
    borderColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 18,
    color: 'white',
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    paddingBottom: 10,
  },
  dayText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  waitText: {
    fontSize: 18,
    color: 'white',
    marginTop: 5,
  },
  overviewButton: {
    backgroundColor: 'darkblue',
    borderRadius: 25,
    width: width * 0.4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  menuContainer: {
    width: width * 0.9,
  },
  menuItem: {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    height: 80,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#00adf5',
    textAlign: 'right',
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
  stepsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9,
    marginBottom: 10,
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8ed5d7',
  },
  stepText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  showAllButton: {
    marginTop: 10,
    marginBottom:10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  showAllText: {
    fontSize: 14,
    color: '#00adf5',
  },
});
