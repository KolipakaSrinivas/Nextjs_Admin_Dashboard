"use client";
import Link from "next/link";
import styles from './menuLinks.module.css'


function MenuLink({ item }) {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
