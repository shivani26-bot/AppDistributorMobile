import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ApplicationCard() {
  const handleDelete = () => {
    console.log('delete icon clicked');
    console.log('get all the application');
    // dispatch(deleteApplication());
    // dispatch(fetchAppList());
  };
  return (
    // <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.firstRow}>
        <Text style={[styles.appName, styles.text]}>Shopify</Text>
        <Text style={[styles.osType, styles.text]}>Windows</Text>
      </View>
      <View>
        <Text style={styles.releaseLabel}>Release Type:</Text>
        <Text style={[styles.releaseType, styles.text]}>Alpha</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleDelete}>
          <Image
            source={require('../asset/images/trash.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#fff',
    // heigh: 'auto',
  },
  actions: {
    // marginTop: 20,
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteIcon: {
    width: 20,
    height: 20,

    // marginLeft: 40,
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  releaseLabel: {
    fontSize: 18,
  },
});
