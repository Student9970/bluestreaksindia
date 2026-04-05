/**
 * Heading-style title case: capitalize words except short conjunctions/articles
 * when they are not the first or last word (Chicago/AP-style minors).
 */
const MINOR = new Set([
  "a",
  "an",
  "the",
  "and",
  "but",
  "or",
  "nor",
  "for",
  "on",
  "at",
  "to",
  "from",
  "by",
  "of",
  "in",
  "as",
  "vs",
  "via",
  "per",
  "not",
]);

function formatSingle(segment, isFirst, isLast) {
  const m = segment.match(/^([^A-Za-z0-9]*)([A-Za-z0-9']+)([^A-Za-z0-9]*)$/);
  if (!m) return segment;
  const [, pre, core, post] = m;
  const lower = core.toLowerCase();
  if (!isFirst && !isLast && MINOR.has(lower)) {
    return pre + lower + post;
  }
  return pre + core.charAt(0).toUpperCase() + lower.slice(1) + post;
}

function formatToken(token, wordIndex, totalWords) {
  if (token.includes("-")) {
    const parts = token.split("-");
    return parts
      .map((part, pi) =>
        formatSingle(
          part,
          wordIndex === 0 && pi === 0,
          wordIndex === totalWords - 1 && pi === parts.length - 1,
        ),
      )
      .join("-");
  }
  return formatSingle(
    token,
    wordIndex === 0,
    wordIndex === totalWords - 1,
  );
}

export function toHeadingCase(text) {
  if (text == null || text === "") return text;
  const trimmed = text.trim();
  const tokens = trimmed.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return text;
  const n = tokens.length;
  const out = tokens.map((t, i) => formatToken(t, i, n)).join(" ");
  const lead = text.match(/^\s*/)?.[0] ?? "";
  const trail = text.match(/\s*$/)?.[0] ?? "";
  return lead + out + trail;
}

/**
 * Title-style capitalization for body copy: normalize whitespace, split on
 * sentence boundaries (. ? !), then apply {@link toHeadingCase} to each sentence.
 */
export function toParagraphCase(text) {
  if (text == null || text === "") return text;
  const lead = text.match(/^\s*/)?.[0] ?? "";
  const trail = text.match(/\s*$/)?.[0] ?? "";
  const normalized = text.trim().replace(/\s+/g, " ");
  if (!normalized) return text;
  const sentences = normalized.split(/(?<=[.!?])\s+/);
  const out = sentences.map((s) => toHeadingCase(s.trim())).join(" ");
  return lead + out + trail;
}
