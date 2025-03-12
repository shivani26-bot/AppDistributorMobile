// import React from 'react';
// import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.headerText}>App Distributor</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     width: '100%',
//     height: 60,
//     backgroundColor: '#2C3335',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
// });

// export default Header;

import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar, Menu, ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../redux/features/authLogoutSlice';
import {useNavigation} from '@react-navigation/native'; //Import navigation hook

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.authLogout);
  const navigation = useNavigation(); // Get navigation instance

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken);
    };

    checkToken();
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      await AsyncStorage.removeItem('token');
      setToken(null);
      setVisible(false);
      navigation.navigate('Auth'); //Redirect to AuthScreen after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>App Distributor</Text>

      <View>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : token ? (
          <>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Avatar.Image
                size={40}
                source={require('../asset/images/avatar.png')}
              />
            </TouchableOpacity>

            {visible && (
              <View style={styles.menu}>
                <Menu.Item
                  onPress={handleLogout}
                  title="Logout"
                  disabled={loading}
                />
              </View>
            )}
          </>
        ) : null}
      </View>

      {error && <Text style={styles.errorText}>Logout Failed: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 30,
    backgroundColor: '#2C3335',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
    zIndex: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    top: 50,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Header;
