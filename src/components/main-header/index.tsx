import Link from "next/link";
import styles from "./index.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.logo}>
        <Link href="/">NextNews</Link>
      </div>
      <ul>
        <li>
          <NavLink href="/news">News</NavLink>
        </li>
        <li>
          <NavLink href="/archive">Archive</NavLink>
        </li>
      </ul>
    </header>
  );
}
