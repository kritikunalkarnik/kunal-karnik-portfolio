const base = import.meta.env.BASE_URL;

export function withBase(path: string) {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const normalized = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${normalized}`;
}
