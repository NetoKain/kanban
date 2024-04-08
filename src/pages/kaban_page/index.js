import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Column from "../../components/column";
import Board from "../../components/board";

function addSubcolumns(columns) {
  const columnsWithSub = JSON.parse(JSON.stringify(columns));
  const result = {};
  Object.keys(columnsWithSub).forEach((id) => {
    const parentId = columnsWithSub[id].parentId;
    if (parentId) {
      columnsWithSub[parentId] = columnsWithSub[parentId] || {};
      columnsWithSub[parentId].subcolumns = columnsWithSub[parentId].subcolumns || [];
      columnsWithSub[parentId].subcolumns.push(columnsWithSub[id]);
    } else {
      result[id] = columnsWithSub[id];
    }
  });
  return result ?? {};
}

const KanbanPage = () => {
  const columns = useSelector((state) => state.columns.byId);
  const [columnsNormalized, setColumnsNormalized] = useState({});

  useEffect(()=>{
    setColumnsNormalized(addSubcolumns(columns));
  },[]);

  return (
    <div>
      <h1>Kanban Board</h1>
      <Board columns={columnsNormalized}/>
    </div>
  );
};
export default KanbanPage;
