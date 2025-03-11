import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Release() {
  const data = [
    {
      releaseNumber: '1.0.0',
      version: 'v1.0',
      fileExtension: '.apk',
      description:
        'Initial release of the app with basic features and functionality.',
    },
    {
      releaseNumber: '1.1.0',
      version: 'v1.1',
      fileExtension: '.ipa',
      description:
        'Bug fixes and performance improvements. Added new feature X.',
    },
    {
      releaseNumber: '2.0.0',
      version: 'v2.0',
      fileExtension: '.exe',
      description:
        'Major update with a new UI and added support for multiple languages.',
    },
    {
      releaseNumber: '2.1.0',
      version: 'v2.1',
      fileExtension: '.apk',
      description: 'Minor update with new features and optimizations.',
    },
    {
      releaseNumber: '3.0.0',
      version: 'v3.0',
      fileExtension: '.msi',
      description:
        'Complete redesign of the application with improved user experience and additional functionalities.',
    },
  ];
  const handleDelete = () => {
    console.log('delete icon clicked');
    console.log('get all the application');
    // dispatch(deleteApplication());
    // dispatch(fetchAppList());
  };

  return (
    <View style={styles.container}>
      <View style={styles.releaseContainer}>
        <ScrollView>
          {data.map((item, key) => {
            return (
              <View style={styles.card}>
                <View style={styles.appDetails}>
                  <View style={styles.firstRow}>
                    <Text style={styles.text}>{item.releaseNumber}</Text>
                    <Text style={styles.text}>{item.version}</Text>
                  </View>

                  <View style={styles.fileExt}>
                    <Text style={styles.label}>File Extension:</Text>
                    <Text style={styles.text}>{item.fileExtension}</Text>
                  </View>
                  <View>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.text}>{item.description}</Text>
                  </View>
                  <View style={styles.actions}>
                    <TouchableOpacity onPress={handleDelete}>
                      <Image
                        source={require('../asset/images/trash.png')}
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                      <Image
                        source={require('../asset/images/download.png')}
                        style={styles.downloadIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
            console.log('item', item);
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fileExt: {
    marginBottom: 15,
  },
  releaseContainer: {
    backgroundColor: 'red',
    // height: 'auto',
    // width: '100%',
    marginVertical: 10,
    elevation: 20,

    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    backgroundColor: '#616C6F',
  },
  deleteIcon: {
    width: 30,
    height: 30,
    marginRight: 30,
  },
  downloadIcon: {
    width: 30,
    height: 30,
  },
  actions: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
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
  },
  appDetails: {
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
  },
});
