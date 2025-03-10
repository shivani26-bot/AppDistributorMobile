import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Header';

const AppLayout = ({children}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    //paddingHorizontal: 10,
    //paddingVertical: 20,
  },
});

export default AppLayout;
