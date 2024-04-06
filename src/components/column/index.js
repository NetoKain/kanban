import React from "react";
import { ColumnContainer, ColumnHeader } from "./styles";

const Column = ({ title, color, cards }) => {
  return (
    <ColumnContainer>
      <ColumnHeader color={color}>{title}</ColumnHeader>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.title}</li>
        ))}
      </ul>
    </ColumnContainer>
  );
};

export default Column;
