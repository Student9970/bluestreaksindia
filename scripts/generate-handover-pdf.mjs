/**
 * Markdown → PDF (PDFKit). Supports optional YAML front matter.
 *
 * Uses bufferPages + a single footer pass so PDFKit's automatic text pagination
 * never leaves orphan footer-only or blank pages (no double page breaks).
 *
 *   node scripts/generate-handover-pdf.mjs
 *   node scripts/generate-handover-pdf.mjs docs/OPERATIONS_HANDOVER_SOURCE.md docs/OPERATIONS_HANDOVER.pdf
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const THEMES = {
  default: {
    coverBg: "#0c1e2e",
    coverAccent: "#c9a227",
    primary: "#0c1e2e",
    primary2: "#152a40",
    accent: "#c9a227",
    muted: "#64748b",
    rule: "#cbd5e1",
    codeBg: "#f1f5f9",
    text: "#0f172a",
    coverSubtext: "#e2e8f0",
    bodyBg: null,
    sideStripe: null,
  },
  executive: {
    coverBg: "#0c111d",
    coverAccent: "#3b82f6",
    coverAccent2: "#1d4ed8",
    primary: "#0f172a",
    primary2: "#1e293b",
    accent: "#2563eb",
    muted: "#64748b",
    rule: "#e2e8f0",
    codeBg: "#f1f5f9",
    text: "#1e293b",
    coverSubtext: "#cbd5e1",
    bodyBg: "#fafafa",
    sideStripe: "#2563eb",
  },
};

const DEFAULT_CLIENT_META = {
  pdf_banner: "CONFIDENTIAL — CLIENT HANDOVER",
  pdf_title: "Project Handover",
  pdf_org: "Bluestreak India Private Limited",
  pdf_subtitle: "Website & admin panel — delivery documentation",
  doc_version: "Document version 1.1",
  doc_date: "28 March 2026",
  cover_blurb:
    "This document describes the delivered application, environment configuration, administrator access, and how to use the admin panel. Treat as confidential.",
  pdf_footer_line: "Bluestreak India · Confidential · Project handover documentation",
  pdf_info_title: "Bluestreak India — Project Handover",
  pdf_info_subject: "Confidential client handover",
  pdf_info_author: "Bluestreak Development",
  pdf_info_keywords: "handover, admin, Next.js",
  pdf_theme: "default",
};

function parseFrontMatter(raw) {
  if (!raw.startsWith("---\n")) {
    return { meta: {}, body: raw };
  }
  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) {
    return { meta: {}, body: raw };
  }
  const yamlBlock = raw.slice(4, end);
  const body = raw.slice(end + 5);
  const meta = {};
  for (const line of yamlBlock.split("\n")) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    meta[m[1]] = v;
  }
  return { meta, body };
}

const argv = process.argv.slice(2);
const mdPath = argv[0]
  ? path.isAbsolute(argv[0])
    ? argv[0]
    : path.join(root, argv[0])
  : path.join(root, "docs", "CLIENT_HANDOVER.md");
const pdfPath = argv[1]
  ? path.isAbsolute(argv[1])
    ? argv[1]
    : path.join(root, argv[1])
  : path.join(root, "docs", "CLIENT_HANDOVER.pdf");

const rawMd = fs.readFileSync(mdPath, "utf8");
const { meta: fmMeta, body: mdContent } = parseFrontMatter(rawMd);
const meta = { ...DEFAULT_CLIENT_META, ...fmMeta };
const themeName = (meta.pdf_theme || "default").toLowerCase();
const theme = THEMES[themeName] || THEMES.default;

const bodyStart = mdContent.search(/^\#\#\s+1\.\s/m);
const bodyMd = bodyStart >= 0 ? mdContent.slice(bodyStart) : mdContent;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 52, bottom: 64, left: 54, right: 54 },
  bufferPages: true,
  autoFirstPage: false,
  info: {
    Title: meta.pdf_info_title,
    Subject: meta.pdf_info_subject,
    Author: meta.pdf_info_author,
    Keywords: meta.pdf_info_keywords,
  },
});

const stream = fs.createWriteStream(pdfPath);
doc.pipe(stream);

let pageAddedCount = 0;
doc.on("pageAdded", () => {
  pageAddedCount++;
  if (pageAddedCount === 1) {
    return;
  }
  if (theme.bodyBg) {
    doc.save();
    doc.rect(0, 0, doc.page.width, doc.page.height).fill(theme.bodyBg);
    doc.restore();
  }
  drawPageAccent();
});

const pageWidth = () => doc.page.width - doc.page.margins.left - doc.page.margins.right;
const bottomLimit = () => doc.page.height - doc.page.margins.bottom - 28;
const pageTop = () => doc.page.margins.top;
const maxBlockHeightOnePage = () => Math.max(80, bottomLimit() - pageTop() - 8);

function drawPageAccent() {
  if (!theme.sideStripe) return;
  doc.save();
  doc.rect(0, 0, 4, doc.page.height).fill(theme.sideStripe);
  doc.restore();
}

/**
 * Draw footer on whatever page is current (final pass after switchToPage).
 * Must use lineBreak: false — wrapped text runs LineWrapper.wrap(), which treats
 * doc.y near the page bottom as overflow and calls continueOnNewPage() per line.
 */
