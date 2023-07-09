import { notFound } from "next/navigation";
import Image from "next/image";
import { items } from "./data";
import Button from "@/components/Button/Button";

import css from "./page.module.css";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <>
      <h1 className={css.categoryTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={css.item} key={item.id}>
          <div className={css.content}>
            <h1 className={css.title}>{item.title}</h1>
            <p className={css.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={css.imgContainer}>
            <Image
              src={item.image}
              alt="category"
              className={css.img}
              fill={true}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
