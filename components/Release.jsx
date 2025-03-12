import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchReleasesList} from '../redux/features/getReleasesListSlice';

export default function Release({appId}) {
  console.log('raid', appId);
  const accessToken = AsyncStorage.getItem('token');
  console.log('at', accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) dispatch(fetchReleasesList({accessToken, appId}));
    console.log('get all the application');
  }, []);

  const releasesList = useSelector(state => state.releasesList.items);
  console.log('rl', releasesList);
  const handleDelete = () => {
    console.log('delete icon clicked');
    console.log('get all the application');
    // dispatch(deleteApplication());
    // dispatch(fetchAppList());
  };

  return (
    <View style={styles.container}>
      <View style={styles.releaseContainer}>
        <Text style={styles.title}>Releases</Text>

        {releasesList.length !== 0 ? (
          <FlatList
            style={styles.scroll}
            data={releasesList}
            renderItem={({item}) => {
              console.log('item', item);
              console.log('itemid', item._id);
              return (
                <View style={styles.card}>
                  <View>
                    <View style={styles.firstRow}>
                      <Text style={styles.text}>{item.buildNumber}</Text>
                      <Text style={styles.text}>{item.version}</Text>
                    </View>

                    <View style={styles.fileExt}>
                      <Text style={styles.label}>File Extension:</Text>
                      <Text style={styles.text}>{item.fileExtension}</Text>
                    </View>
                    <View>
                      <Text style={styles.label}>Description:</Text>
                      <Text style={styles.text}>{item.releaseNote}</Text>
                    </View>
                    <View style={styles.actions}>
                      <TouchableOpacity onPress={() => handleDelete()}>
                        <View style={styles.iconBackground}>
                          <Image
                            source={require('../asset/images/trash.png')}
                            style={styles.deleteIcon}
                          />
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => handleDelete()}>
                        <View style={styles.iconBackground}>
                          <Image
                            source={require('../asset/images/download.png')}
                            style={styles.downloadIcon}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={styles.releaseModal}>
            <Text style={styles.releaseModalText}>No Release Data!</Text>
          </View>
        )}
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
  iconBackground: {
    width: 50,
    height: 'auto',
    padding: 10,
    backgroundColor: '#6A89CC',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  scroll: {
    marginBottom: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  releaseModal: {
    // marginVertical: 10,
    elevation: 20,
    width: '80%',
    height: 120,
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 'auto',
    marginHorizontal: 'auto',
  },
  releaseModalText: {
    fontSize: 20,
  },
  releaseContainer: {
    flex: 1,
    marginVertical: 10,
    elevation: 20,

    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    backgroundColor: '#616C6F',
  },
  deleteIcon: {
    width: 25,
    height: 25,
    // marginRight: 30,
  },
  downloadIcon: {
    width: 25,
    height: 25,
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
  // appDetails: {
  //   flex: 1,
  // },
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

{
  /* <ScrollView style={styles.scroll}>
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
        </ScrollView> */
}
