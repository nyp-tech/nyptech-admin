export function humanizeDate(date: Date): string {
  return date.toISOString().split("T")[0];
}