import { styled } from "styled-components";

export const ColumnContainer = styled.div`
  flex: 1;
  margin: 0 3px;
  background: #f4f5f7;
  border-radius: 3px;
`;

export const ColumnHeader = styled.div`
  padding: 10px;
  background: #eee;
  border-radius: 3px 3px 0 0;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;;
  border-radius: 8px;
  padding: 0.5rem;
`;
