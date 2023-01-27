import React from "react";
import Tag from "./Tag";

const TagsContainer = (props) => {
  const tags = props.tags || null;
  const updateStyle = props.updateStyle || null;
  return (
    <div
      className={`flex w-[50%] max-w-[400px] flex-wrap justify-around ${updateStyle}`}
    >
      {tags.map((item, idx) => (
        <Tag key={idx} text={item} />
      ))}
    </div>
  );
};

export default TagsContainer;
