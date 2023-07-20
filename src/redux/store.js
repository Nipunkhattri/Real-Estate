import { configureStore } from '@reduxjs/toolkit'
import advertisementsSlice from './reducers/advertisements.slice';
import propertiesSlice from './reducers/properties.slice';
import authSlice from './reducers/authslice';
import CommentSlice from './reducers/CommentSlice';

const store = configureStore({
  reducer: {
    properties: propertiesSlice,
    advertisements: advertisementsSlice,
    authSlice:authSlice,
    CommentSlice:CommentSlice
  },
});

export default store