import React, { useState } from "react";
import data from "./data";
import Button from "./button";

const allCategory = [
  "all",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];

const menu = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategory);
  const filterItems = (cate) => {
    if (cate === "all") {
      return setMenu(data);
    }
    let newItems = data.filter((item) => {
      return item.category === cate;
    });

    setMenu(newItems);
  };

  return (
    <>
      <Button filterItems={filterItems} categories={categories} />
      <div className="lg:grid grid-cols-[1fr_1fr_1fr] gap-6  block  ">
        {menu.map((items) => {
          const { id, img, title, desc, price } = items;
          return (
            <article
              key={id}
              className="hover:shadow-2xl mx-auto rounded-2xl  max-w-xl "
            >
              <img
                src={img}
                alt={title}
                className=" w-[20rem] h-[16rem] rounded-xl object-cover mx-auto"
              />
              <div className="flex justify-around items-center pt-6 pb-4">
                <h2 className="text-[1.5rem] capitalize">{title}</h2>
                <p className="text-[1.5rem]  text-yellow-700">${price}</p>
              </div>
              <p className="px-4 lg:mb-4 mb-5 text-center">{desc}</p>
            </article>
          );
        })}
      </div>
    </>
  );
};
export default menu;
