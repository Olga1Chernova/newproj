import Link from 'next/link';
import Image from 'next/image';

import css from './page.module.css'

const Blog = () => {
  return (
    <div className={css.mainContainer}>
      <Link href="/blog/testId" className={css.container}>
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
          <h1 className={css.title}>Test</h1>
          <p className={css.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;