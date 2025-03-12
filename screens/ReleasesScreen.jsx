import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Release from '../components/Release';
import ApplicationCard from '../components/ApplicationCard';

export default function ReleasesScreen({route}) {
  const {appData} = route.params;
  console.log('Route Params:', route.params);
  console.log(appData);
  return (
    <View style={styles.container}>
      <Header />
      <ApplicationCard appData={appData} />
      <Release />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
