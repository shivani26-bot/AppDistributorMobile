import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, registerUser} from '../redux/feature/authSlice'; // Updated actions
import AppLayout from '../components/AppLayout';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth); // Get loading state from Redux

  const handleAuth = async () => {
    if (!email || !password || (!isLogin && !name)) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      if (isLogin) {
        await dispatch(loginUser({email, password})).unwrap();
        Alert.alert('Success', 'Logged in successfully!');
      } else {
        await dispatch(registerUser({name, email, password})).unwrap();
        Alert.alert('Success', 'Registered successfully!');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>

          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleAuth}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                {isLogin ? 'Login' : 'Register'}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.toggleText}>
              {isLogin
                ? "Don't have an account? Register"
                : 'Already have an account? Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#616C6F',
  },
  card: {
    width: '85%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#2C3335',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  toggleText: {
    marginTop: 15,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;
