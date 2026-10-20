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

const siteFiles = ["index.html", "proofs.html", "proof.html", "about.html", "ledger.html", "app.js", "style.css", "README.md"];
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
}

console.log(`Content check passed: ${proofs.length} folios, ${new Set(proofs.map(proof => proof.domain)).size} fields, two examples each.`);
