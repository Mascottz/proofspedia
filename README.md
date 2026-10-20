# proofs

proofs from the book ; a living archive of elegant proofs

the most elegant proof for each theorem ; kept on the page with its originator, statement, steps and intuition ; continually updated

32 proofs set across 9 chapters ; number theory, analysis, geometry, combinatorics, graph theory, topology, set theory, algebra, probability

multi page site ; home, archive, folio pages, about, ledger ; static, no framework ; deploys on vercel

## run

```
python3 -m http.server 8000
```

open `index.html` ; archive at `proofs.html` ; each folio at `proof.html?id=...`

## add a proof

edit `data.js` ; add entry to `PROOFS`

```
{
  id: "slug",
  no: "33",
  domain: "Algebra",
  title: "...",
  theorem: "...",
  origin: ["..."],
  steps: ["..."]
}
```

proposals via discussions ; set in next edition with credit
