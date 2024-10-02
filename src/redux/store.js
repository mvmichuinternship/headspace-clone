import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './reducers/musicReducer';

export default configureStore({
  reducer: {
    music:musicReducer,
  },
});