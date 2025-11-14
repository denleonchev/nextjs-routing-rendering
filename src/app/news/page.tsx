import styles from "@/app/news/page.module.css";
import { getAllNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  const allNews = getAllNews();
  return (
    <>
      <h1 className={styles.newsTitle}>News page</h1>
      <NewsList news={allNews} />
    </>
  );
}
