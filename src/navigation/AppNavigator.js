import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/splashScreen';
import OnBoarding1 from '../Screens/OnboardingScreens/onBoarding1';
import OnBoarding2 from '../Screens/OnboardingScreens/onBoarding2';
import OnBoarding3 from '../Screens/OnboardingScreens/onboarding3';
import OnBoarding4 from '../Screens/OnboardingScreens/onBoarding4';
import Info1 from '../Screens/InfoScreens/info1';
import Info2 from '../Screens/InfoScreens/info2';
import Info3 from '../Screens/InfoScreens/info3';
import Info4 from '../Screens/InfoScreens/info4';
import Info5 from '../Screens/InfoScreens/info5';
import BottomTabNavigator from './BottomTab';
import Profile1 from '../Screens/BottomTab/MyProfile/profile1';
import Profile2Screen from '../Screens/BottomTab/MyProfile/profile2';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
      <Stack.Screen name="Info1" component={Info1} />
      <Stack.Screen name="Info2" component={Info2} />
      <Stack.Screen name="Info3" component={Info3} />
      <Stack.Screen name="Info4" component={Info4} />
      <Stack.Screen name="Info5" component={Info5} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="Profile2Screen" component={Profile2Screen} />
    </Stack.Navigator>
  );
}
