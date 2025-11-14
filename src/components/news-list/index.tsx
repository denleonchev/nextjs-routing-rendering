import Link from "next/link";
import styles from "@/components/news-list/index.module.css";
import { NewsItem } from "@/dummy-news";

export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <ul className={styles.newsList}>
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
