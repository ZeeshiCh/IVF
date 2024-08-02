import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Header from '../../components/Header/header';

const { width } = Dimensions.get('window');

export default function TreatmentScreen() {
  return (
    <View style={styles.container}>
      <Header headerText="علاجي" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              // source={require('../../../assets/ultrasound.png')} // Replace with actual image source
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>ULTRASOUND</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              // source={require('../../../assets/lab_results.png')} // Replace with actual image source
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>LAB RESULTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              // source={require('../../../assets/medications.png')} // Replace with actual image source
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>MEDICATIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              // source={require('../../../assets/embryo.png')} // Replace with actual image source
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>EMBRYO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              // source={require('../../../assets/eggs.png')} // Replace with actual image source
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>EGGS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
    alignItems:'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  menuContainer: {
    width: width * 0.9,
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: 'rgba(233, 245, 245, 0.5)', 
    borderRadius: 30,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
    backgroundColor: '#f2e7fb', 
  },
  menuText: {
    fontSize: 18,
    color: '#007e93',
    fontWeight: 'bold',
  },
});
