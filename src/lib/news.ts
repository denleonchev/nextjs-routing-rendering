import sql from "better-sqlite3";
import { NewsItem } from "@/lib/dummy-news";
import { setTimeout } from "node:timers/promises";

const db = sql("meals.db");

export async function getAllNews() {
  await setTimeout(2000);
  return db
    .prepare(
      `
    SELECT * FROM news 
    `,
    )
    .all() as unknown as NewsItem[];
}

export async function getLatestNews() {
  await setTimeout(4000);
  return db
    .prepare(
      `
    SELECT * FROM news ORDER BY date DESC LIMIT 3
    `,
    )
    .all() as unknown as NewsItem[];
}

export async function getAvailableNewsYears() {
  await setTimeout(2000);
  return db
    .prepare(
      `
    SELECT DISTINCT strftime('%Y', date) FROM news ORDER BY date DESC
    `,
    )
    .all() as unknown as { ["strftime('%Y', date)"]: string }[];
}

export async function getAvailableNewsMonths(year?: number) {
  await setTimeout(2000);
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

export async function getNewsForYear(year: number) {
  await setTimeout(2000);
  return db
    .prepare(
      `
    SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC
    `,
    )
    .all(String(year)) as unknown as NewsItem[];
}

export async function getNewsItem(slug: string) {
  await setTimeout(2000);
  return db
    .prepare(
      `
    SELECT * FROM news WHERE slug = ? ORDER BY date DESC
    `,
    )
    .get(slug) as unknown as NewsItem;
}

export async function getNewsForYearAndMonth(year: number, month: number) {
  await setTimeout(2000);
  return db
    .prepare(
      `
    SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC
    `,
    )
    .all(String(year), String(month).padStart(2, "0")) as unknown as NewsItem[];
}
