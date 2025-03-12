// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import AuthScreen from './screens/AuthScreen';
// import ApplicationScreen from './screens/ApplicationScreen';
// import {Provider} from 'react-native-paper';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ReleasesScreen from './screens/ReleasesScreen';

// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     //wrap your root component with Provider component from react-native-paper.
//     // we are using react native paper in ApplicationScreen={}
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Application" component={ApplicationScreen} />
//         <Stack.Screen name="Release" component={ReleasesScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import ApplicationScreen from './screens/ApplicationScreen';
import RequireAuth from './components/RequireAuth';
import ReleasesScreen from './screens/ReleasesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Application" options={{headerShown: true}}>
          {() => (
            <RequireAuth>
              <ApplicationScreen />
            </RequireAuth>
          )}
        </Stack.Screen>
        {/* <Stack.Screen name="Release" options={{headerShown: true}}>
          {() => (
            <RequireAuth>
              <ReleasesScreen />
            </RequireAuth>
          )}
        </Stack.Screen> */}

        {/* <Stack.Screen
          name="Release"
          component={ReleasesScreen} // Ensure this is set correctly
          options={{headerShown: true}}
        /> */}

        {/* <Stack.Screen
          name="Release"
          component={() => {
            <RequireAuth>
              <ReleasesScreen />
            </RequireAuth>;
          }}
        /> */}
        <Stack.Screen
          name="Release"
          options={{headerShown: true}}
          children={props => (
            <RequireAuth>
              <ReleasesScreen {...props} />
            </RequireAuth>
          )}
        />
        {/* By spreading props in this way, navigation and route will be passed down to ReleasesScreen, and you should be able to access route.params without the undefined error.
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
