"use client";

import { useRouter } from "next/navigation";
import styles from "@/components/image-modal/index.module.css";
import { NewsItem } from "@/dummy-news";

export default function NewsImageModal({
  image,
  title,
}: Pick<NewsItem, "image" | "title">) {
  const router = useRouter();
  return (
    <div className={styles.modalBackdrop} onClick={() => router.back()}>
      <dialog className={styles.modal} open>
        <div className={styles.fullscreenImage}>
          <img src={image} alt={title} />
        </div>
      </dialog>
    </div>
  );
}
