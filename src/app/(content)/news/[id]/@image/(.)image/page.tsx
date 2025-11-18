import { notFound } from "next/navigation";
import NewsImageModal from "@/components/image-modal";
import { getNewsItem } from "@/lib/news";

export default async function NewsImgaeInterceptingPage(
  props: PageProps<"/news/[id]/image">,
) {
  const { id } = await props.params;
  const newsItem = getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  return <NewsImageModal image={newsItem.image} title={newsItem.title} />;
}
