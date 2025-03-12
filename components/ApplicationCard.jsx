import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ApplicationCard({appData}) {
  console.log('appsdata', appData);
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
        <Text style={styles.text}>
          {appData.appName}{' '}
          <Image source={{uri: appData.appIcon}} style={styles.appIcon} />
        </Text>

        <Text style={styles.text}>{appData.osType}</Text>
      </View>
      <View style={styles.secondRow}>
        <View>
          <Text style={styles.label}>Release Type:</Text>
          <Text style={styles.text}>{appData.releaseType}</Text>
        </View>
        <View>
          <Text style={styles.label}>PlatformType:</Text>
          <Text style={styles.text}>{appData.platformType}</Text>
        </View>
      </View>
      {/* <View style={styles.actions}>
        <TouchableOpacity onPress={handleDelete}>
          <Image
            source={require('../asset/images/trash.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View> */}
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  appIcon: {
    width: 20,
    height: 20,
  },
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

  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
  },
});
