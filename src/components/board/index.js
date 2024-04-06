// /components/Board/Board.js
import React from 'react';
import { BoardContainer } from './Board.styles';
// Importação de Column será necessária mais tarde quando o componente for criado
// import Column from '../Column';

const Board = ({ columns }) => {
  return (
    <BoardContainer>
      {columns.map((column, index) => (
        // O componente Column será definido posteriormente
        // <Column key={index} title={column.title} cards={column.cards} />
        // Para este exemplo, vamos apenas usar um placeholder
        <div key={index}>{column.title}</div>
      ))}
    </BoardContainer>
  );
};

export default Board;