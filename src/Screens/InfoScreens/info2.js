import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../components/Button/button'; 
import { useNavigation } from '@react-navigation/native';

export default function Info2() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Info3');
    };
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'خيار للاختيار',
    'خيار للاختيار',
    'خيار للاختيار',
    'خيار للاختيار',
    'خيار للاختيار',
    'خيار للاختيار',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.circleLarge}></View>
      <View style={styles.circleMedium}></View>

      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.questionTitle}>هذا سؤال ديمي</Text>
          <Text style={styles.questionSubtitle}>هذا سؤال ديمي ومختصره هذا سؤال ديمي ومختصره</Text>
          
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedOption === index && styles.selectedOption,
                ]}
                onPress={() => setSelectedOption(index)}
              >
                <Text style={[
                  styles.optionText,
                  selectedOption === index && styles.selectedOptionText
                ]}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Button
        title="التالي"
        backgroundColor="#8ed5d7"
        textColor="white"
        onPress={handlePress} 
        style={styles.nextButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexGrow: 1,
    justifyContent: 'center',
  },
  circleLarge: {
    position: 'absolute',
    top: -200,
    left: 0,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#8ed5d7',
  },
  circleMedium: {
    position: 'absolute',
    top: 120,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#57c6e6',
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  questionSubtitle: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 40,
    margin: 5,
  },
  selectedOption: {
    backgroundColor: '#8ed5d7',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
  },
  nextButton: {
    width: '90%',
    marginBottom: 20,
  },
});
