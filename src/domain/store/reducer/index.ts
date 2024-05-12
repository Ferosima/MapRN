import alertsReducer from '../slices/alerts';
import appReducer from '../slices/app';
import mapReducer from '../slices/map';
import wayReducer from '../slices/way';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const rootReducer = combineReducers({
  alerts: alertsReducer,
  app: appReducer,
  map: mapReducer,
  way: wayReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
