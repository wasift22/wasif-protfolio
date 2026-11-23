// ==========================
// 1. THEME (light ya dark)
// ==========================
const root = document.documentElement;
root.classList.add("js");

const themeBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
        themeBtn.textContent = theme === "dark" ? "☀" : "☾";
        themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
}

applyTheme(root.getAttribute("data-theme") || "light");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem("theme", next); } catch (e) { /* koi baat nahi */ }
    });
}

// ==========================
// 2. PHONE KA MENU
// ==========================
const menuBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open);
        menuBtn.textContent = open ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "☰";
        });
    });
}

// ==========================
// 3. JIS HISSE PAR HON, MENU MEIN WO NUMAYAN
// ==========================
const spySections = document.querySelectorAll("main section[id]");
const spyLinks = document.querySelectorAll(".nav a[href^='#']");

if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                spyLinks.forEach(function (link) {
                    link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
                });
            }
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    spySections.forEach(function (s) { spy.observe(s); });
}

// ==========================
// 4. SCROLL PAR NARMI SE NAZAR AANA
// ==========================
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const reveal = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                reveal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { reveal.observe(el); });
} else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
}

// ==========================
// 5. PROJECTS (projects.js se khud bante hain)
// ==========================
const CATEGORY_LABELS = {
    genai: "GenAI & NLP",
    data: "Data Engineering",
    ml: "Machine Learning",
    web: "Web"
};

const STATUS_LABELS = { live: "Live", building: "In progress", planned: "Planned" };
const STATUS_ORDER = { live: 0, building: 1, planned: 2 };

const grid = document.getElementById("projects-grid");
const filtersBox = document.getElementById("filters");

let activeCategory = "all";

function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
}

function visibleProjects() {
    return projects
        .filter(function (p) {
            return p.status !== "planned" || SHOW_PLANNED;
        })
        .sort(function (a, b) {
            return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
        });
}

function projectCard(p) {
    let links = "";

    if (p.live) {
        links += '<a class="btn btn-primary btn-sm" href="' + esc(p.live) + '" target="_blank" rel="noopener">Live Demo</a>';
    }
    if (p.code) {
        links += '<a class="btn btn-ghost btn-sm" href="' + esc(p.code) + '" target="_blank" rel="noopener">Code</a>';
    }
    if (p.case) {
        links += '<a class="btn btn-ghost btn-sm" href="' + esc(p.case) + '" target="_blank" rel="noopener">Case study</a>';
    }
    if (!links) {
        links = '<span class="soon">Details coming soon</span>';
    }

    const tags = p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");

    return `
    <article class="project">
        <div class="project-head">
            <span class="badge badge-${esc(p.status)}">${esc(STATUS_LABELS[p.status])}</span>
            <span class="project-year">${esc(p.year)}</span>
        </div>
        <h3>${esc(p.title)}</h3>
        <p class="draws">Draws on: ${esc(p.draws)}</p>
        <p>${esc(p.summary)}</p>
        <ul class="tags">${tags}</ul>
        <div class="project-links">${links}</div>
    </article>`;
}

function renderProjects() {
    if (!grid || typeof projects === "undefined") return;

    const all = visibleProjects();
    const list = all.filter(function (p) {
        return activeCategory === "all" || p.cats.indexOf(activeCategory) !== -1;
    });

    grid.innerHTML = list.map(projectCard).join("");
}

function renderFilters() {
    if (!filtersBox || typeof projects === "undefined") return;

    const all = visibleProjects();
    const present = Object.keys(CATEGORY_LABELS).filter(function (cat) {
        return all.some(function (p) { return p.cats.indexOf(cat) !== -1; });
    });

    // Sirf ek hi qism ho to filter ki zaroorat nahi
    if (present.length < 2) {
        filtersBox.hidden = true;
        return;
    }

    let html = '<button type="button" class="filter active" data-cat="all">All</button>';
    present.forEach(function (cat) {
        html += '<button type="button" class="filter" data-cat="' + cat + '">' + CATEGORY_LABELS[cat] + "</button>";
    });
    filtersBox.innerHTML = html;

    filtersBox.addEventListener("click", function (e) {
        const btn = e.target.closest(".filter");
        if (!btn) return;

        activeCategory = btn.dataset.cat;
        filtersBox.querySelectorAll(".filter").forEach(function (b) {
            b.classList.toggle("active", b === btn);
        });
        renderProjects();
    });
}

renderFilters();
renderProjects();

// ==========================
// 6. CONTACT FORM
// ==========================
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const button = form.querySelector("button[type='submit']");
        const status = document.getElementById("form-status");
        const label = button.textContent;

        button.disabled = true;
        button.textContent = "Sending...";
        status.className = "form-status";
        status.textContent = "";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });

            if (response.ok) {
                form.reset();
                status.classList.add("ok");
                status.textContent = "Thank you! Your message was sent. I will reply soon.";
            } else {
                throw new Error("Server error");
            }
        } catch (err) {
            status.classList.add("error");
            status.textContent = "Sorry, the message could not be sent. Please email me directly.";
        }

        button.disabled = false;
        button.textContent = label;
    });
}

// ==========================
// 7. UPAR JAANE KA BUTTON AUR SAAL
// ==========================
const topBtn = document.getElementById("to-top");

if (topBtn) {
    window.addEventListener("scroll", function () {
        topBtn.classList.toggle("show", window.scrollY > 500);
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}