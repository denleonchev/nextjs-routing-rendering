import sql from "better-sqlite3";
import { NewsItem } from "@/lib/dummy-news";

const db = sql("meals.db");

export function getAllNews() {
  return db
    .prepare(
      `
    SELECT * FROM news 
    `,
    )
    .all() as unknown as NewsItem[];
}

export function getLatestNews() {
  return db
    .prepare(
      `
    SELECT * FROM news ORDER BY date DESC LIMIT 3
    `,
    )
    .all() as unknown as NewsItem[];
}

export function getAvailableNewsYears() {
  return db
    .prepare(
      `
    SELECT DISTINCT strftime('%Y', date) FROM news ORDER BY date DESC
    `,
    )
    .all() as unknown as { ["strftime('%Y', date)"]: string }[];
}

export function getAvailableNewsMonths(year?: number) {
  if (year === undefined || isNaN(year)) {
    return [];
  }
  return db
    .prepare(
      `
    SELECT DISTINCT strftime('%m', date) FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC
    `,
    )
    .all(String(year)) as unknown as { ["strftime('%m', date)"]: string }[];
}

export function getNewsForYear(year: number) {
  return db
    .prepare(
      `
    SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC
    `,
    )
    .all(String(year)) as unknown as NewsItem[];
}

export function getNewsItem(slug: string) {
  return db
    .prepare(
      `
    SELECT * FROM news WHERE slug = ? ORDER BY date DESC
    `,
    )
    .get(slug) as unknown as NewsItem;
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return db
    .prepare(
      `
    SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC
    `,
    )
    .all(String(year), String(month).padStart(2, "0")) as unknown as NewsItem[];
}
