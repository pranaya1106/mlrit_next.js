type ClassValue = string | number | null | undefined | false | Record<string, boolean>;

export function clsx(...args: ClassValue[]): string {
  const out: string[] = [];
  for (const a of args) {
    if (!a) continue;
    if (typeof a === "string" || typeof a === "number") {
      out.push(String(a));
    } else if (typeof a === "object") {
      for (const key of Object.keys(a)) {
        if (a[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}
