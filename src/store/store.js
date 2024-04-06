import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Outras configurações opcionais podem ser adicionadas aqui
});

export default store;