import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import styles from "@/app/(content)/archive/@latest/default.module.css";

export default function DefaultLatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2 className={styles.defaultLatestPageTitle}>Latest Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
