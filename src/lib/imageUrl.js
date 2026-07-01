/** Resolve public asset paths for Vite base URL (e.g. /tanishqgreen/) */
export function imageUrl(path) {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
