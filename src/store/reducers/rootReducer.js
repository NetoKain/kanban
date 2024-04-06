// rootReducer.js
import { combineReducers } from 'redux';
import cardsReducer from './cardReducer';
import columnsReducer from './columnsReducer';
import boardReducer from './boardReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  columns: columnsReducer,
  board: boardReducer,
  // Adicione outros reducers conforme necessário
});

export default rootReducer;