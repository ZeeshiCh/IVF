import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/splashScreen';
import OnBoarding1 from '../Screens/OnboardingScreens/onBoarding1';
import OnBoarding2 from '../Screens/OnboardingScreens/onBoarding2';
import OnBoarding3 from '../Screens/OnboardingScreens/onboarding3';
import OnBoarding4 from '../Screens/OnboardingScreens/onBoarding4';
import Info1 from '../Screens/InfoScreens/info1';

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
    </Stack.Navigator>
  );
}
