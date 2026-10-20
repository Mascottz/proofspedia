const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), sandbox);
const proofs = sandbox.window.PROOFS;

assert.ok(Array.isArray(proofs), "data.js must define window.PROOFS");
assert.ok(proofs.length >= 40, "the collection should retain the current archive and its additions");
assert.equal(new Set(proofs.map(proof => proof.id)).size, proofs.length, "folio ids must be unique");
assert.equal(new Set(proofs.map(proof => proof.no)).size, proofs.length, "folio numbers must be unique");
assert.equal(new Set(proofs.map(proof => proof.title)).size, proofs.length, "folio titles must be distinct");
assert.deepEqual(Array.from(proofs, proof => Number(proof.no)), Array.from({ length: proofs.length }, (_, index) => index + 1), "folio numbers must remain consecutive");
assert.deepEqual([...new Set(proofs.map(proof => proof.domain))].sort(), [
  "Algebra", "Analysis", "Combinatorics", "Geometry", "Graph Theory",
  "Number Theory", "Probability", "Set Theory", "Topology"
]);

for (const proof of proofs) {
  for (const key of ["id", "no", "domain", "title", "theorem", "statement", "proofLead", "intuition", "whyItLives", "variants"]) {
    assert.ok(typeof proof[key] === "string" && proof[key].trim(), `${proof.id} needs ${key}`);
  }
  assert.ok(Array.isArray(proof.origin) && proof.origin.length, `${proof.id} needs attribution`);
  assert.ok(Array.isArray(proof.steps) && proof.steps.length >= 3, `${proof.id} needs a worked proof`);
  assert.equal(proof.examples.length, 2, `${proof.id} needs exactly two examples`);
  for (const example of proof.examples) {
    assert.ok(example.title && example.problem && example.solution, `${proof.id} has an incomplete example`);
  }
}

const siteFiles = [
  "index.html", "proofs.html", "proof.html", "about.html", "ledger.html", "app.js", "style.css", "README.md", "site.webmanifest",
  "assets/README.md", "assets/social-preview.svg", "assets/proofspedia-mark.svg", "assets/proofspedia-mark-reversed.svg", "assets/proofspedia-lockup.svg", "assets/favicon.svg", "assets/pinned-tab.svg"
];
const siteText = siteFiles.map(file => fs.readFileSync(path.join(root, file), "utf8")).join("\n") + "\n" + JSON.stringify(proofs);
assert.ok(!/[\u2013\u2014]/u.test(siteText), "site copy must not contain en dashes or em dashes");
const retiredTexts = [
  ["Proofs", "from", "the", "Bo" + "ok"].join(" "),
  "natur" + "aliis",
  "Aig" + "ner",
  "Zieg" + "ler"
];
for (const retiredText of retiredTexts) {
  assert.ok(!siteText.toLowerCase().includes(retiredText.toLowerCase()), "a retired reference remains in site content");
}
const siteWithoutCurrentRepo = siteText.toLowerCase().replaceAll("https://github.com/mascottz/proofspedia", "");
assert.ok(!siteWithoutCurrentRepo.includes(["mascottz/", "proofs"].join("")), "the old repository link remains in site content");

for (const [file, page] of Object.entries({
  "index.html": "home",
  "proofs.html": "archive",
  "proof.html": "proof",
  "about.html": "about",
  "ledger.html": "ledger"
})) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert.match(html, new RegExp(`<body data-page="${page}">`), `${file} needs its page identity`);
  assert.match(html, /<title>[^<]*Proofspedia[^<]*<\/title>/, `${file} needs original page metadata`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/);
  assert.ok(canonical?.[1].startsWith("https://proofspedia.vercel.app/"), `${file} needs an absolute canonical URL`);
  const socialImage = "https://proofspedia.vercel.app/assets/social-preview.png";
  assert.equal(html.match(/<meta property="og:image" content="([^"]+)">/)?.[1], socialImage, `${file} needs the absolute social preview image`);
  assert.equal(html.match(/<meta name="twitter:image" content="([^"]+)">/)?.[1], socialImage, `${file} needs the Twitter preview image`);
  assert.match(html, /<meta property="og:url" content="https:\/\/proofspedia\.vercel\.app\/[^"]*">/, `${file} needs an absolute Open Graph URL`);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, `${file} needs a large social card`);
  assert.match(html, /<link rel="icon" type="image\/svg\+xml" href="\.\/assets\/favicon\.svg">/, `${file} needs the SVG favicon`);
  assert.match(html, /<link rel="manifest" href="\.\/site\.webmanifest">/, `${file} needs the web manifest`);
  assert.match(html, /class="wordmark-mark" src="\.\/assets\/proofspedia-mark\.svg"/, `${file} needs the custom header mark`);
  assert.match(html, /class="footer-mark" src="\.\/assets\/proofspedia-mark\.svg"/, `${file} needs the custom footer mark`);
}

const pngSizes = {
  "assets/favicon-32.png": [32, 32],
  "assets/apple-touch-icon.png": [180, 180],
  "assets/icon-192.png": [192, 192],
  "assets/icon-512.png": [512, 512],
  "assets/social-preview.png": [1200, 630]
};
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
for (const [file, [width, height]] of Object.entries(pngSizes)) {
  const png = fs.readFileSync(path.join(root, file));
  assert.ok(png.subarray(0, 8).equals(pngSignature), `${file} must be a PNG`);
  assert.equal(png.readUInt32BE(16), width, `${file} must be ${width} pixels wide`);
  assert.equal(png.readUInt32BE(20), height, `${file} must be ${height} pixels tall`);
}

const iconSignature = Buffer.from([0x00, 0x00, 0x01, 0x00]);
for (const file of ["favicon.ico", "assets/favicon.ico"]) {
  const icon = fs.readFileSync(path.join(root, file));
  assert.ok(icon.subarray(0, 4).equals(iconSignature), `${file} must be an ICO file`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "site.webmanifest"), "utf8"));
assert.equal(manifest.name, "Proofspedia");
for (const icon of manifest.icons) {
  assert.ok(fs.existsSync(path.join(root, icon.src.replace(/^\//, ""))), `missing manifest icon ${icon.src}`);
}

console.log(`Content check passed: ${proofs.length} folios, ${new Set(proofs.map(proof => proof.domain)).size} fields, two examples each, brand and social assets valid.`);
