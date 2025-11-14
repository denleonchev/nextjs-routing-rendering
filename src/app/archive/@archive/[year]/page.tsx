import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import styles from "@/app/archive/@archive/[year]/page.module.css";

export default async function ArchivePage({
  params,
}: PageProps<"/archive/[year]">) {
  const { year } = await params;
  const newsForYear = getNewsForYear(Number(year));
  return (
    <>
      <h2 className={styles.yearArchiveTitle}>Archive for {year}</h2>
      <NewsList news={newsForYear} />
    </>
  );
}
