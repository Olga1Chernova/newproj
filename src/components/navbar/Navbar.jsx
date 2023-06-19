"use client"
import css from './navbar.module.css'
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


const Navbar = () => {
  return (
    <div className={css.container}>
        <Link href='/' className={css.logo}>Posts App</Link>
        <div className={css.links}>
            {links.map(link => (
                <Link key={link.id} href={link.url} className={css.link}>{link.title}</Link>
            ))}
        <button className={css.logout} onClick={()=>{}}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar