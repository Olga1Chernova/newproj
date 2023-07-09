import Image from 'next/image';
import Button from '@/components/Button/Button';

import css from './page.module.css'

const Contact = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Let&#39;s Keep in Touch</h1>
      <div className={css.content}>
        <div className={css.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={css.image}
          />
        </div>
        <form className={css.form}>
          <input type="text" placeholder="name" className={css.input} />
          <input type="text" placeholder="email" className={css.input} />
          <textarea className={css.textarea} placeholder='message' cols={30} rows={10} ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
