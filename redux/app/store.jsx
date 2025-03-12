// import {configureStore} from '@reduxjs/toolkit';
// import authReducer from '../feature/authSlice';
// import getAppListSlice from '../feature/getAppListSlice';
// import deleteAppSlice from '../feature/deleteAppSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
// appList: getAppListSlice,
// deleteApp: deleteAppSlice,
//   },
// });

// export default store;

import {configureStore} from '@reduxjs/toolkit';
import authLoginReducer from '../features/authLoginSlice';
import authRegisterReducer from '../features/authRegisterSlice';
import authLogoutReducer from '../features/authLogoutSlice';
import getAppListSlice from '../features/getAppListSlice';
import deleteAppSlice from '../features/deleteAppSlice';
import getReleasesListSlice from '../features/getReleasesListSlice';
const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    authLogout: authLogoutReducer,
    appList: getAppListSlice,
    deleteApp: deleteAppSlice,
    releasesList: getReleasesListSlice,
  },
});

export default store;
