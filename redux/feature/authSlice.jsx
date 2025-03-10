import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Dummy API endpoints
const LOGIN_URL = 'https://jsonplaceholder.typicode.com/posts'; // Example
const REGISTER_URL = 'https://jsonplaceholder.typicode.com/posts'; // Example

// Async action for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      return data; // Simulated response
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Async action for register
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Registration failed');
      const data = await response.json();
      return data; // Simulated response
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Initial State
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = {email: action.meta.arg.email};
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = {name: action.meta.arg.name, email: action.meta.arg.email};
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
