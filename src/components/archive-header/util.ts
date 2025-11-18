export function formatMonth(month: number) {
  const now = new Date();
  now.setMonth(month - 1);
  return now.toLocaleString("en", { month: "long" });
}
