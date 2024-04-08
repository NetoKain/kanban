import React from "react";
import { ColumnContainer, ColumnHeader } from "./styles";
import Card from "../card";

const Column = ({ title, color, cards, subcolumns }) => {
  console.log('subcolumns', subcolumns)
  return (
    <ColumnContainer>
      <ColumnHeader color={color}>{title}</ColumnHeader>
      {subcolumns && subcolumns?.map(subcolumn => (<Column key={subcolumn.id} {...subcolumn}/>))}
      {cards && cards?.map((card) => (
        <Card key={card.id} {...card}/>
      ))}
    </ColumnContainer>
  );
};

export default Column;
