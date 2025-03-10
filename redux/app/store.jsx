import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../feature/authSlice';
import getAppListSlice from '../feature/getAppListSlice';
import deleteAppSlice from '../feature/deleteAppSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appList: getAppListSlice,
    deleteApp: deleteAppSlice,
  },
});

export default store;
