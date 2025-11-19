import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";
import { getFilteredNews } from "./utils";
import ArchiveHeader from "@/components/archive-header";
import { Suspense } from "react";

async function ArchiveHeaderContainer({
  filter,
}: {
  filter: string[] | undefined;
}) {
  const isYearSelected = filter?.[0] !== undefined && filter?.[0] !== "";
  const isMonthSelected = filter?.[1] !== undefined && filter?.[1] !== "";
  const selectedYear = isYearSelected ? parseInt(filter?.[0]) : undefined;
  const selectedMonth = isMonthSelected ? parseInt(filter?.[1]) : undefined;
  const availableNewsMonths = await getAvailableNewsMonths(selectedYear);
  const availableNewsMonthsParsed = availableNewsMonths.map((newsItem) =>
    parseInt(newsItem["strftime('%m', date)"]),
  );
  const availableNewsYears = await getAvailableNewsYears();
  const availableNewsYearsParsed = availableNewsYears.map((newsItem) =>
    parseInt(newsItem["strftime('%Y', date)"]),
  );

  return (
    <ArchiveHeader
      selectedYear={selectedYear}
      selectedMonth={selectedMonth}
      years={availableNewsYearsParsed}
      months={availableNewsMonthsParsed}
    />
  );
}
async function ArchiveNewsListContainer({
  filter,
}: {
  filter: string[] | undefined;
}) {
  const isYearSelected = filter?.[0] !== undefined && filter?.[0] !== "";
  const isMonthSelected = filter?.[1] !== undefined && filter?.[1] !== "";
  const selectedYear = isYearSelected ? parseInt(filter?.[0]) : undefined;
  const selectedMonth = isMonthSelected ? parseInt(filter?.[1]) : undefined;
  const filteredNews = await getFilteredNews(selectedYear, selectedMonth);
  if (!filteredNews.length) {
    throw new Error("Filter is invalid");
  }

  return <NewsList news={filteredNews} />;
}

export default async function ArchivePage({
  params,
}: PageProps<"/archive/[[...filter]]">) {
  const { filter } = await params;
  return (
    <>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ArchiveHeaderContainer filter={filter} />
      </Suspense>
      <Suspense fallback={<div>Loading filtered news...</div>}>
        <ArchiveNewsListContainer filter={filter} />
      </Suspense>
    </>
  );
}
