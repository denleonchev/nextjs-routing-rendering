import { getAllNews, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export function getFilteredNews(filter?: (string | undefined)[]) {
  if (!filter) {
    return getAllNews();
  }

  const year = Number(filter[0]);
  const month = Number(filter[1]);

  if (!isNaN(year) && isNaN(month)) {
    return getNewsForYear(year);
  }

  if (!isNaN(year) && !isNaN(month)) {
    return getNewsForYearAndMonth(year, month);
  }

  return [];
}
