import columnsData from './columns.json';
const initialState = columnsData;

const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const { columnId, card } = action.payload;
      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          cards: [...(state[columnId]?.cards || []), card.id]
        }
      };
    case 'MOVE_CARD':
      const { sourceColumnId, destinationColumnId, cardId } = action.payload;
      return {
        ...state,
        [sourceColumnId]: {
          ...state[sourceColumnId],
          cards: state[sourceColumnId].cards.filter(id => id !== cardId)
        },
        [destinationColumnId]: {
          ...state[destinationColumnId],
          cards: [...(state[destinationColumnId]?.cards || []), cardId]
        }
      };
    default:
      return state;
  }
};

export default columnsReducer;