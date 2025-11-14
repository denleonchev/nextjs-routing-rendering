import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import styles from "@/app/archive/@archive/[[...filter]]/page.module.css";
import Link from "next/link";
import { getFilteredNews } from "./utils";

export default async function ArchivePage({
  params,
}: PageProps<"/archive/[[...filter]]">) {
  const { filter } = await params;
  const filteredNews = getFilteredNews(filter);
  const availableNewsYears = getAvailableNewsYears();

  return (
    <>
      <header className={styles.archiveHeader}>
        <nav>
          <ul>
            {availableNewsYears.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {filteredNews.length ? (
        <NewsList news={filteredNews} />
      ) : (
        <p>There are no news for the selected period</p>
      )}
    </>
  );
}
