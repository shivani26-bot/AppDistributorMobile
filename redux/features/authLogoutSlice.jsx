import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, {rejectWithValue}) => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('🔹 Retrieved Token:', token);

      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('http://10.0.2.2:8000/api/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(' Logout API Response:', data);

      if (!response.ok) throw new Error(data.message || 'Logout failed');

      await AsyncStorage.removeItem('token');
      console.log('Token removed from AsyncStorage');

      return data.message;
    } catch (error) {
      console.error('Logout Error:', error.message);
      return rejectWithValue(error.message);
    }
  },
);

const authLogoutSlice = createSlice({
  name: 'authLogout',
  initialState: {loading: false, error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logoutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authLogoutSlice.reducer;
