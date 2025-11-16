import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";
import { getFilteredNews } from "./utils";
import ArchiveHeader from "@/components/archive-header";

export default async function ArchivePage({
  params,
}: PageProps<"/archive/[[...filter]]">) {
  const { filter } = await params;
  const isYearSelected = filter?.[0] !== undefined && filter?.[0] !== "";
  const isMonthSelected = filter?.[1] !== undefined && filter?.[1] !== "";
  const selectedYear = isYearSelected ? parseInt(filter?.[0]) : undefined;
  const selectedMonth = isMonthSelected ? parseInt(filter?.[1]) : undefined;
  const availableNewsMonths = getAvailableNewsMonths(selectedYear);
  const availableNewsYears = getAvailableNewsYears();
  const filteredNews = getFilteredNews(selectedYear, selectedMonth);

  if (!filteredNews.length) {
    throw new Error("Filter is invalid");
  }

  return (
    <>
      <ArchiveHeader
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        years={availableNewsYears}
        months={availableNewsMonths}
      />
      <NewsList news={filteredNews} />
    </>
  );
}
