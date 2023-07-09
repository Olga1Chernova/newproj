import Image from 'next/image'
import HeroImg from 'public/hero.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src={HeroImg} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
