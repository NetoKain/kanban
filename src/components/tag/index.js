import React from "react";
import { TagContainer } from "./styles";

function Tag({ name, fontColor, borderColor, backgroundColor }) {
  return (
    <TagContainer
      fontColor={fontColor}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {name}
    </TagContainer>
  );
}

export default Tag;
