import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../../components/Header/header';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Profile() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header headerText="ملفي" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>دورة IVF الحالية الخاصة بك</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <TextInput
            style={styles.input}
            placeholder="Cycle Day"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <TextInput
            style={styles.input}
            placeholder="Estrogen"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <TextInput
            style={styles.input}
            placeholder="Progesterone"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <TextInput
            style={styles.input}
            placeholder="LH"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <TextInput
            style={styles.input}
            placeholder="Lining Thickness"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <TextInput
            style={styles.input}
            placeholder="Lining Type"
            placeholderTextColor="#999"
            textAlign="right"
          />
          <View style={styles.folliclesContainer}>
            <View style={styles.follicleColumn}>
              <TextInput
                style={styles.smallInput}
                placeholder="Amount"
                placeholderTextColor="#999"
                textAlign="right"
              />
              <TextInput
                style={styles.smallInput}
                placeholder="Size"
                placeholderTextColor="#999"
                textAlign="right"
              />
            </View>
            <TextInput
              style={styles.largeInput}
              placeholder="Follicles Right"
              placeholderTextColor="#999"
              textAlign="right"
            />
          </View>
          <View style={styles.folliclesContainer}>
            <View style={styles.follicleColumn}>
              <TextInput
                style={styles.smallInput}
                placeholder="Amount"
                placeholderTextColor="#999"
                textAlign="right"
              />
              <TextInput
                style={styles.smallInput}
                placeholder="Size"
                placeholderTextColor="#999"
                textAlign="right"
              />
            </View>
            <TextInput
              style={styles.largeInput}
              placeholder="Follicles Left"
              placeholderTextColor="#999"
              textAlign="right"
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.skipButton]}>
            <Text style={styles.buttonText}>يتخطى</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile2Screen')} style={[styles.button, styles.nextButton]}>
            <Text style={styles.buttonText}>التالي</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
    alignItems:'center'
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
  inputContainer: {
    width: width * 0.9,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10, 
    textAlign: 'right',
    backgroundColor: 'transparent', 
  },
  folliclesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  follicleColumn: {
    width: '40%',
  },
  smallInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'right', 
    backgroundColor: 'transparent', 
  },
  largeInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    width: '55%',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'right', 
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    marginTop: 20,
  },
  button: {
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    flex: 1,
    backgroundColor: '#f8d7da',
    marginRight: 10,
  },
  nextButton: {
    flex: 1.5,
    backgroundColor: '#8ed5d7',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
