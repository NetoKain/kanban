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

import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCardsStore = create(
  devtools((set) => ({
    //states
    cards: [],
    originalCards: [],

    //actions
    setCards: (cardsArray) =>
      set({
        cards: cardsArray?.reduce((acc, card) => {
          acc[card.id] = card;
          return acc;
        }, {}),
        originalCards: cardsArray?.reduce((acc, card) => {
          acc[card.id] = card;
          return acc;
        }, {}),
      }),

    addCard: (card) =>
      set((state) => {
        let newCards = { ...state.cards, [card.id]: card };
        Object.keys(state.cards).forEach((key) => {
          if (newCards[key].parentId === card.parentId && key !== card.id) {
            newCards[key] = {
              ...state.cards[key],
              cdOrder: state.cards[key].cdOrder + 1,
            };
          }
        });
        return { cards: newCards };
      }),

    removeCard: (card) =>
      set((state) => {
        let newCards = { ...state.cards };
        Object.keys(state.cards).forEach((key) => {
          if (newCards[key].parentId === card.parentId && key !== card.id) {
            newCards[key] = {
              ...state.cards[key],
              cdOrder: state.cards[key].cdOrder - 1,
            };
          }
        });
        if (newCards[card.id]) {
          delete newCards[card.id]
        }
        return { cards: newCards };
      }),

    updateCard: (card) =>
      set((state) => {
        if (!card) return;
        let newCards = { ...state.cards };
        let newCardsOriginal = { ...state.originalCards };
        newCards[card.id] = { ...card };
        newCardsOriginal[card.id] = { ...card };

        return { cards: newCards, originalCards: newCardsOriginal };
      }),
    filterCards: (filters, tagsSelected) =>
      set((state) => {
        let originalState = { ...state.originalCards };
        const filteredCards = Object.values(originalState)?.filter((card) => {
          const isTagMatched = tagsSelected?.length <= 0 || tagsSelected.every((tag) => card?.tags?.some((t) => t.id === tag.id));
          const isCurrentUserMatched = filters.byCurrentUser === "" || card?.currentUser?.name?.toUpperCase().includes(filters.byCurrentUser.toUpperCase());
          const isCreatorUserMatched = filters.byCreatorUser === "" || card?.creatorUser?.name?.toUpperCase().includes(filters.byCreatorUser.toUpperCase());
          const isCardNameMatched = card.name === null ? true : card?.name?.toUpperCase().includes(filters?.byName?.toUpperCase());
          const isCardDescriptionMatched = card?.description?.toUpperCase().includes(filters?.byDesc?.toUpperCase());
          const isCardPriorityMatched = card?.priority >= filters?.byPriority;
          const isCardEffortMatched = card?.effort >= filters?.byEffort;
          const isCardDifficultyMatched = card?.difficulty >= filters?.byDifficulty;
          const isCardIdMatched = card.id === null ? true : card?.id?.toUpperCase().includes(filters?.byId?.toUpperCase());

          return (
            isTagMatched &&
            isCurrentUserMatched &&
            isCreatorUserMatched &&
            isCardNameMatched &&
            isCardDescriptionMatched &&
            isCardPriorityMatched &&
            isCardEffortMatched &&
            isCardDifficultyMatched &&
            isCardIdMatched
          );
        });
        return {
          cards: filteredCards.reduce((acc, card) => {
            acc[card.id] = card;
            return acc;
          }, {}),
        };
      }),
    moveCard: (cardId, toColumnId, newOrder) =>
      set((state) => {
        let card = state.cards[cardId];
        if (!card) return;

        const oldOrder = card.cdOrder;
        const oldColumnId = card.parentId;

        let newCards = { ...state.cards };
        if (oldColumnId === toColumnId) {
          Object.keys(state.cards).forEach((key) => {
            if (state.cards[key].parentId === toColumnId) {
              if (oldOrder < newOrder) {
                if (
                  state.cards[key].cdOrder > oldOrder &&
                  state.cards[key].cdOrder <= newOrder
                ) {
                  newCards[key] = {
                    ...state.cards[key],
                    cdOrder: state.cards[key].cdOrder - 1,
                  };
                }
              } else if (oldOrder > newOrder) {
                if (
                  state.cards[key].cdOrder < oldOrder &&
                  state.cards[key].cdOrder >= newOrder
                ) {
                  newCards[key] = {
                    ...state.cards[key],
                    cdOrder: state.cards[key].cdOrder + 1,
                  };
                }
              }
            }
          });
        } else {
          Object.keys(state.cards).forEach((key) => {
            if (
              state.cards[key].parentId === oldColumnId &&
              state.cards[key].cdOrder > oldOrder
            ) {
              newCards[key] = {
                ...state.cards[key],
                cdOrder: state.cards[key].cdOrder - 1,
              };
            }
          });
          Object.keys(state.cards).forEach((key) => {
            if (
              state.cards[key].parentId === toColumnId &&
              state.cards[key].cdOrder >= newOrder
            ) {
              newCards[key] = {
                ...state.cards[key],
                cdOrder: state.cards[key].cdOrder + 1,
              };
            }
          });
        }

        newCards[cardId] = { ...card, parentId: toColumnId, cdOrder: newOrder };

        return { cards: newCards };
      }),

  }))
);
