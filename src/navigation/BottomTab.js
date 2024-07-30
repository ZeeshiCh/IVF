import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Dashboard/home';
import CalendarScreen from '../Screens/calender';
// import TreatmentScreen from '../Screens/TreatmentScreen'; // Assuming you have a treatment screen
// import ProfileScreen from '../Screens/ProfileScreen'; // Assuming you have a profile screen
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Calendar':
              iconName = 'calendar';
              break;
            // case 'Treatment':
            //   iconName = 'heart';
            //   break;
            // case 'Profile':
            //   iconName = 'person';
            //   break;
            default:
              iconName = 'home';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B95CF4',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#8ed5d7',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 10,
          paddingTop:10,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'بيت', headerShown: false }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: 'تقويم', headerShown: false }} />
      {/* <Tab.Screen name="Treatment" component={TreatmentScreen} options={{ title: 'علاجي' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'حساب تعريفي' }} /> */}
    </Tab.Navigator>
  );
}
