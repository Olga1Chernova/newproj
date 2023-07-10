import Link from 'next/link';
import Image from 'next/image';
import { notFound } from "next/navigation";

import css from './page.module.css'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'});

  if (!res.ok) {
    return notFound;
  }

  return res.json();
}

const Blog = async () => {

  const data = await getData();
  return (
    <div className={css.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={css.container} key={item.id}>
          <div className={css.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
              alt="blog item"
              width={400}
              height={250}
              className={css.img}
            />
          </div>
          <div className={css.content}>
            <h1 className={css.title}>{item.title}</h1>
            <p className={css.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;