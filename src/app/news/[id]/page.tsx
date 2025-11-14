import styles from "@/app/news/[id]/page.module.css";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function NewsDetailPage(props: PageProps<"/news/[id]">) {
  const { id } = await props.params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className={styles.newsArticle}>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
