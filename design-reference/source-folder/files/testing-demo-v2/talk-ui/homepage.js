const iconPaths = {
  search: [
    "M21 21l-4.35-4.35",
    "M10.8 18.2a7.4 7.4 0 1 0 0-14.8 7.4 7.4 0 0 0 0 14.8Z"
  ],
  bookmark: ["M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.2L6 21V4.8Z"],
  bell: [
    "M18 9.8a6 6 0 0 0-12 0c0 7-3 7.2-3 8.2h18c0-1-3-.9-3-8.2Z",
    "M9.8 21a2.4 2.4 0 0 0 4.4 0"
  ],
  theme: [
    "M12 3a9 9 0 1 0 9 9 6.6 6.6 0 0 1-9-9Z",
    "M12 3v18"
  ],
  info: ["M12 11v5", "M12 8h.01", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"],
  chevronRight: ["M9 18l6-6-6-6"],
  x: ["M18 6 6 18", "M6 6l12 12"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  calendar: [
    "M7 3v4",
    "M17 3v4",
    "M4.8 6h14.4A1.8 1.8 0 0 1 21 7.8v11.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.2V7.8A1.8 1.8 0 0 1 4.8 6Z",
    "M3 10h18"
  ],
  home: ["M3 11.4 12 4l9 7.4V21h-6v-6H9v6H3v-9.6Z"],
  people: ["M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2", "M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M21 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  content: ["M5 4h14v16H5z", "M8 8h8", "M8 12h8", "M8 16h5"],
  chat: ["M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"],
  bot: ["M12 3v3", "M6.8 7h10.4A2.8 2.8 0 0 1 20 9.8v5.4a2.8 2.8 0 0 1-2.8 2.8H6.8A2.8 2.8 0 0 1 4 15.2V9.8A2.8 2.8 0 0 1 6.8 7Z", "M8.5 12h.1", "M15.5 12h.1", "M9 15h6"],
  user: ["M20 21a8 8 0 1 0-16 0", "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"],
  play: ["M8 5v14l11-7-11-7Z"]
};

const navIconOrder = ["home", "people", "content", "chat", "user"];
const localImageCacheKey = Date.now().toString(36);
const defaultTheme = "light";

function assetUrl(src) {
  if (!src || !src.startsWith("./imgs/")) return src;
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${localImageCacheKey}`;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function icon(name, label) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2.2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", label ? "false" : "true");
  if (label) svg.setAttribute("aria-label", label);

  for (const d of iconPaths[name] || iconPaths.arrow) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    svg.append(path);
  }

  return svg;
}

function image(src, alt, className) {
  const img = document.createElement("img");
  img.src = assetUrl(src);
  img.alt = alt || "";
  img.className = className;
  img.loading = "lazy";
  return img;
}

function actionButton(label, iconName) {
  const button = createElement("button", "icon-action");
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.append(icon(iconName));
  return button;
}

function themeButton(label) {
  const button = actionButton(label, "theme");
  button.dataset.themeToggle = "true";
  return button;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  document.querySelector("#app").dataset.theme = theme;
}

function renderHeader(content) {
  const header = createElement("header", "home-header");

  const brandGroup = createElement("div", "brand-group");
  const mark = createElement("div", content.app.brandImage ? "brand-mark has-image" : "brand-mark", content.app.brandImage ? "" : content.app.brand.slice(0, 1));
  if (content.app.brandImage) {
    mark.style.setProperty("--brand-mark-image", `url("${assetUrl(content.app.brandImage)}")`);
    mark.setAttribute("role", "img");
    mark.setAttribute("aria-label", content.app.brand);
  }
  brandGroup.append(mark);

  const actions = createElement("div", "header-actions");
  actions.append(
    actionButton(content.actions.search, "search"),
    themeButton(content.actions.theme),
    actionButton(content.actions.alerts, "bell")
  );

  header.append(brandGroup, actions);
  return header;
}

function renderIntro(content) {
  const section = createElement("section", "intro-block");
  section.append(renderSentimentCard(content.app.sentiment));
  return section;
}

function renderSentimentCard(sentiment) {
  const card = createElement("article", "sentiment-card");

  const header = createElement("div", "sentiment-header");
  const titleWrap = createElement("div", "sentiment-title-wrap");
  titleWrap.append(createElement("h2", "sentiment-title", sentiment.title));

  const link = createElement("button", "sentiment-link");
  link.type = "button";
  link.append(icon("info"), createElement("span", "", sentiment.link));
  header.append(titleWrap, link);

  const body = createElement("div", "sentiment-body");

  sentiment.metrics.forEach((metric) => {
    const item = createElement("div", "sentiment-metric");
    item.append(createElement("span", "sentiment-metric-label", metric.label));
    item.append(createElement("strong", "sentiment-metric-value", metric.value));
    body.append(item);
  });

  const chevron = createElement("span", "sentiment-chevron");
  chevron.append(icon("chevronRight"));
  body.append(chevron);

  card.append(header, body, createElement("span", "sentiment-summary", sentiment.summary));
  return card;
}

function renderHero(content) {
  const section = createElement("section", "hero-carousel");
  section.setAttribute("aria-label", content.hero.ariaLabel);

  const track = createElement("div", "hero-track");
  content.hero.slides.forEach((slide, index) => {
    const card = createElement("article", `hero-card hero-card-${index + 1}`);
    card.style.setProperty("--enter-index", index);
    card.style.setProperty("--hero-bg", `url("${assetUrl(slide.image)}")`);
    if (index === 0 && content.hero.articleSheet) {
      card.dataset.articleSheetTrigger = "true";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-haspopup", "dialog");
      card.setAttribute("aria-label", `${slide.title}，${content.hero.articleSheet.openLabel}`);
    }

    const copy = createElement("div", "hero-copy");
    copy.append(createElement("span", "eyebrow", slide.eyebrow));
    copy.append(createElement("h2", "hero-title", slide.title));
    copy.append(createElement("p", "hero-body", slide.body));

    const cta = createElement("button", "primary-button");
    cta.type = "button";
    cta.append(createElement("span", "", slide.cta), icon("arrow"));
    copy.append(cta);

    card.append(copy);
    track.append(card);
  });

  const dots = createElement("div", "carousel-dots");
  content.hero.slides.forEach((slide, index) => {
    const dot = createElement("button", index === 0 ? "dot is-active" : "dot");
    dot.type = "button";
    dot.setAttribute("aria-label", slide.title);
    dot.setAttribute("aria-current", index === 0 ? "true" : "false");
    dots.append(dot);
  });

  section.append(track, dots);
  return section;
}

function renderArticleSheet(content) {
  const article = content.hero.articleSheet;
  const backdrop = createElement("div", "article-sheet-backdrop");
  backdrop.hidden = true;
  backdrop.dataset.articleSheet = "true";

  const sheet = createElement("section", "article-sheet");
  sheet.setAttribute("role", "dialog");
  sheet.setAttribute("aria-modal", "true");
  sheet.setAttribute("aria-labelledby", "article-sheet-title");
  sheet.tabIndex = -1;

  const handle = createElement("span", "sheet-handle");
  const header = createElement("header", "article-sheet-header");
  const titleGroup = createElement("div", "article-sheet-title-group");
  titleGroup.append(createElement("span", "eyebrow", article.eyebrow));
  const title = createElement("h2", "article-sheet-title", article.title);
  title.id = "article-sheet-title";
  titleGroup.append(title, createElement("span", "article-sheet-source", article.source));

  const close = createElement("button", "sheet-close");
  close.type = "button";
  close.dataset.sheetClose = "true";
  close.setAttribute("aria-label", article.closeLabel);
  close.append(icon("x"));
  header.append(titleGroup, close);

  const media = createElement("figure", "article-sheet-media");
  media.append(image(article.image, article.alt, "article-sheet-image"));

  const summaryCard = createElement("section", "article-sheet-summary-card");
  summaryCard.append(createElement("p", "article-sheet-summary", article.summary));
  const points = createElement("div", "article-sheet-points");
  article.points.forEach((point) => {
    const item = createElement("article", "article-sheet-point");
    item.append(createElement("strong", "article-point-label", point.label));
    item.append(createElement("p", "article-point-text", point.text));
    points.append(item);
  });

  const actions = createElement("div", "article-sheet-actions");
  const cta = createElement("button", "primary-button");
  cta.type = "button";
  cta.append(createElement("span", "", article.cta), icon("bookmark"));
  actions.append(cta);

  sheet.append(handle, header, media, summaryCard, points, actions);
  backdrop.append(sheet);
  return backdrop;
}

function bindArticleSheet(root) {
  const backdrop = root.querySelector("[data-article-sheet]");
  const sheet = backdrop?.querySelector(".article-sheet");
  const closeButtons = Array.from(backdrop?.querySelectorAll("[data-sheet-close]") || []);
  const triggers = Array.from(root.querySelectorAll("[data-article-sheet-trigger]"));
  if (!backdrop || !sheet || triggers.length === 0) return;

  const openSheet = () => {
    backdrop.hidden = false;
    root.classList.add("is-sheet-open");
    requestAnimationFrame(() => {
      backdrop.classList.add("is-open");
      sheet.focus({ preventScroll: true });
    });
  };

  const closeSheet = () => {
    backdrop.classList.remove("is-open");
    root.classList.remove("is-sheet-open");
    sheet.addEventListener("transitionend", () => {
      if (!backdrop.classList.contains("is-open")) backdrop.hidden = true;
    }, { once: true });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", openSheet);
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openSheet();
    });
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeSheet));
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeSheet();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !backdrop.hidden) closeSheet();
  });
}

function bindHeroCarousel(root) {
  const track = root.querySelector(".hero-track");
  const cards = Array.from(root.querySelectorAll(".hero-card"));
  const dots = Array.from(root.querySelectorAll(".carousel-dots .dot"));
  if (!track || cards.length === 0 || dots.length === 0) return;

  const setActive = (activeIndex) => {
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const updateActive = () => {
    const trackRect = track.getBoundingClientRect();
    const trackStyle = getComputedStyle(track);
    const trackInset = Number.parseFloat(trackStyle.paddingInlineStart || trackStyle.paddingLeft) || 0;
    const anchor = trackRect.left + trackInset;
    let activeIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - anchor);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeIndex = index;
      }
    });

    setActive(activeIndex);
  };

  let animationFrame = 0;
  const requestUpdate = () => {
    if (animationFrame) return;
    animationFrame = requestAnimationFrame(() => {
      animationFrame = 0;
      updateActive();
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setActive(index);
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    });
  });

  track.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateActive();
}

function renderMacro(content) {
  const section = createElement("section", "section macro-section");
  const heading = createElement("div", "section-heading");
  const titleGroup = createElement("div");
  titleGroup.append(createElement("span", "eyebrow", content.macro.subtitle));
  titleGroup.append(createElement("h2", "section-title", content.macro.title));
  heading.append(titleGroup, createElement("span", "updated-label", content.macro.updatedAt));

  const grid = createElement("div", "macro-grid");
  content.macro.items.forEach((item) => {
    const card = createElement("article", `macro-card tone-${item.tone}`);
    card.append(createElement("span", "macro-label", item.label));
    card.append(createElement("strong", "macro-value", item.value));
    card.append(createElement("span", "macro-meta", item.meta));
    grid.append(card);
  });

  const insight = createElement("article", "insight-card");
  const iconWrap = createElement("div", content.macro.insightIconImage ? "insight-icon has-image" : "insight-icon");
  iconWrap.append(content.macro.insightIconImage ? image(content.macro.insightIconImage, "", "insight-icon-image") : icon("calendar"));
  const insightCopy = createElement("div");
  const insightBody = createElement("div", "insight-copy-row");
  const insightAction = createElement("button", "insight-action");
  insightAction.type = "button";
  insightAction.setAttribute("aria-label", content.macro.insightActionLabel);
  insightAction.append(icon("arrow"));
  insightCopy.append(createElement("strong", "insight-title", content.macro.insightTitle));
  insightBody.append(createElement("p", "insight-copy", content.macro.insight), insightAction);
  insightCopy.append(insightBody);
  insight.append(iconWrap, insightCopy);

  section.append(heading, grid, insight);
  return section;
}

function renderTradeRail(content) {
  const rail = createElement("div", "trade-rail");

  const track = createElement("div", "trade-track");
  content.feed.trades.items.forEach((item, index) => {
    const card = createElement("article", `trade-card is-${item.type}`);
    card.style.setProperty("--enter-index", index + 4);

    const top = createElement("div", "trade-topline");
    top.append(createElement("span", "trade-badge", item.action));
    top.append(createElement("span", "trade-date", item.date));

    const symbolRow = createElement("div", "trade-symbol-row");
    symbolRow.append(createElement("strong", "trade-ticker", item.ticker));
    symbolRow.append(createElement("span", "trade-company", item.company));

    card.append(
      top,
      symbolRow,
      createElement("span", "trade-position", item.position),
      createElement("p", "trade-reason", item.reason)
    );
    track.append(card);
  });

  rail.append(track);
  return rail;
}

function renderFeed(content) {
  const section = createElement("section", "section feed-section");
  const heading = createElement("div", "section-heading");
  const titleGroup = createElement("div");
  titleGroup.append(createElement("span", "eyebrow", content.feed.subtitle));
  titleGroup.append(createElement("h2", "section-title", content.feed.title));
  heading.append(titleGroup);

  const list = createElement("div", "feed-list");
  content.feed.items.forEach((item, index) => {
    const card = createElement("article", "feed-card");
    card.style.setProperty("--enter-index", index + 4);

    const header = createElement("div", "feed-author");
    header.append(image(item.avatar, "", "author-avatar"));
    const authorCopy = createElement("div", "author-copy");
    authorCopy.append(createElement("strong", "author-name", item.author));
    authorCopy.append(createElement("span", "author-meta", `${item.role} · ${item.time}`));
    const save = actionButton(content.actions.bookmark, "bookmark");
    header.append(authorCopy, save);

    const body = createElement("div", "feed-body");
    const text = createElement("div", "feed-text");
    text.append(createElement("h3", "feed-title", item.title));
    text.append(createElement("p", "feed-summary", item.summary));

    const tags = createElement("div", "tag-row");
    item.tags.forEach((tag) => tags.append(createElement("span", "tag", tag)));
    text.append(tags);

    const thumbWrap = createElement("div", "feed-thumb");
    thumbWrap.append(image(item.image, item.alt, "feed-image"));
    body.append(text, thumbWrap);

    card.append(header, body);
    list.append(card);
  });

  section.append(heading, renderTradeRail(content), list);
  return section;
}

function renderShortcuts(content) {
  const section = createElement("section", "section shortcut-section");
  const grid = createElement("div", "shortcut-grid");

  content.shortcuts.items.forEach((item, index) => {
    const card = createElement("button", "shortcut-card");
    card.type = "button";
    card.style.setProperty("--enter-index", index);
    const iconWrap = createElement("span", item.iconImage ? "shortcut-icon has-image" : "shortcut-icon");
    iconWrap.append(item.iconImage ? image(item.iconImage, "", "shortcut-icon-image") : icon(navIconOrder[index + 1] || "arrow"));
    card.append(iconWrap, createElement("strong", "shortcut-label", item.label));
    grid.append(card);
  });

  section.append(grid);
  return section;
}

function renderNav(content) {
  const nav = createElement("nav", "bottom-nav");
  content.nav.forEach((item, index) => {
    const button = createElement("button", item.active ? "nav-item is-active" : "nav-item");
    button.type = "button";
    button.append(icon(navIconOrder[index]), createElement("span", "", item.label));
    nav.append(button);
  });
  return nav;
}

async function init() {
  const response = await fetch("./i18n/zh-TW.json", { cache: "no-store" });
  const content = await response.json();
  const app = document.querySelector("#app");
  const storedTheme = localStorage.getItem("talk-ui-theme");
  const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : defaultTheme;
  applyTheme(initialTheme);
  app.style.setProperty("--app-bg-image", `url("${assetUrl(content.app.backgroundImage)}")`);
  app.append(
    renderHeader(content),
    renderIntro(content),
    renderShortcuts(content),
    renderHero(content),
    renderMacro(content),
    renderFeed(content),
    renderArticleSheet(content),
    renderNav(content)
  );
  bindHeroCarousel(app);
  bindArticleSheet(app);

  const themeToggle = app.querySelector("[data-theme-toggle]");
  themeToggle.setAttribute("aria-pressed", String(app.dataset.theme === "dark"));
  themeToggle.addEventListener("click", () => {
    const nextTheme = app.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
    localStorage.setItem("talk-ui-theme", nextTheme);
  });
}

init();
