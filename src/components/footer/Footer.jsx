import Image from 'next/image';

import css from './footer.module.css'

const Footer = () => {
  return (
    <div className={css.container}>
      <div>©2023 Posts App. All rights reserved.</div>
      <div className={css.social}>
        <Image src="/1.png" width={15} height={15} className={css.icon} alt="posts app facebook" />
        <Image src="/2.png" width={15} height={15} className={css.icon} alt="posts app instagram" />
        <Image src="/3.png" width={15} height={15} className={css.icon} alt="posts app twitter" />
        <Image src="/4.png" width={15} height={15} className={css.icon} alt="posts app youtube" />
      </div>
    </div>
  );
}

export default Footer