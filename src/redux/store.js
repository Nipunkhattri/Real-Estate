import { configureStore } from '@reduxjs/toolkit'
import advertisementsSlice from './reducers/advertisements.slice';
import propertiesSlice from './reducers/properties.slice';

const store = configureStore({
  reducer: {
    properties: propertiesSlice,
    advertisements: advertisementsSlice
  },
});

export default store