import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './reducers/musicReducer';
import { meditate } from '../data/cardDataMeditate';
import meditateReducer from './reducers/meditateReducer';

export default configureStore({
  reducer: {
    music:musicReducer,
    meditate:meditateReducer,
  },
});