function drawFooterOnCurrentPage(pageIndex1Based, totalPages) {
  const left = doc.page.margins.left;
  const w = pageWidth();
  const y = doc.page.height - 44;
  const cx = doc.page.width / 2;
  const label =
    totalPages > 1
      ? `Page ${pageIndex1Based} of ${totalPages}`
      : `Page ${pageIndex1Based}`;
  doc.save();
  if (theme.sideStripe) {
    doc.moveTo(left, y - 4)
      .lineTo(left + w, y - 4)
      .lineWidth(0.5)
      .strokeColor(theme.rule)
      .stroke();
  }
  doc.font("Helvetica").fontSize(7.5).fillColor(theme.muted);
  const w1 = doc.widthOfString(meta.pdf_footer_line);
  doc.text(meta.pdf_footer_line, cx - w1 / 2, y, { lineBreak: false });
  const w2 = doc.widthOfString(label);
  doc.text(label, cx - w2 / 2, y + 10, { lineBreak: false });
  doc.restore();
  doc.fillColor(theme.text);
  doc.x = doc.page.margins.left;
  doc.y = doc.page.margins.top;
}

/**
 * New content page only — no footer here (avoids blank/footer-only orphan pages when
 * PDFKit also inserts pages during text flow).
 */
function addContentPage() {
  doc.addPage();
  doc.x = doc.page.margins.left;
  doc.y = pageTop();
  doc.fillColor(theme.text);
}

function ensureSpace(needed) {
  const lim = bottomLimit();
  const top = pageTop();
  const n = Math.min(Math.max(0, needed), 20000);
  let guard = 0;
  while (doc.y + n > lim && guard++ < 50) {
    const atTop = doc.y <= top + 3;
    const capacity = lim - top;
    if (atTop && n > capacity) {
      break;
    }
    addContentPage();
  }
}

