import Link from 'next/link';

import css from './button.module.css'

const Button = ({text, url}) => {
    return (
      <Link href={url}>
        <button className={css.container}>{text}</button>
      </Link>
    );
}

export default Button