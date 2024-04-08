import styled from "styled-components";

export const TagContainer = styled.span`
  outline: 1px solid ${(props) => props.borderColor ?? "#eaecef"};
  background: ${(props) => props.backgroundColor ?? "#eaecef"};
  color: ${(props) => props.fontColor ?? "#eaecef"};
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 12px;
`;
