"use client"

import React from "react";
import styles from "./menuLinks.module.css";
import { usePathname } from "next/navigation";

import Link from "next/link";
function MenuLinks({ item }) {
  const PathName = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${PathName === item.path && styles.active} `}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLinks;
