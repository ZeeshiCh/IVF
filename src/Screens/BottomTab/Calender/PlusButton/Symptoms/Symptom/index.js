import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import AppColors from '../../../../../../utils/appColors';
import Header from '../../../../../../components/Header/header';
import { useNavigation } from '@react-navigation/native';
import intimacyIcon from '../../../../../../assets/images/symptom1.png';
import moodIcon from '../../../../../../assets/images/symptom2.png';
import weightIcon from '../../../../../../assets/images/symptom3.png';
import physicalSymptomsIcon from '../../../../../../assets/images/symptom4.png';
import bbtIcon from '../../../../../../assets/images/symptom5.png';
import cervicalMucusIcon from '../../../../../../assets/images/symptom6.png';

const { width } = Dimensions.get('window');

const IconButton = ({ image, title, onPress }) => {
  return (
    <View style={styles.iconButtonContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={onPress}>
        <Image source={image} style={styles.iconImage} />
      </TouchableOpacity>
      <Text style={styles.iconText}>{title}</Text>
    </View>
  );
};

export default function Symptoms() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header headerText="Symptoms" />
      <View style={styles.row}>
        <IconButton 
          image={intimacyIcon} 
          title="INTIMACY" 
          onPress={() => navigation.navigate('Intimacy')} 
        />
        <IconButton 
          image={moodIcon} 
          title="MOOD" 
          onPress={() => navigation.navigate('Mood')} 
        />
        <IconButton 
          image={weightIcon} 
          title="WEIGHT" 
          onPress={() => navigation.navigate('Weight')} 
        />
      </View>
      <View style={styles.row}>
        <IconButton 
          image={physicalSymptomsIcon} 
          title="PHYSICAL SYMPTOMS" 
          onPress={() => navigation.navigate('PhysicalSymptom')} 
        />
        <IconButton 
          image={bbtIcon} 
          title="BASAL BODY TEMPERATURE" 
          onPress={() => navigation.navigate('BasalBodyTemp')} 
        />
        <IconButton 
          image={cervicalMucusIcon} 
          title="CERVICAL MUCUS" 
          onPress={() => navigation.navigate('CervicalMuscus')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, 
  },
  iconButtonContainer: {
    marginTop: 50,
    alignItems: 'center',
    width: width * 0.25,
    marginHorizontal: 10,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.2, 
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    backgroundColor: AppColors.downy,
    marginBottom: 5, 
  },
  iconImage: {
    width: 50, 
    height: 50,
  },
  iconText: {
    fontSize: 14, 
    fontWeight: 'bold',
    color: AppColors.grey,
    textAlign: 'center',
  },
});
