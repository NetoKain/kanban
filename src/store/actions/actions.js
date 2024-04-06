export const addCard = (columnId, card) => ({
    type: 'ADD_CARD',
    payload: {
      columnId,
      card
    }
  });
  
  export const moveCard = (sourceColumnId, destinationColumnId, cardId) => ({
    type: 'MOVE_CARD',
    payload: {
      sourceColumnId,
      destinationColumnId,
      cardId
    }
  });