function stripMd(s) {
  return s.replace(/\*\*/g, "").replace(/`([^`]+)`/g, "$1");
}

function isCredentialSectionTitle(h2Title) {
  return /administrator\s+login\s+credentials|administrator\s+access\b/i.test(
    h2Title.trim()
  );
}

function renderCover() {
  const W = doc.page.width;
  const H = doc.page.height;

  if (themeName === "executive") {
    doc.save();
    doc.rect(0, 0, W, H).fill(theme.coverBg);
    doc.rect(0, 0, W, 6).fill(theme.coverAccent);
    doc.circle(W * 0.88, H * 0.22, 120).fillOpacity(0.08).fill("#ffffff").fillOpacity(1);
    doc
      .fillColor("#f8fafc")
      .font("Helvetica-Bold")
      .fontSize(8)
      .letterSpacing(1.2)
      .text(meta.pdf_banner.toUpperCase(), 54, 72, { width: W - 108, align: "left" });
    doc.fontSize(32).letterSpacing(0).text(meta.pdf_title, 54, 108, { width: W - 108, lineGap: 4 });
    doc
      .font("Helvetica")
      .fontSize(14)
      .fillColor(theme.coverSubtext)
      .text(meta.pdf_org, 54, doc.y + 8, { width: W - 108 });
    doc.moveDown(2.2);
    const y0 = doc.y;
    doc
      .fontSize(11)
      .fillColor("#94a3b8")
      .text(meta.pdf_subtitle, 54, y0, { width: W - 220, lineGap: 4 });
    doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor(theme.coverAccent)
      .text(meta.doc_version, W - 160, y0, { width: 106, align: "right" });
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#94a3b8")
      .text(meta.doc_date, W - 160, y0 + 14, { width: 106, align: "right" });
    doc.moveDown(3);
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#cbd5e1")
      .text(meta.cover_blurb, 54, doc.y, { width: W - 108, lineGap: 4, align: "left" });
    doc.restore();
  } else {
    doc.save();
    doc.rect(0, 0, W, 108).fill(theme.coverBg);
    doc.rect(0, 104, W, 4).fill(theme.coverAccent);
    doc
      .fillColor("#ffffff")
      .font("Helvetica-Bold")
      .fontSize(9)
      .text(meta.pdf_banner, 0, 32, { width: W, align: "center" });
    doc.fontSize(28).text(meta.pdf_title, 0, 52, { width: W, align: "center" });
    doc
      .font("Helvetica")
      .fontSize(13)
      .fillColor(theme.coverSubtext)
      .text(meta.pdf_org, 0, 86, { width: W, align: "center" });
    doc.restore();
    doc.y = 128;
    doc.x = doc.page.margins.left;
    doc.fillColor(theme.muted).font("Helvetica").fontSize(10.5);
    doc.text(meta.pdf_subtitle, { width: pageWidth(), align: "center" });
    doc.moveDown(1.2);
    doc
      .font("Helvetica-Bold")
      .fillColor(theme.primary2)
      .fontSize(11)
      .text(meta.doc_version, { width: pageWidth(), align: "center" });
    doc.font("Helvetica").fillColor(theme.muted).fontSize(10).text(meta.doc_date, {
      width: pageWidth(),
      align: "center",
    });
    doc.moveDown(2.5);
    doc.fillColor(theme.text);
    doc
      .font("Helvetica")
      .fontSize(9.5)
      .fillColor("#475569")
      .text(meta.cover_blurb, doc.page.margins.left, doc.y, {
        width: pageWidth(),
        align: "left",
        lineGap: 3,
      });
    doc.moveDown(2);
    doc.fillColor(theme.text);
  }

  addContentPage();
}

function writeH2(text) {
  const t = stripMd(text);
  doc.moveDown(0.3);
  doc.x = doc.page.margins.left;
  const blockH = 48;
  if (doc.y + blockH > bottomLimit()) {
    addContentPage();
  }
  doc.font("Helvetica-Bold").fontSize(13).fillColor(theme.primary);
  doc.text(t, { width: pageWidth(), lineGap: 2 });
  const ruleY = doc.y + 4;
  doc
    .moveTo(doc.page.margins.left, ruleY)
    .lineTo(doc.page.margins.left + 64, ruleY)
    .lineWidth(2.5)
    .strokeColor(theme.accent)
    .stroke()
    .strokeColor("#000000")
    .lineWidth(1);
  doc.moveTo(doc.page.margins.left, ruleY + 1)
    .lineTo(doc.page.width - doc.page.margins.right, ruleY + 1)
    .lineWidth(0.35)
    .strokeColor(theme.rule)
    .stroke()
    .strokeColor("#000000");
  doc.moveDown(0.75);
  doc.fillColor(theme.text);
}

function writeH3(text) {
  const t = stripMd(text);
  doc.x = doc.page.margins.left;
  if (doc.y + 32 > bottomLimit()) {
    addContentPage();
  }
  doc.font("Helvetica-Bold").fontSize(11.5).fillColor(theme.primary2);
  doc.text(t, { width: pageWidth(), lineGap: 2 });
  doc.moveDown(0.4);
  doc.fillColor(theme.text);
}

function writeBlock(text, { fontSize = 10.5, bold = false, moveDown = 0.4, color } = {}) {
  const stripped = stripMd(text);
  if (!stripped.trim()) {
    doc.moveDown(moveDown);
    return;
  }
  const col = color ?? theme.text;
  doc.fontSize(fontSize);
  doc.font(bold ? "Helvetica-Bold" : "Helvetica");
  doc.fillColor(col);
  const w = pageWidth();
  const lineGuess = fontSize * 1.35;
  doc.x = doc.page.margins.left;
  if (doc.y + lineGuess > bottomLimit()) {
    addContentPage();
  }
  doc.text(stripped, doc.page.margins.left, doc.y, {
    width: w,
    lineGap: 3,
    align: "left",
  });
  doc.moveDown(moveDown);
  doc.fillColor(theme.text);
}

function writeCodeBlock(code) {
  const stripped = code.trimEnd();
  const w = pageWidth() - 16;
  const pad = 10;
  doc.font("Courier").fontSize(8.5).fillColor("#334155");
  const h = doc.heightOfString(stripped, { width: w, lineGap: 2 });
  const naturalH = h + pad * 2;
  const boxH = Math.min(naturalH, maxBlockHeightOnePage());
  ensureSpace(boxH + 12);
  const x = doc.page.margins.left;
  const y = doc.y;
  doc.save();
  doc.roundedRect(x, y, pageWidth(), boxH, 4).fill(theme.codeBg);
  doc.restore();
  doc.fillColor("#334155");
  doc.text(stripped, x + pad, y + pad, {
    width: w,
    height: Math.max(boxH - pad * 2, 12),
    lineGap: 2,
    ellipsis: true,
  });
  doc.y = y + boxH;
  doc.moveDown(0.55);
  doc.fillColor(theme.text);
}

function writeTableRow(cells, { header = false } = {}) {
  const line = cells.join("          ·          ");
  writeBlock(line, {
    fontSize: header ? 9.5 : 9,
    bold: header,
    moveDown: 0.2,
    color: header ? theme.primary2 : theme.text,
  });
}

doc.addPage();
renderCover();

const lines = bodyMd.split(/\r?\n/);
let inCode = false;
const codeLines = [];
let inCredentialSection = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.trim().startsWith("```")) {
    if (inCode) {
      writeCodeBlock(codeLines.join("\n"));
      codeLines.length = 0;
      inCode = false;
    } else {
      inCode = true;
    }
    continue;
  }
  if (inCode) {
    codeLines.push(line);
    continue;
  }

  if (!line.trim()) {
    doc.moveDown(0.15);
    continue;
  }

  if (line.trim() === "---") {
    if (doc.y + 18 > bottomLimit()) {
      addContentPage();
    }
    const y = doc.y + 4;
    doc
      .moveTo(doc.page.margins.left, y)
      .lineTo(doc.page.width - doc.page.margins.right, y)
      .strokeColor(theme.rule)
      .lineWidth(0.75)
      .stroke()
      .strokeColor("#000000")
      .lineWidth(1);
    doc.moveDown(0.55);
    continue;
  }

  if (line.trim().startsWith("|")) {
    const trimmed = line.trim();
    if (/^\|[\s\-:|]+\|$/.test(trimmed) || /^\|\s*[-:]+\s*\|/.test(trimmed)) {
      continue;
    }
    const cells = trimmed
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim().replace(/\*\*/g, ""));
    const rowText = cells.join("          ·          ");
    if (inCredentialSection) {
      doc.font("Helvetica").fontSize(8.8).fillColor(theme.primary2);
      const innerW = pageWidth() - 20;
      const textH = doc.heightOfString(rowText, { width: innerW, lineGap: 2 });
      const boxH = Math.min(Math.max(textH + 14, 22), maxBlockHeightOnePage());
      ensureSpace(boxH + 8);
      const x = doc.page.margins.left;
      const y = doc.y;
      doc.save();
      doc.roundedRect(x, y, pageWidth(), boxH, 3).fill("#f8fafc");
      doc.roundedRect(x, y, pageWidth(), boxH, 3).strokeColor(theme.rule).lineWidth(0.5).stroke();
      doc.restore();
      doc.fillColor(theme.primary2);
      doc.text(rowText, x + 10, y + 7, { width: innerW, lineGap: 2 });
      doc.y = y + boxH;
      doc.moveDown(0.15);
      doc.fillColor(theme.text);
    } else {
      const headerish =
        /^Field\s*$/i.test(cells[0] || "") ||
        /^Variable\s*$/i.test(cells[0] || "") ||
        /^Layer\s*$/i.test(cells[0] || "") ||
        /^Topic\s*$/i.test(cells[0] || "") ||
        /^Area\s*$/i.test(cells[0] || "") ||
        /^Item\s*$/i.test(cells[0] || "") ||
        /^Persona\s*$/i.test(cells[0] || "") ||
        /^Email address\s*$/i.test(cells[0] || "") ||
        /^Path\s*$/i.test(cells[0] || "") ||
        /^Milestone\s*$/i.test(cells[0] || "") ||
        /^Service\s*$/i.test(cells[0] || "") ||
        /^Role\s*$/i.test(cells[0] || "");
      writeTableRow(cells, { header: headerish });
    }
    continue;
  }

  if (line.startsWith("## ")) {
    const h2Title = line.slice(3);
    inCredentialSection = isCredentialSectionTitle(h2Title);
    writeH2(h2Title);
    continue;
  }
  if (line.startsWith("### ")) {
    writeH3(line.slice(4));
    continue;
  }

  writeBlock(line, { fontSize: 10.5, moveDown: 0.32 });
}

const range = doc.bufferedPageRange();
const total = range.count;
doc._wrapper = null;
doc._textOptions = null;
for (let i = 0; i < total; i++) {
  doc.switchToPage(range.start + i);
  doc.x = doc.page.margins.left;
  doc.y = doc.page.margins.top;
  drawFooterOnCurrentPage(i + 1, total);
}

doc.end();

stream.on("finish", () => {
  console.log("Created:", pdfPath);
});
