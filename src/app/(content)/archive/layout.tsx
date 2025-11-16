import styles from "@/app/(content)/archive/layout.module.css";

export default function ArchiveLayout({
  archive,
  latest,
}: LayoutProps<"/archive">) {
  return (
    <div>
      <h1>News Archive</h1>
      <section className={styles.archiveFilter}>{archive}</section>
      <section className={styles.archiveLatest}>{latest}</section>
    </div>
  );
}
