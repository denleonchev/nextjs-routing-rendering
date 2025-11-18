import styles from "@/app/(content)/news/[id]/page.module.css";
import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage(props: PageProps<"/news/[id]">) {
  const { id } = await props.params;
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className={styles.newsArticle}>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={newsItem.image} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
