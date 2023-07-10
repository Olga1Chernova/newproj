"use client"

import { useContext } from 'react';
import css from './darkModeToggleBtn.module.css'
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggleBtn = () => {
    
    const { toggle, mode } = useContext(ThemeContext);
    return (
      <div className={css.container} onClick={toggle}>
        <div className={css.icon}>🌙</div>
        <div className={css.icon}>🌞</div>
        <div
          className={css.toggle}
          style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    );
}

export default DarkModeToggleBtn