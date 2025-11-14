import Link from "next/link";
import styles from "@/app/news/page.module.css";

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul className={styles.newsList}>
        <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Item</Link>
        </li>
      </ul>
    </>
  );
}
