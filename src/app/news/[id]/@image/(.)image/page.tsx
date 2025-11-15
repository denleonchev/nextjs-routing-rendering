import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsImageModal from "@/components/image-modal";

export default async function NewsImgaeInterceptingPage(
  props: PageProps<"/news/[id]/image">,
) {
  const { id } = await props.params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === id);

  if (!newsItem) {
    notFound();
  }

  return <NewsImageModal image={newsItem.image} title={newsItem.title} />;
}
