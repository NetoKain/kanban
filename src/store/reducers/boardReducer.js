import boardData from './board.json';

const initialState = boardData;

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD_TITLE':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.boardId]: {
            ...state.byId[action.payload.boardId],
            title: action.payload.newTitle
          }
        }
      };
    // Adicione outros cases de ação aqui, se necessário
    default:
      return state;
  }
};

export default boardReducer;