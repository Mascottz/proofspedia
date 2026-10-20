(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const proofs = Array.isArray(window.PROOFS) ? window.PROOFS : [];
  const page = document.body.dataset.page || "archive";
  const domainOrder = [
    "Number Theory", "Analysis", "Geometry", "Combinatorics", "Graph Theory",
    "Topology", "Set Theory", "Algebra", "Probability"
  ];
  const sortLabels = {
    number: "folio number",
    glow: "editor's selection",
    recent: "date added"
  };

  function domainSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "");
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function proofUrl(proof) {
    return `./proof.html?id=${encodeURIComponent(proof.id)}`;
  }

  function cardShape(variant) {
    const paths = [
      "M16 1 H384 Q399 1 399 16 V429 C361 425 342 451 301 439 C253 425 225 450 184 437 C132 420 101 449 61 438 C35 431 15 439 1 427 V16 Q1 1 16 1 Z",
      "M16 1 H384 Q399 1 399 16 V427 C369 440 345 421 311 435 C274 450 243 427 204 440 C159 454 129 427 91 439 C54 451 23 437 1 424 V16 Q1 1 16 1 Z",
      "M16 1 H384 Q399 1 399 16 V162 L391 174 L399 186 V427 C359 418 331 446 292 435 C247 422 211 451 169 437 C126 422 91 451 55 438 C31 430 14 436 1 426 V16 Q1 1 16 1 Z"
    ];
    return paths[variant % paths.length];
  }

  function folioCardHtml(proof, index) {
    const authors = proof.origin.slice(0, 2).join(" · ");
    return `
      <a class="folio" href="${proofUrl(proof)}" aria-label="Open folio ${escapeHtml(proof.no)}, ${escapeHtml(proof.title)}">
        <svg class="folio-outline" viewBox="0 0 400 460" preserveAspectRatio="none" aria-hidden="true">
          <path d="${cardShape(index)}"></path>
        </svg>
        <div class="folio-content">
          <div class="folio-heading-line">
            <span class="folio-number">${escapeHtml(proof.no)}</span>
            <span class="folio-field">${escapeHtml(proof.domain)}</span>
            <span class="folio-index-mark" aria-hidden="true">∴</span>
          </div>
          <h3>${escapeHtml(proof.title)}</h3>
          <p class="folio-theorem">${escapeHtml(proof.theorem)}</p>
          <p class="folio-lead">${escapeHtml(proof.proofLead)}</p>
          <div class="folio-footer">
            <span class="folio-attribution">${escapeHtml(authors)}</span>
            <span class="folio-open">Open folio <span aria-hidden="true">→</span></span>
          </div>
        </div>
      </a>
    `;
  }

  function renderCards(target, entries) {
    if (!target) return;
    target.innerHTML = entries.map((proof, index) => folioCardHtml(proof, index)).join("");
  }

  const archiveState = {
    filter: "all",
    search: "",
    sort: "number",
    view: "grid"
  };

  function countByDomain() {
    return proofs.reduce((counts, proof) => {
      counts[proof.domain] = (counts[proof.domain] || 0) + 1;
      return counts;
    }, {});
  }

  function latestSetting() {
    const dated = proofs.filter(proof => /^\d{4}\.\d{2}\.\d{2}$/.test(proof.added));
    if (!dated.length) return null;
    const latestDate = dated.reduce((latest, proof) => proof.added > latest ? proof.added : latest, dated[0].added);
    const entries = dated.filter(proof => proof.added === latestDate).sort((a, b) => Number(a.no) - Number(b.no));
    return { date: latestDate, entries };
  }

  function formatSettingDate(value) {
    if (!value) return "";
    const [year, month, day] = value.split(".").map(Number);
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
      .format(new Date(Date.UTC(year, month - 1, day)));
  }

  function updateSettingDetails() {
    const setting = latestSetting();
    if (!setting) return;
    const dateText = formatSettingDate(setting.date);
    ["#settingDate", "#ledgerSettingDate"].forEach(selector => {
      const time = $(selector);
      if (time) {
        time.dateTime = setting.date.replaceAll(".", "-");
        time.textContent = dateText;
      }
    });
    ["#settingAddedCount", "#ledgerAddedCount"].forEach(selector => {
      const node = $(selector);
      if (node) node.textContent = String(setting.entries.length);
    });
    const first = setting.entries[0]?.no;
    const last = setting.entries[setting.entries.length - 1]?.no;
    [
      [["#settingFirstNo", "#ledgerFirstNo"], first],
      [["#settingLastNo", "#ledgerLastNo"], last]
    ].forEach(([selectors, value]) => selectors.forEach(selector => {
      const node = $(selector);
      if (node && value) node.textContent = value;
    }));
  }

  function buildFilters() {
    const list = $("#filterList");
    if (!list) return;
    const counts = countByDomain();
    const names = [...domainOrder.filter(name => counts[name])];
    Object.keys(counts).forEach(name => {
      if (!names.includes(name)) names.push(name);
    });
    list.replaceChildren();

    const addFilter = (name, slug, count) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      const countLabel = document.createElement("span");
      button.type = "button";
      button.dataset.filter = slug;
      button.setAttribute("aria-pressed", String(archiveState.filter === slug));
      button.classList.toggle("active", archiveState.filter === slug);
      button.append(document.createTextNode(name));
      countLabel.className = "filter-count";
      countLabel.textContent = String(count).padStart(2, "0");
      button.append(countLabel);
      item.append(button);
      list.append(item);
    };

    addFilter("All fields", "all", proofs.length);
    names.forEach(name => addFilter(name, domainSlug(name), counts[name]));
  }

  function getVisibleProofs() {
    let visible = [...proofs];
    if (archiveState.filter !== "all") {
      visible = visible.filter(proof => domainSlug(proof.domain) === archiveState.filter);
    }
    if (archiveState.search.trim()) {
      const query = archiveState.search.trim().toLocaleLowerCase();
      visible = visible.filter(proof => {
        const searchable = [
          proof.title, proof.theorem, proof.statement, proof.domain, proof.proofLead,
          proof.intuition, proof.whyItLives, proof.variants, ...(proof.origin || []),
          ...(proof.steps || []), ...(proof.examples || []).flatMap(example => [example.title, example.problem, example.solution])
        ].join(" ").toLocaleLowerCase();
        return searchable.includes(query);
      });
    }
    if (archiveState.sort === "number") {
      visible.sort((a, b) => Number(a.no) - Number(b.no));
    } else if (archiveState.sort === "glow") {
      visible.sort((a, b) => b.glow - a.glow || Number(a.no) - Number(b.no));
    } else {
      visible.sort((a, b) => String(b.added).localeCompare(String(a.added)) || Number(b.no) - Number(a.no));
    }
    return visible;
  }

  function refreshArchive() {
    const grid = $("#folioGrid");
    const emptyState = $("#emptyState");
    const count = $("#shelfCount");
    const visible = getVisibleProofs();
    if (grid) {
      grid.classList.toggle("is-list", archiveState.view === "list");
      renderCards(grid, visible);
    }
    if (emptyState) emptyState.hidden = visible.length > 0;
    if (count) {
      const field = archiveState.filter === "all"
        ? "all fields"
        : (proofs.find(proof => domainSlug(proof.domain) === archiveState.filter)?.domain || "selected field");
      count.textContent = `${visible.length} ${visible.length === 1 ? "folio" : "folios"} in ${field}, sorted by ${sortLabels[archiveState.sort]}`;
    }
  }

  function setupArchive() {
    const search = $("#searchInput");
    if (!search) return;
    const params = new URLSearchParams(location.search);
    const requestedField = params.get("chapter");
    if (requestedField && proofs.some(proof => domainSlug(proof.domain) === requestedField)) {
      archiveState.filter = requestedField;
    }
    buildFilters();
    refreshArchive();

    search.addEventListener("input", () => {
      archiveState.search = search.value;
      refreshArchive();
    });

    $("#filterList")?.addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      archiveState.filter = button.dataset.filter;
      $$("[data-filter]").forEach(item => {
        const active = item.dataset.filter === archiveState.filter;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      refreshArchive();
    });

    $$('[data-sort]').forEach(button => {
      button.addEventListener("click", () => {
        archiveState.sort = button.dataset.sort;
        $$('[data-sort]').forEach(item => item.setAttribute("aria-pressed", String(item === button)));
        refreshArchive();
      });
    });

    $$('[data-view]').forEach(button => {
      button.addEventListener("click", () => {
        archiveState.view = button.dataset.view;
        $$('[data-view]').forEach(item => item.setAttribute("aria-pressed", String(item === button)));
        refreshArchive();
      });
    });

    $("#randomBtn")?.addEventListener("click", event => {
      event.preventDefault();
      const choices = getVisibleProofs();
      if (!choices.length) return;
      const choice = choices[Math.floor(Math.random() * choices.length)];
      location.href = proofUrl(choice);
    });
  }

  function setupHome() {
    const counts = countByDomain();
    const proofCount = $("#homeProofCount");
    const domainCount = $("#homeDomainCount");
    const editionProofCount = $("#editionProofCount");
    const editionDomainCount = $("#editionDomainCount");
    if (proofCount) proofCount.textContent = String(proofs.length).padStart(2, "0");
    if (domainCount) domainCount.textContent = String(Object.keys(counts).length).padStart(2, "0");
    if (editionProofCount) editionProofCount.textContent = String(proofs.length);
    if (editionDomainCount) editionDomainCount.textContent = String(Object.keys(counts).length);
    updateSettingDetails();

    const featuredIds = [
      "primes-infinite", "basel-problem", "sylvester-gallai",
      "cayley-formula", "borsuk-ulam", "reciprocal-primes-diverge"
    ];
    const featured = featuredIds.map(id => proofs.find(proof => proof.id === id)).filter(Boolean);
    renderCards($("#featuredGrid"), featured);

    const chapters = $("#chapterGrid");
    if (!chapters) return;
    chapters.replaceChildren();
    const ordered = [...domainOrder.filter(name => counts[name])];
    Object.keys(counts).forEach(name => {
      if (!ordered.includes(name)) ordered.push(name);
    });
    ordered.forEach((name, index) => {
      const link = document.createElement("a");
      link.className = "chapter-row";
      link.href = `./proofs.html?chapter=${encodeURIComponent(domainSlug(name))}`;
      link.innerHTML = `<span class="chapter-index">${String(index + 1).padStart(2, "0")}</span><span class="chapter-name">${escapeHtml(name)}</span><span class="chapter-count">${String(counts[name]).padStart(2, "0")} folios</span><span class="chapter-arrow" aria-hidden="true">→</span>`;
      chapters.append(link);
    });
  }

  function proofPageHtml(proof, previous, next) {
    const steps = proof.steps.map((step, index) => `
      <li><span class="step-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(step)}</p></li>
    `).join("");
    const examples = proof.examples.map((example, index) => `
      <article class="example-entry">
        <div class="example-number">Example ${String(index + 1).padStart(2, "0")}</div>
        <div class="example-content">
          <h3>${escapeHtml(example.title)}</h3>
          <p class="example-problem"><strong>Problem</strong>${escapeHtml(example.problem)}</p>
          <p class="example-solution"><strong>Solution</strong>${escapeHtml(example.solution)}</p>
        </div>
      </article>
    `).join("");
    const origins = proof.origin.map(origin => `<li>${escapeHtml(origin)}</li>`).join("");

    return `
      <div class="proof-layout">
        <div class="proof-main">
          <div class="proof-topline">
            <p class="eyebrow"><span class="eyebrow-line"></span>Folio ${escapeHtml(proof.no)} / ${escapeHtml(proof.domain)}</p>
            <button class="copy-link" id="copyLink" type="button">Copy link <span aria-hidden="true">↗</span></button>
          </div>
          <h1>${escapeHtml(proof.title)}</h1>
          <section class="theorem-block" aria-labelledby="theorem-title">
            <h2 id="theorem-title" class="micro-heading">Theorem</h2>
            <p class="theorem-text">${escapeHtml(proof.theorem)}</p>
            ${proof.statement && proof.statement !== proof.theorem ? `<p class="statement-note">${escapeHtml(proof.statement)}</p>` : ""}
          </section>
          <p class="proof-lead">${escapeHtml(proof.proofLead)}</p>
          <section class="proof-section" aria-labelledby="proof-title">
            <div class="proof-section-heading"><p class="eyebrow"><span class="eyebrow-line"></span>01 / Argument</p><h2 id="proof-title">The <em>proof</em></h2></div>
            <ol class="proof-steps">${steps}</ol>
            <div class="proof-end" aria-label="End of proof">∎</div>
          </section>
          <section class="reflection-section" aria-label="Notes on the proof">
            <div class="reflection-entry"><h2>Intuition</h2><p>${escapeHtml(proof.intuition)}</p></div>
            <div class="reflection-entry"><h2>Why it stays</h2><p>${escapeHtml(proof.whyItLives)}</p></div>
            <div class="reflection-entry reflection-variant"><h2>Variants</h2><p>${escapeHtml(proof.variants)}</p></div>
          </section>
          <section class="examples-section" aria-labelledby="examples-title">
            <div class="proof-section-heading"><p class="eyebrow"><span class="eyebrow-line"></span>02 / Apply the idea</p><h2 id="examples-title">Worked <em>examples</em></h2></div>
            <div class="examples-list">${examples}</div>
          </section>
          <nav class="folio-pagination" aria-label="Folio navigation">
            <a href="${proofUrl(previous)}"><span aria-hidden="true">←</span><span><small>Previous folio</small>${escapeHtml(previous.title)}</span></a>
            <a class="pagination-archive" href="./proofs.html">Archive</a>
            <a class="pagination-next" href="${proofUrl(next)}"><span><small>Next folio</small>${escapeHtml(next.title)}</span><span aria-hidden="true">→</span></a>
          </nav>
        </div>
        <aside class="proof-sidebar" aria-label="Folio details">
          <div class="sidebar-section">
            <h2 class="micro-heading">Attribution</h2>
            <ul class="origin-list">${origins}</ul>
          </div>
          <div class="sidebar-section">
            <h2 class="micro-heading">Field</h2>
            <a class="field-link" href="./proofs.html?chapter=${encodeURIComponent(domainSlug(proof.domain))}">${escapeHtml(proof.domain)} <span aria-hidden="true">→</span></a>
          </div>
          <div class="sidebar-note">
            <span class="sidebar-symbol" aria-hidden="true">∴</span>
            <p>This folio is part of a growing, carefully edited archive.</p>
            <a href="https://github.com/Mascottz/proofspedia" target="_blank" rel="noreferrer">Suggest an edit <span aria-hidden="true">↗</span></a>
          </div>
        </aside>
      </div>
    `;
  }

  function setupProofPage() {
    const article = $("#proofArticle");
    if (!article) return;
    const id = new URLSearchParams(location.search).get("id");
    const proof = proofs.find(item => item.id === id);
    if (!proof) {
      article.innerHTML = `
        <div class="not-found">
          <p class="eyebrow"><span class="eyebrow-line"></span>No folio selected</p>
          <h1>This page is <em>unwritten.</em></h1>
          <p>Choose a proof from the archive to begin reading.</p>
          <a class="action-primary" href="./proofs.html">Browse the archive <span aria-hidden="true">→</span></a>
        </div>
      `;
      return;
    }

    const index = proofs.findIndex(item => item.id === id);
    const previous = proofs[(index - 1 + proofs.length) % proofs.length];
    const next = proofs[(index + 1) % proofs.length];
    document.title = `${proof.title} | Proofspedia`;
    const description = $("meta[name='description']");
    if (description) description.content = `${proof.title}: ${proof.theorem}`;
    const crumb = $("#proofCrumb");
    if (crumb) {
      crumb.innerHTML = `<a href="./proofs.html">Archive</a><span aria-hidden="true">/</span><a href="./proofs.html?chapter=${encodeURIComponent(domainSlug(proof.domain))}">${escapeHtml(proof.domain)}</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(proof.no)} ${escapeHtml(proof.title)}</span>`;
    }
    article.innerHTML = proofPageHtml(proof, previous, next);

    $("#copyLink")?.addEventListener("click", async event => {
      const button = event.currentTarget;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(location.href);
        } else {
          const field = document.createElement("textarea");
          field.value = location.href;
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.append(field);
          field.select();
          document.execCommand("copy");
          field.remove();
        }
        button.innerHTML = "Link copied <span aria-hidden=\"true\">✓</span>";
        window.setTimeout(() => { button.innerHTML = 'Copy link <span aria-hidden="true">↗</span>'; }, 1400);
      } catch {
        button.textContent = "Copy from address bar";
      }
    });

    const sameField = proofs.filter(item => item.domain === proof.domain && item.id !== proof.id).slice(0, 3);
    const related = sameField.length ? sameField : proofs.filter(item => item.id !== proof.id).slice(0, 3);
    renderCards($("#moreGrid"), related);
  }

  function setupLedger() {
    const tableBody = $("#ledgerTableBody");
    if (!tableBody) return;
    updateSettingDetails();
    tableBody.replaceChildren();
    proofs.forEach(proof => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="register-number">${escapeHtml(proof.no)}</td>
        <td><a class="register-link" href="${proofUrl(proof)}">${escapeHtml(proof.title)}</a></td>
        <td>${escapeHtml(proof.domain)}</td>
        <td class="register-status">Set</td>
      `;
      tableBody.append(row);
    });
    const domainCount = Object.keys(countByDomain()).length;
    const proofStat = $('[data-stat="proofs"]');
    const domainStat = $('[data-stat="domains"]');
    const registerCount = $("#registerCount");
    if (proofStat) proofStat.textContent = String(proofs.length).padStart(2, "0");
    if (domainStat) domainStat.textContent = String(domainCount).padStart(2, "0");
    if (registerCount) registerCount.textContent = `${proofs.length} folios`;
  }

  function init() {
    if (page === "home") setupHome();
    if (page === "archive") setupArchive();
    if (page === "proof") setupProofPage();
    if (page === "ledger") setupLedger();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
