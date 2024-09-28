export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-Fr", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
