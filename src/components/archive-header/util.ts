export function formatMonth(month: number) {
  const now = new Date();
  now.setMonth(month);
  return now.toLocaleString("en", { month: "long" });
}
