// /components/Board/Board.js
import React from "react";
import { useSelector } from "react-redux";
import Column from "../column";
import { BoardContainer } from "./styles";

/**
 * Renders a board with multiple columns.
 * @param {Object} props - The component props.
 * @param {Object} props.columns - An object containing the columns data.
 * @returns {JSX.Element} - The rendered board component.
 */
const Board = ({ columns }) => {
  const cards = useSelector((state) => state.cards.byId);

  return (
    <BoardContainer>
      {Object.values(columns).map((column) => {
        if (!column.parentId) {
          const { id, cards: columnCards, subcolumns, ...otherProps } = column;
          const columnCardsData = columnCards?.map((id) => cards[id]);

          return (
            <Column
              key={id}
              {...otherProps}
              cards={columnCardsData}
              subcolumns={subcolumns}
            />
          );
        }
        return null;
      })}
    </BoardContainer>
  );
};

export default Board;
