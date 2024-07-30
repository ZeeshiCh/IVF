import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const { width } = Dimensions.get('window'); // Get the screen width

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const today = moment().format('YYYY-MM-DD');
    const periodStart = '2024-06-27';
    const periodEnd = '2024-07-02';

    let periodDates = {};
    for (let m = moment(periodStart); m.isSameOrBefore(periodEnd); m.add(1, 'days')) {
      periodDates[m.format('YYYY-MM-DD')] = {
        color: '#ffcccc',
        textColor: 'black'
      };
    }

    const fertileStart = '2024-07-10';
    const fertileEnd = '2024-07-14';

    let fertileDates = {};
    for (let m = moment(fertileStart); m.isSameOrBefore(fertileEnd); m.add(1, 'days')) {
      fertileDates[m.format('YYYY-MM-DD')] = {
        color: '#d1e7dd',
        textColor: 'black'
      };
    }

    const ovulationDates = {
      '2024-07-29': { dotColor: '#ff0000', activeOpacity: 0 },
      '2024-07-30': { dotColor: '#ff0000', activeOpacity: 0 },
      '2024-07-31': { dotColor: '#ff0000', activeOpacity: 0 },
    };

    setMarkedDates({
      ...periodDates,
      ...fertileDates,
      ...ovulationDates,
      [today]: { selected: true, marked: true, selectedColor: '#00adf5' }
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileIcon}></View>
        <Text style={styles.headerText}>التقويم الخاص بك</Text>
        <TouchableOpacity style={styles.menuIcon}>
          <Text style={styles.menuText}>≡</Text>
        </TouchableOpacity>
      </View>
      <Calendar
        style={styles.calendar}
        current={moment().format('YYYY-MM-DD')}
        markedDates={markedDates}
        markingType={'period'}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setMarkedDates({
            ...markedDates,
            [day.dateString]: {
              selected: true,
              marked: true,
              selectedColor: '#00adf5'
            }
          });
        }}
      />
      {selectedDate ? (
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>
            Selected Date: {selectedDate}
          </Text>
        </View>
      ) : null}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#ffcccc' }]}></View>
          <Text style={styles.legendText}>فترة</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#d1e7dd' }]}></View>
          <Text style={styles.legendText}>نافذة مزينة</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { borderColor: '#ff0000', borderWidth: 1 }]}></View>
          <Text style={styles.legendText}>الفترة المتوقعة</Text>
        </View>
      </View>
      <Text style={styles.welcomeText}>فترة الحيض</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>بدأت في 27 يونيو</Text>
          <Text style={styles.detailsSubtitle}>منذ 18 يوما</Text>
        </View>
        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>مدة الدورة: 4 أيام</Text>
          <Text style={styles.detailsSubtitle}>طبيعي</Text>
        </View>
        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>مدة الدورة: 28 يوم</Text>
          <Text style={styles.detailsSubtitle}>طبيعي</Text>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>ملحوظة</Text>
          <Text style={styles.noteText}>من المرجح أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشه أن تبدأ دورتك الشهرية في 29 يوليو أو في وقت قريب منه </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#a8dadc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  welcomeText: {
    paddingTop: 40,
    paddingRight: 15,
    color: '#8ed5d7',
    fontSize: 26,
    alignSelf: 'flex-end'
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 40,
    color: '#fff',
  },
  calendar: {
    width: width,
    marginBottom: 10,
  },
  selectedDateContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
  },
  selectedDateText: {
    fontSize: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
  },
  detailsContainer: {
    marginTop: 5,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  detailsItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00adf5',
  },
  detailsSubtitle: {
    fontSize: 18,
    color: '#555',
  },
  noteContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
    borderRadius: 5,
    elevation: 1,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00adf5',
    marginBottom: 5,
  },
  noteText: {
    fontSize: 18,
    color: '#555',
  },
});
