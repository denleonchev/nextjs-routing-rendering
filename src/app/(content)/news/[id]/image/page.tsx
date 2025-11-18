import { notFound } from "next/navigation";
import styles from "@/app/(content)/news/[id]/image/page.module.css";
import { getNewsItem } from "@/lib/news";

export default async function NewsImagePage(
  props: PageProps<"/news/[id]/image">,
) {
  const { id } = await props.params;
  const newsItem = getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className={styles.fullscreenImage}>
      <img src={newsItem.image} alt={newsItem.title} />
    </div>
  );
}
