import React from "react";

const button = ({ filterItems, categories }) => {
  return (
    <div className="flex justify-center items-center gap-6 my-7">
      {categories.map((item, index) => {
        return (
          <button
            className="button "
            key={index}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default button;
