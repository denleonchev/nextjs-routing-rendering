import { getAllNews, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export function getFilteredNews(year?: number, month?: number) {
  if (year === undefined) {
    return getAllNews();
  }

  const isMonthInvalid = month !== undefined && isNaN(month);

  if (isNaN(year) || isMonthInvalid) {
    return [];
  }

  if (year && month === undefined) {
    return getNewsForYear(year);
  }

  if (year && month !== undefined) {
    return getNewsForYearAndMonth(year, month);
  }

  return [];
}
