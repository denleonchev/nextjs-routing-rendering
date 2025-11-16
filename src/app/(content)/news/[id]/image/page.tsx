import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import styles from "@/app/(content)/news/[id]/image/page.module.css";

export default async function NewsImagePage(
  props: PageProps<"/news/[id]/image">,
) {
  const { id } = await props.params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className={styles.fullscreenImage}>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
