/**
 * params.url      string
 * params.replace  string
 */
(() => {
  const global =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
        ? window
        : this;

  let content = global.YYKM.fetch(global.params.url);

  const replaceParam = global.params.replace;
  if (typeof replaceParam === "string" && replaceParam.length > 0) {
    const rules = replaceParam.split(";");

    for (const rule of rules) {
      const idx = rule.indexOf("->");
      if (idx === -1) continue;

      const from = rule.slice(0, idx);
      const to = rule.slice(idx + 2);

      content = content.replaceAll(from, to);
    }
  }

  return content;
})();
