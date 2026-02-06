#!/usr/bin/env node

/**
 * generate-brand-assets.mjs
 *
 * Generates all brand/SEO image assets into /public:
 *   - og.png          (1200 × 630)   — Open Graph / social share image
 *   - apple-touch-icon.png (180 × 180)
 *   - favicon-32x32.png    (32 × 32)
 *   - favicon-16x16.png    (16 × 16)
 *   - favicon.ico           (multi-size: 16 + 32 + 48)
 *
 * Uses the `canvas` npm package (node-canvas). Run:
 *   node scripts/generate-brand-assets.mjs
 *
 * Requires: npm i -D canvas
 */

import { createCanvas, loadImage } from "canvas";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");
const LOGO_PATH = path.join(PUBLIC, "logo.png");

/* ── Brand colors ── */
const DEEP_NAVY = "#001020";
const NAVY = "#002040";
const RED = "#E00000";
const LIGHT = "#F0F0F0";
const MID = "#A0A0A0";
const WHITE = "#FFFFFF";

/* ── Helpers ── */

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function savePng(canvas, filename) {
  const out = path.join(PUBLIC, filename);
  const buf = canvas.toBuffer("image/png");
  fs.writeFileSync(out, buf);
  console.log(`  ✓ ${filename} (${canvas.width}×${canvas.height})`);
}

/** Draw a subtle diagonal grid pattern */
function drawGrid(ctx, w, h, color, spacing = 60) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;
  // Horizontal
  for (let y = 0; y < h; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  // Vertical
  for (let x = 0; x < w; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
}

/** Draw a subtle red accent swoosh line */
function drawAccent(ctx, w, h) {
  ctx.strokeStyle = RED;
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.78);
  ctx.quadraticCurveTo(w * 0.35, h * 0.72, w * 0.92, h * 0.78);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

/* ── OG Image (1200 × 630) ── */
async function generateOG(logo) {
  const W = 1200, H = 630;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = DEEP_NAVY;
  ctx.fillRect(0, 0, W, H);

  // Grid overlay
  drawGrid(ctx, W, H, "rgba(255,255,255,0.04)", 60);

  // Radial gradient depth
  const grad = ctx.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.35, W * 0.6);
  grad.addColorStop(0, "rgba(0,32,64,0.4)");
  grad.addColorStop(1, "transparent");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Accent swoosh
  drawAccent(ctx, W, H);

  // Logo — centered in top portion
  if (logo) {
    const logoSize = 120;
    const lx = (W - logoSize) / 2;
    const ly = H * 0.15;
    ctx.drawImage(logo, lx, ly, logoSize, logoSize);
  }

  // Company name
  ctx.textAlign = "center";
  ctx.fillStyle = WHITE;
  ctx.font = "bold 52px 'Inter', 'Helvetica Neue', Arial, sans-serif";
  ctx.fillText("PRT Logistics & Freight", W / 2, H * 0.52);

  // Tagline
  ctx.fillStyle = MID;
  ctx.font = "24px 'Inter', 'Helvetica Neue', Arial, sans-serif";
  ctx.fillText("Veteran-Owned Freight Brokerage", W / 2, H * 0.60);

  // Domain
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "18px 'Inter', 'Helvetica Neue', Arial, sans-serif";
  ctx.fillText("prtlogisticsandfreight.com", W / 2, H * 0.90);

  // Thin red bottom border
  ctx.fillStyle = RED;
  ctx.fillRect(0, H - 4, W, 4);

  savePng(canvas, "og.png");
}

/* ── Icon generator ── */
async function generateIcon(logo, size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, 0, size, size);

  // Rounded corners effect via clip (visual only — PNG is square)
  // Draw logo centered with padding
  if (logo) {
    const pad = Math.round(size * 0.12);
    const logoSize = size - pad * 2;
    ctx.drawImage(logo, pad, pad, logoSize, logoSize);
  } else {
    // Fallback: draw "PRT" text
    ctx.fillStyle = WHITE;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${Math.round(size * 0.4)}px 'Inter', Arial, sans-serif`;
    ctx.fillText("PRT", size / 2, size / 2);
  }

  // Subtle red bottom accent
  const accentH = Math.max(1, Math.round(size * 0.04));
  ctx.fillStyle = RED;
  ctx.fillRect(0, size - accentH, size, accentH);

  savePng(canvas, filename);
  return canvas;
}

/* ── ICO (multi-size) ── */
function generateICO(canvases) {
  // Simple ICO format: header + entries + PNG data
  const pngs = canvases.map((c) => c.toBuffer("image/png"));
  const count = pngs.length;

  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // reserved
  header.writeUInt16LE(1, 2);     // type: ICO
  header.writeUInt16LE(count, 4); // image count

  // Each entry: 16 bytes
  const entries = Buffer.alloc(count * 16);
  let dataOffset = 6 + count * 16;

  for (let i = 0; i < count; i++) {
    const size = canvases[i].width;
    const off = i * 16;
    entries.writeUInt8(size >= 256 ? 0 : size, off);      // width
    entries.writeUInt8(size >= 256 ? 0 : size, off + 1);   // height
    entries.writeUInt8(0, off + 2);   // palette
    entries.writeUInt8(0, off + 3);   // reserved
    entries.writeUInt16LE(1, off + 4);  // color planes
    entries.writeUInt16LE(32, off + 6); // bits per pixel
    entries.writeUInt32LE(pngs[i].length, off + 8); // data size
    entries.writeUInt32LE(dataOffset, off + 12);     // data offset
    dataOffset += pngs[i].length;
  }

  const ico = Buffer.concat([header, entries, ...pngs]);
  const out = path.join(PUBLIC, "favicon.ico");
  fs.writeFileSync(out, ico);
  console.log(`  ✓ favicon.ico (${count} sizes)`);
}

/* ── Main ── */
async function main() {
  console.log("Generating brand assets...\n");
  ensureDir(PUBLIC);

  let logo = null;
  try {
    logo = await loadImage(LOGO_PATH);
    console.log(`  Logo loaded: ${LOGO_PATH}\n`);
  } catch {
    console.log("  ⚠ Logo not found — generating text-based assets\n");
  }

  // OG image
  await generateOG(logo);

  // Icons
  const apple = await generateIcon(logo, 180, "apple-touch-icon.png");
  await generateIcon(logo, 32, "favicon-32x32.png");
  const ico16 = await generateIcon(logo, 16, "favicon-16x16.png");
  const ico32 = await generateIcon(logo, 32, "favicon-32x32.png");
  const ico48 = await generateIcon(logo, 48, "favicon-48x48.png");

  // Multi-size favicon.ico
  generateICO([ico16, ico32, ico48]);

  // Clean up temp 48px
  const temp48 = path.join(PUBLIC, "favicon-48x48.png");
  if (fs.existsSync(temp48)) fs.unlinkSync(temp48);

  console.log("\n✅ All brand assets generated in /public");
}

main().catch((err) => {
  console.error("Error generating assets:", err);
  process.exit(1);
});
