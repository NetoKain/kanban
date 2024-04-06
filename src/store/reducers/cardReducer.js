import cardsData from './cards.json';
const initialState = cardsData;

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const { card } = action.payload;
      return {
        ...state,
        [card.id]: card
      };
    default:
      return state;
  }
};

export default cardsReducer;