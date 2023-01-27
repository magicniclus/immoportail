import React from "react";
import Tag from "./Tag";

const TagsContainer = (props) => {
  const tags = props.tags || null;
  return (
    <div className="flex">
      {tags.map((item, idx) => (
        <Tag key={idx} text={item} />
      ))}
    </div>
  );
};

export default TagsContainer;
