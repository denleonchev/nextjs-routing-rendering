import styles from "@/components/archive-header/index.module.css";
import Link from "next/link";
import { formatMonth } from "./util";

export default async function ArchiveHeader({
  selectedYear,
  selectedMonth,
  years,
  months,
}: {
  selectedYear?: number;
  selectedMonth?: number;
  years: number[];
  months: number[];
}) {
  const isValidYearSelected =
    selectedYear !== undefined && !isNaN(selectedYear);
  const isValidMonthSelected =
    selectedMonth !== undefined && !isNaN(selectedMonth);
  return (
    <header className={styles.archiveHeader}>
      {isValidYearSelected && <h2>Posts for {selectedYear}</h2>}
      {isValidMonthSelected && <h3>Posts for {formatMonth(selectedMonth)}</h3>}
      {!isValidMonthSelected && (
        <nav>
          <ul>
            {isValidYearSelected
              ? months.sort().map((month) => (
                  <li key={month}>
                    <Link href={`/archive/${selectedYear}/${month}`}>
                      {formatMonth(month)}
                    </Link>
                  </li>
                ))
              : years.sort().map((year) => (
                  <li key={year}>
                    <Link href={`/archive/${year}`}>{year}</Link>
                  </li>
                ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
