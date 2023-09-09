export function verifyPath(path: string, pathname: string) {
  if (path === '/') return pathname === path;
  return pathname.includes(path);
}
