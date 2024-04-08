import styled from "styled-components";
export const CardContainer = styled.div`
  background: #fff;
  border-left: 4px solid ${props => props.borderColor || '#eee'}; // A cor da borda esquerda varia
  box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 8px;
  font-family: 'Arial', sans-serif;
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.span`
  margin: 0;
  font-size: 14px;
  color: #333;
  `

export const ItemIcon = styled.div`
  background-color: #ffab00; /* Exemplo de cor para o ícone */
  width: 24px;
  height: 24px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ItemId = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: #5e6c84;
  margin-right: 8px;
`;

export const ItemTitle = styled.h4`
  margin: 0;
  flex-grow: 1;
`;

export const ItemTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Tag = styled.span`
  background: #eaecef;
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 12px;
`;

export const ItemInfo = styled.div`
  font-size: 12px;
  color: #5e6c84;
`;
