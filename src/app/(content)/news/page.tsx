import styles from "@/app/(content)/news/page.module.css";
import { getAllNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const allNews = await getAllNews();
  return (
    <>
      <h1 className={styles.newsTitle}>News page</h1>
      <NewsList news={allNews} />
    </>
  );
}
