import React from "react";
import {
  CardContainer,
  CardHeader,
  CardTitle,
  ItemIcon,
  ItemId,
  ItemInfo,
  ItemTags,
  ItemTitle,
} from "./styles";
import Tag from "../tag";

const Card = ({
  id,
  title,
  description,
  assignee,
  creator,
  dueDate,
  size,
  priority,
  tags,
}) => {
  return (
    <CardContainer>
      <ItemTags>
        {tags?.map((tag) => (
          <Tag key={tag.id} {...tag} />
        ))}
      </ItemTags>
      <CardHeader>
        {/* <ItemIcon>Ícone</ItemIcon> */}
        <ItemId>{id}</ItemId>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <ItemInfo>{assignee}</ItemInfo>
      <ItemInfo>{creator}</ItemInfo>
    </CardContainer>
  );
};

export default Card;
