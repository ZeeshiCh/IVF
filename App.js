import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} >
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
