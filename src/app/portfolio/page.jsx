import Image from "next/image";
import Link from "next/link";

import css from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={css.container}>
      <h2 className={css.chooseTitle}>Choose a gallery</h2>
      <div className={css.items}>
        <Link href="/portfolio/illustrations" className={css.item}>
          <span className={css.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={css.item}>
          <span className={css.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={css.item}>
          <span className={css.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
