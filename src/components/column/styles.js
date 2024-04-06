import { styled } from "styled-components";

export const ColumnContainer = styled.div`
  height: 800px;
  width: 200px;
  contain: content;
  display: flex;
  flex-direction: column;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${(props) => props.color};
  padding: 0.5rem;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;;
  border-radius: 8px;
  padding: 0.5rem;
`;
