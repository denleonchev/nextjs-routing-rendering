"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const activeClassName = isActive ? styles.active : "";

  return (
    <Link href={href} className={`${styles.navLink} ${activeClassName}`}>
      {children}
    </Link>
  );
}
