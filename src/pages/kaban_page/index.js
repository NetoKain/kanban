import React from "react";
import { useSelector } from "react-redux";
import Column from "../../components/column";

const KanbanPage = () => {
  const columns = useSelector((state) => state.columns.byId);
  const cards = useSelector((state) => state.cards.byId);

  return (
    <div>
      <h1>Kanban Board</h1>
      <div style={{ display: "flex" }}>
        {Object.values(columns).map((column) => (
          <Column
            key={column.id}
            {...column}
            cards={column.cards.map((id) => cards[id])}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanPage;
