import Image from 'next/image'

import css from './page.module.css'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

const Post = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={css.container}>
      <div className={css.top}>
        <div className={css.info}>
          <h1 className={css.title}>Title</h1>
          <p className={css.desc}>Desc</p>
          <div className={css.author}>
            <Image
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
              alt=""
              width={40}
              height={40}
              className={css.avatar}
            />
            <span className={css.username}>Username</span>
          </div>
        </div>
        <div className={css.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
            alt=""
            fill={true}
            className={css.image}
          />
        </div>
      </div>
      <div className={css.content}>
        <p className={css.text}>Content</p>
      </div>
    </div>
  );
}

export default Post