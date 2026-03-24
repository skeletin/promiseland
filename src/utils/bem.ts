/** Maps labels like `"in progress"` → `"in-progress"` for BEM `--modifier` segments. */
export function toBemModifier(value: string): string {
  return value.trim().replace(/\s+/g, "-");
}
