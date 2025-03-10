import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthScreen from './screens/AuthScreen';
import ApplicationScreen from './screens/ApplicationScreen';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReleasesScreen from './screens/ReleasesScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    //wrap your root component with Provider component from react-native-paper.
    // we are using react native paper in ApplicationScreen={}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Application" component={ApplicationScreen} />
        <Stack.Screen name="Release" component={ReleasesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
