# Proofspedia

A living, multi-page archive of elegant mathematical proofs.

The archive currently holds 40 folios across nine fields. Each folio has its own page with the theorem, a worked proof, intuition, variants, attribution, and two examples.

## Run locally

```sh
python3 -m http.server 8000
```

Open `index.html` for the home page, `proofs.html` for the archive, and `proof.html?id=primes-infinite` for an individual folio.

## Check the collection

```sh
npm test
```

## Brand assets

See `assets/README.md` for the palette and brand usage. The logo marks, horizontal wordmark, favicon, and device icons live in `assets/`. The 1200 by 630 social preview has an editable SVG source and is referenced by the Open Graph and Twitter metadata on every page.

## Add a folio

Add an entry to `data.js` with a unique `id` and `no`, a field, theorem, statement, origin, proof lead, proof steps, intuition, reason for keeping it, variants, and exactly two worked examples. Run `npm test` before publishing.
