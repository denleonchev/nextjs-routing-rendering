import styles from "@/app/archive/@archive/page.module.css";
import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
export default function ArchivePage() {
  const availableNewsYears = getAvailableNewsYears();

  return (
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
  );
}
