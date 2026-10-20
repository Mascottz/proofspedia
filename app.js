(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const PAGE = window.PAGE || document.body.dataset.page || "archive";

  function domainSlug(d){ return d.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z-]/g,""); }
  function escapeHtml(s){ return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"); }
  function getParam(name){ return new URLSearchParams(location.search).get(name); }

  function shapePath(variant, w=400, h=520){
    if(variant===0) return `M 14 0 H ${w-14} Q ${w} 0 ${w} 14 V ${h-56} C ${w} ${h-48} ${w*0.86} ${h-6} ${w*0.72} ${h-22} C ${w*0.58} ${h-38} ${w*0.44} ${h-4} ${w*0.30} ${h-18} C ${w*0.16} ${h-32} 28 ${h-10} 12 ${h-28} C 4 ${h-36} 0 ${h-44} 0 ${h-56} V 14 Q 0 0 14 0 Z`;
    if(variant===1) return `M 14 0 H ${w-14} Q ${w} 0 ${w} 14 V ${h-68} Q ${w} ${h-60} ${w*0.92} ${h-42} Q ${w*0.84} ${h-22} ${w*0.74} ${h-38} Q ${w*0.64} ${h-54} ${w*0.54} ${h-30} Q ${w*0.44} ${h-6} ${w*0.34} ${h-32} Q ${w*0.24} ${h-58} ${w*0.14} ${h-34} Q ${w*0.06} ${h-16} 0 ${h-38} V 14 Q 0 0 14 0 Z`;
    return `M 14 0 H ${w-14} Q ${w} 0 ${w} 14 V 176 L ${w-8} 188 L ${w} 200 V ${h-50} C ${w} ${h-30} ${w*0.82} ${h-8} ${w*0.66} ${h-24} C ${w*0.50} ${h-40} ${w*0.32} ${h-6} ${w*0.14} ${h-26} C 40 ${h-40} 0 ${h-18} 0 ${h-50} V 14 Q 0 0 14 0 Z`;
  }

  function folioCardHTML(p, idx){
    const variant = idx % 3;
    return `
      <a href="./proof.html?id=${p.id}" class="folio" data-id="${p.id}" style="text-decoration:none; color:inherit">
        <svg class="folio-shape" viewBox="0 0 400 520" preserveAspectRatio="none" aria-hidden="true">
          <path d="${shapePath(variant)}"></path>
        </svg>
        <div class="folio-inner">
          <div class="folio-top">
            <div class="eyebrow"><em>${p.no}</em> <i></i> ${p.domain} <span style="opacity:0.6">; ${p.added}</span></div>
            <div class="no-tag">glow ${p.glow.toFixed(1)}</div>
          </div>
          <h3>${escapeHtml(p.title)}</h3>
          <p class="theorem">${escapeHtml(p.theorem)}</p>
          <p class="lead">${escapeHtml(p.proofLead)}</p>
          <div class="meta-row">
            <span>${escapeHtml(p.origin.slice(0,2).join(" ; "))}</span>
            <span class="dot"></span>
            <span>${escapeHtml(p.added)}</span>
          </div>
          <div class="open-hint">Open folio</div>
          <div class="glow-bar"></div>
        </div>
      </a>
    `;
  }

  // State for archive
  const state = { filter:"all", search:"", sort:"number", view:"grid" };

  function renderGrid(targetId, list, opts){
    const grid = $(targetId);
    if(!grid) return;
    grid.classList.toggle("list", state.view==="list");
    grid.innerHTML = "";
    if(list.length===0){
      const empty = $("#emptyState");
      if(empty) empty.style.display="block";
      return;
    }
    const empty = $("#emptyState");
    if(empty) empty.style.display="none";
    list.forEach((p, idx) => {
      const tmp = document.createElement("div");
      tmp.innerHTML = folioCardHTML(p, idx);
      grid.appendChild(tmp.firstElementChild);
    });
    if(opts && opts.showCount){
      const countLabel = $("#shelfCount");
      if(countLabel) countLabel.textContent = `${String(list.length).padStart(2,"0")} proofs ; ${state.filter==="all" ? "all chapters" : state.filter} ; sorted by ${state.sort}`;
    }
  }

  function getFilteredProofs(){
    let proofs = [...window.PROOFS];
    if(state.filter !== "all") proofs = proofs.filter(p => domainSlug(p.domain) === state.filter);
    if(state.search.trim()){
      const q = state.search.trim().toLowerCase();
      proofs = proofs.filter(p => p.title.toLowerCase().includes(q) || p.theorem.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q) || p.proofLead.toLowerCase().includes(q));
    }
    if(state.sort === "number") proofs.sort((a,b)=> a.no.localeCompare(b.no));
    else if(state.sort === "glow") proofs.sort((a,b)=> b.glow - a.glow);
    else if(state.sort === "recent") proofs.sort((a,b)=> String(b.added).localeCompare(String(a.added)));
    return proofs;
  }

  function setupArchive(){
    const search = $("#searchInput");
    if(!search) return;
    syncFilterButtons();
    function refresh(){ renderGrid("#folioGrid", getFilteredProofs(), {showCount:true}); }
    refresh();
    search.addEventListener("input", ()=>{ state.search = search.value; refresh(); });
    $$("[data-filter]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.filter = btn.dataset.filter;
        $$("[data-filter]").forEach(b=>b.classList.toggle("active", b===btn));
        refresh();
      });
    });
    $$("[data-sort]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.sort = btn.dataset.sort;
        $$("[data-sort]").forEach(b=>b.classList.toggle("active", b===btn));
        refresh();
      });
    });
    $$("[data-view]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.view = btn.dataset.view;
        $$("[data-view]").forEach(b=>b.classList.toggle("active", b===btn));
        refresh();
      });
    });
    $("#randomBtn")?.addEventListener("click", (e)=>{
      e.preventDefault();
      const list = getFilteredProofs();
      const pick = list[Math.floor(Math.random()*list.length)] || window.PROOFS[Math.floor(Math.random()*window.PROOFS.length)];
      location.href = "./proof.html?id="+pick.id;
    });
  }

  function setupHome(){
    if(PAGE!=="home") return;
    // featured: top glow 6
    const featured = [...window.PROOFS].sort((a,b)=>b.glow-a.glow).slice(0,6);
    renderGrid("#featuredGrid", featured, {showCount:false});
    // chapters
    const chapterCounts = {};
    window.PROOFS.forEach(p=>{ chapterCounts[p.domain] = (chapterCounts[p.domain]||0)+1; });
    const chapterGrid = $("#chapterGrid");
    if(chapterGrid){
      const ordered = ["Number Theory","Analysis","Geometry","Combinatorics","Graph Theory","Topology","Set Theory","Algebra","Probability"];
      ordered.forEach(name=>{
        const count = chapterCounts[name] || 0;
        if(count===0) return;
        const slug = domainSlug(name);
        const a = document.createElement("a");
        a.href = "./proofs.html?chapter="+slug;
        a.className="chapter-card";
        a.innerHTML = `<div><h3>${name}</h3><p>${count} folios</p></div><div style="display:flex; gap:8px; align-items:center"><b>${String(count).padStart(2,"0")}</b><i>→</i></div>`;
        chapterGrid.appendChild(a);
      });
    }
    const heroCount = $("#heroCount");
    if(heroCount) heroCount.textContent = `${window.PROOFS.length} proofs set`;
    // handle chapter param deep link from home? store?
    const params = new URLSearchParams(location.search);
    if(params.get("filter")) state.filter = params.get("filter");
  }

  function syncFilterButtons(){
    $$("[data-filter]").forEach(b=>b.classList.toggle("active", b.dataset.filter===state.filter));
  }

  function setupProofPage(){
    if(PAGE!=="proof") return;
    const id = getParam("id");
    const crumb = $("#proofCrumb");
    const article = $("#proofArticle");
    const moreGrid = $("#moreGrid");
    if(!id){
      article.innerHTML = `<div class="empty">No folio selected ; <a href="./proofs.html" style="color:var(--ox)">go to archive →</a></div>`;
      return;
    }
    const p = window.PROOFS.find(x=>x.id===id);
    if(!p){
      article.innerHTML = `<div class="empty">Folio not found.</div>`;
      return;
    }
    document.title = p.title + " ; Proofs from the Book";
    if(crumb) crumb.innerHTML = `<a href="./proofs.html" style="color:inherit; text-decoration:none; border-bottom:1px solid var(--line)">Archive →</a> <span style="margin:0 6px">;</span> ${p.no} ; ${p.domain} ; ${p.added} &nbsp; <span style="opacity:0.6">glow ${p.glow.toFixed(1)}</span>`;
    const idx = window.PROOFS.findIndex(x=>x.id===id);
    const prev = window.PROOFS[(idx-1+window.PROOFS.length)%window.PROOFS.length];
    const next = window.PROOFS[(idx+1)%window.PROOFS.length];
    article.innerHTML = `
      <div class="proof-layout">
        <div class="proof-main">
          <div class="proof-topbar"><span>${p.no} ; ${p.domain}</span><span>folio ${p.id}</span></div>
          <h1>${escapeHtml(p.title)}</h1>
          <p class="modal-theorem" style="margin:14px 0 0; padding:12px 14px; background:#FFFDF7; border-left:3px solid var(--gold); font-style:italic; color:var(--ink-soft); line-height:1.6">${escapeHtml(p.theorem)}</p>
          <p style="margin:14px 0 0; color:var(--ink-soft); line-height:1.6">${escapeHtml(p.proofLead)}</p>
          <ol class="proof-steps" style="margin:16px 0 0; padding:0; list-style:none; counter-reset:step">
            ${p.steps.map(s=>`<li style="counter-increment:step; padding:10px 0 10px 28px; position:relative; border-bottom:1px solid var(--line); font-size:15.5px; line-height:1.6; color:var(--ink-soft)"><span style="position:absolute; left:0; top:11px; width:18px; height:18px; display:grid; place-items:center; font-family:'JetBrains Mono', monospace; font-size:10px; color:var(--ox); border:1px solid var(--line-strong); background:#fff">${p.steps.indexOf(s)+1}</span>${escapeHtml(s)}</li>`).join("")}
          </ol>
          <div class="qed" style="margin:10px 0 0; text-align:right; font-family:'Instrument Serif', serif; font-size:18px; color:var(--ox)">∎</div>
          <div class="divider" style="padding:0; margin:18px 0 12px"><i></i><span></span><small>Intuition ; then why it stays</small><i></i></div>
          <p style="font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin:0">Intuition</p>
          <p style="margin:8px 0; font-size:15px; line-height:1.65; color:var(--ink-soft)">${escapeHtml(p.intuition)}</p>
          <p style="font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin:12px 0 0">Why it stays</p>
          <p style="margin:8px 0; font-size:15px; line-height:1.65; color:var(--ink-soft)">${escapeHtml(p.whyItLives)}</p>
          <p style="font-size:13px; color:var(--muted); margin-top:14px; font-style:italic">Variants ; ${escapeHtml(p.variants)}</p>
          ${(p.examples && p.examples.length) ? `
          <div class="divider" style="padding:0; margin:18px 0 12px"><i></i><span></span><small>Worked examples ; 2 broad cases</small><i></i></div>
          <div class="examples-wrap">
            ${p.examples.map((ex,i)=>`
              <div class="example-block">
                <div class="example-head"><span>Example ${String(i+1).padStart(2,"0")}</span> <em>${escapeHtml(ex.title)}</em></div>
                <p class="example-problem"><strong>Problem ;</strong> ${escapeHtml(ex.problem)}</p>
                <p class="example-solution"><strong>Solution ;</strong> ${escapeHtml(ex.solution)}</p>
              </div>
            `).join("")}
          </div>` : ""}
          <div class="nav-arrows">
            <a href="./proof.html?id=${prev.id}">← ${escapeHtml(prev.title)}</a>
            <a href="./proofs.html">Archive →</a>
            <a href="./proof.html?id=${next.id}">${escapeHtml(next.title)} →</a>
          </div>
        </div>
        <aside class="proof-side">
          <h3 style="margin:0; font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted)">Attribution</h3>
          <p style="font-weight:600; color:var(--ink); margin:8px 0">${escapeHtml(p.origin.join(" ; "))}</p>
          <h3 style="margin:16px 0 0; font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted)">References</h3>
          <div class="tag-list" style="display:flex; flex-wrap:wrap; gap:6px; margin-top:8px">${p.refs.map(r=>`<span class="tag" style="font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.06em; text-transform:uppercase; border:1px solid var(--line-strong); padding:5px 7px; background:#fff; color:var(--muted)">${escapeHtml(r)}</span>`).join("")}</div>
          <h3 style="margin:16px 0 0; font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted)">How to cite</h3>
          <p style="font-family:'JetBrains Mono', monospace; font-size:11px; line-height:1.5; color:var(--muted)">Proofs from the Book ; folio ${p.no} ; ${escapeHtml(p.title)} ; retrieved from this page ; include originator and original source when reusing.</p>
          <h3 style="margin:16px 0 0; font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted)">Keep it living</h3>
          <p style="font-size:14px">Spotted a cleaner lemma or missing name ; propose an edit and you will be recorded as contributor.</p>
          <a href="https://github.com/Mascottz/proofs/discussions" target="_blank" rel="noreferrer" style="font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink); border-bottom:1px solid var(--line-strong); text-decoration:none; padding-bottom:4px; display:inline-block; margin-top:8px">Propose revision →</a>
          <div style="margin-top:18px; display:flex; gap:8px">
            <a href="#" id="copyLink" style="font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink); border:1px solid var(--line-strong); padding:7px 10px; text-decoration:none">Copy link →</a>
            <a href="./proofs.html?chapter=${domainSlug(p.domain)}" style="font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink); border:1px solid var(--line-strong); padding:7px 10px; text-decoration:none">More in ${p.domain} →</a>
          </div>
        </aside>
      </div>
    `;
    const copyBtn = $("#copyLink");
    if(copyBtn) copyBtn.addEventListener("click", (e)=>{ e.preventDefault(); navigator.clipboard?.writeText(location.href); copyBtn.textContent="Copied →"; setTimeout(()=>copyBtn.textContent="Copy link →",1400); });

    // more in same domain
    if(moreGrid){
      const same = window.PROOFS.filter(x=>x.domain===p.domain && x.id!==p.id).slice(0,3);
      const toShow = same.length ? same : [...window.PROOFS].filter(x=>x.id!==p.id).sort(()=>0.5-Math.random()).slice(0,3);
      toShow.forEach((q,i)=>{
        const d=document.createElement("div");
        d.innerHTML = folioCardHTML(q,i);
        moreGrid.appendChild(d.firstElementChild);
      });
    }
  }

  function setupLedger(){
    if(PAGE!=="ledger") return;
    const tbody = $("#ledgerTableBody");
    if(!tbody) return;
    window.PROOFS.slice(0,12).forEach(p=>{
      const tr=document.createElement("tr");
      tr.innerHTML = `<td>${p.no} ; ${escapeHtml(p.title)}</td><td>${escapeHtml(p.domain)}</td><td>Set</td>`;
      tbody.appendChild(tr);
    });
    const extra = [["33 ; Van der Waerden 3-term","Combinatorics","Under review"],["34 ; Prime Number Theorem elementary","Number Theory","Proposed"]];
    extra.forEach(([a,b,c])=>{ const tr=document.createElement("tr"); tr.innerHTML=`<td>${a}</td><td>${b}</td><td>${c}</td>`; tbody.appendChild(tr); });
  }

  // init
  window.addEventListener("DOMContentLoaded", ()=>{
    // support deep chapter filter via query
    const params = new URLSearchParams(location.search);
    if(params.get("chapter")) state.filter = params.get("chapter");
    setupHome();
    setupArchive();
    setupProofPage();
    setupLedger();

    const d = $("#editionDate");
    if(d) d.textContent = "20 Oct 2026";

    const stage = $(".book-stage");
    const hero = $("#hero");
    if(stage && hero){
      hero.addEventListener("mousemove", (e)=>{
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - 0.5;
        const y = (e.clientY - r.top)/r.height - 0.5;
        stage.style.transform = `rotate(${-2.5 + x*1.2}deg) translate(${x*6}px, ${y*4}px)`;
      });
    }
  });
})();
