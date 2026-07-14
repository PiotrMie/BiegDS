const siteConfig = window.BDS_CONFIG || {};
const registrationUrl = siteConfig.registrationUrl || "https://plus-timing.pl/zgloszenia/polmaraton-dolina-samy-kazmierz-2026/";

function getValue(path, fallback = "") {
  return path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), siteConfig) ?? fallback;
}

function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text !== undefined) element.textContent = options.text;
  if (options.html !== undefined) element.innerHTML = options.html;
  if (options.href) element.href = options.href;
  if (options.src) element.src = options.src;
  if (options.alt) element.alt = options.alt;
  return element;
}

function applyContent() {
  document.title = getValue("meta.title", document.title);
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = getValue("meta.description", metaDescription.content);

  document.querySelectorAll("[data-content]").forEach((element) => {
    element.textContent = getValue(element.dataset.content, element.textContent);
  });

  document.querySelectorAll("[data-html]").forEach((element) => {
    element.innerHTML = getValue(element.dataset.html, element.innerHTML);
  });

  document.querySelectorAll("[data-image]").forEach((image) => {
    const src = getValue(`images.${image.dataset.image}`);
    if (src) image.src = src;
  });

  const headerLogo = getValue("images.headerLogo");
  document.querySelectorAll(".brand-logo").forEach((image) => {
    if (headerLogo) image.src = headerLogo;
    image.alt = getValue("meta.title", image.alt);
  });

  const heroPoster = document.querySelector(".hero-poster");
  if (heroPoster) heroPoster.alt = getValue("hero.imageAlt", heroPoster.alt);

  const lastEdition = document.querySelector('[data-image="lastEdition"]');
  if (lastEdition) lastEdition.alt = getValue("intro.imageAlt", lastEdition.alt);

  const shirt = document.querySelector('[data-image="shirt"]');
  if (shirt) shirt.alt = getValue("kit.imageAlt", shirt.alt);
}

function renderNavigation() {
  const navigation = document.querySelector("[data-nav]");
  if (!navigation || !siteConfig.nav?.items) return;

  const cta = navigation.querySelector(".nav-cta");
  navigation.setAttribute("aria-label", siteConfig.nav.ariaLabel || "Główna nawigacja");
  navigation.querySelectorAll("a:not(.nav-cta)").forEach((item) => item.remove());

  siteConfig.nav.items.forEach((item) => {
    const link = createElement("a", { href: item.href, text: item.label });
    navigation.insertBefore(link, cta);
  });
}

function renderHeroMeta() {
  const wrapper = document.querySelector("[data-hero-meta]");
  if (!wrapper || !siteConfig.hero?.meta) return;
  wrapper.replaceChildren(...siteConfig.hero.meta.map((item) => {
    const div = createElement("div");
    div.append(createElement("b", { text: item.value }), createElement("span", { text: item.label }));
    return div;
  }));
}

function renderIntroBullets() {
  const list = document.querySelector("[data-intro-bullets]");
  if (!list || !siteConfig.intro?.bullets) return;
  list.replaceChildren(...siteConfig.intro.bullets.map((text) => createElement("li", { text })));
}

function renderKitFeatures() {
  const list = document.querySelector("[data-kit-features]");
  if (!list || !siteConfig.kit?.features) return;
  list.replaceChildren(...siteConfig.kit.features.map((text, index) => {
    const item = createElement("span");
    item.append(createElement("b", { text: String(index + 1).padStart(2, "0") }), document.createTextNode(` ${text}`));
    return item;
  }));
}

function renderRouteStats() {
  const wrapper = document.querySelector("[data-route-stats]");
  if (!wrapper || !siteConfig.route?.stats) return;
  wrapper.replaceChildren(...siteConfig.route.stats.map((item) => {
    const div = createElement("div");
    div.append(createElement("b", { text: item.value }), createElement("span", { html: item.label }));
    return div;
  }));
}

function renderRouteGallery() {
  const wrapper = document.querySelector("[data-route-gallery]");
  if (!wrapper || !siteConfig.route) return;
  const cards = (siteConfig.route.gallery || []).map((item) => {
    const article = createElement("article");
    article.append(createElement("span", { text: item.label }), createElement("img", { src: item.image, alt: item.alt }));
    return article;
  });

  if (siteConfig.route.coming) {
    const coming = createElement("article", { className: "route-coming" });
    coming.append(
      createElement("span", { text: siteConfig.route.coming.label }),
      createElement("b", { text: siteConfig.route.coming.title }),
      createElement("p", { text: siteConfig.route.coming.text })
    );
    cards.push(coming);
  }

  wrapper.replaceChildren(...cards);
}

function renderTimeline() {
  const wrapper = document.querySelector("[data-timeline]");
  if (!wrapper || !siteConfig.program?.timeline) return;
  wrapper.replaceChildren(...siteConfig.program.timeline.map((item) => {
    const article = createElement("article", { className: item.highlight ? "highlight" : "" });
    const content = createElement("div");
    content.append(
      createElement("small", { text: item.label }),
      createElement("h3", { text: item.title }),
      createElement("p", { text: item.text })
    );
    article.append(createElement("time", { text: item.time }), createElement("span"), content);
    return article;
  }));
}

function renderFaq() {
  const wrapper = document.querySelector("[data-faq]");
  if (!wrapper || !siteConfig.faq?.items) return;
  wrapper.replaceChildren(...siteConfig.faq.items.map((item) => {
    const details = createElement("details");
    const summary = createElement("summary");
    summary.append(document.createTextNode(item.question), createElement("span", { text: "+" }));
    details.append(summary, createElement("p", { text: item.answer }));
    return details;
  }));
}

function renderFooter() {
  const footerNav = document.querySelector("[data-footer-nav]");
  if (footerNav && siteConfig.nav?.items) {
    footerNav.replaceChildren(...siteConfig.nav.items.slice(1).map((item) => createElement("a", { href: item.href, text: item.label })));
  }

  const email = document.querySelector("[data-footer-email]");
  if (email) {
    email.textContent = getValue("footer.email", email.textContent);
    email.href = `mailto:${email.textContent.trim()}`;
  }

  const facebook = document.querySelector("[data-footer-facebook]");
  if (facebook) {
    facebook.textContent = getValue("footer.facebookLabel", facebook.textContent);
    facebook.href = getValue("footer.facebookUrl", facebook.href);
  }
}

function renderSponsors() {
  const facebookLink = document.querySelector("[data-facebook-link]");
  if (facebookLink) {
    facebookLink.href = getValue("footer.facebookUrl", facebookLink.href);
  }

  const wrapper = document.querySelector("[data-sponsor-logos]");
  const sponsors = siteConfig.infoSponsors?.sponsors?.items || [];
  if (!wrapper || !sponsors.length) return;

  wrapper.replaceChildren(...sponsors.map((sponsor) => {
    const item = createElement("div", { className: "sponsor-logo" });
    item.append(createElement("img", { src: sponsor.logo, alt: sponsor.alt || sponsor.name }));
    return item;
  }));
}

function setupRegistrationLinks() {
  document.querySelectorAll("[data-registration-link]").forEach((link) => {
    link.href = registrationUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function setupMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const open = menuButton.classList.toggle("open");
    navigation.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.classList.remove("open");
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const fallbackDistanceContent = siteConfig.distances || {};
const distanceContent = siteConfig.distances || fallbackDistanceContent;
const card = document.querySelector(".distance-card");
const routePreview = card?.querySelector(".distance-route-preview");
const routePreviewImage = routePreview?.querySelector("img");
const routePreviewText = routePreview?.querySelector("p");

function updateRoutePreview(item) {
  if (!routePreviewImage || !routePreviewText) return;
  if (item.routeImage) {
    routePreviewImage.src = item.routeImage;
    routePreviewImage.alt = `Mapa trasy: ${item.title}`;
    routePreviewImage.hidden = false;
    routePreviewText.hidden = true;
  } else {
    routePreviewImage.removeAttribute("src");
    routePreviewImage.alt = "";
    routePreviewImage.hidden = true;
    routePreviewText.hidden = false;
    routePreviewText.textContent = item.routeFallback || "Trasa dostępna wkrótce";
  }
}

function updateDistance(tab) {
  const item = distanceContent[tab];
  if (!item || !card) return;

  card.animate([{ opacity: .4, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 280 });
  card.querySelector(".distance-number b").textContent = item.number;
  card.querySelector(".distance-number span").textContent = item.decimal;
  card.querySelector(".tag").textContent = item.tag;
  card.querySelector(".distance-info h3").textContent = item.title;
  card.querySelector(".distance-info > p:not(.tag)").textContent = item.description;

  const values = card.querySelectorAll(".details b");
  values[0].textContent = item.start;
  values[1].textContent = item.limit;
  values[2].textContent = item.route;
  card.querySelector(".button-dark").firstChild.textContent = `${item.button} `;
  updateRoutePreview(item);
}

function renderDistanceTabs() {
  const wrapper = document.querySelector("[data-distance-tabs]");
  if (!wrapper || !siteConfig.distances) return;

  const tabs = Object.entries(siteConfig.distances).map(([key, item], index) => {
    const button = createElement("button", { text: item.tab || item.title });
    button.type = "button";
    button.role = "tab";
    button.dataset.tab = key;
    button.setAttribute("aria-selected", String(index === 0));
    if (index === 0) button.classList.add("active");
    return button;
  });

  wrapper.replaceChildren(...tabs);
  tabs.forEach((button) => {
    button.addEventListener("click", () => {
      wrapper.querySelector(".active")?.classList.remove("active");
      wrapper.querySelectorAll("button").forEach((item) => item.setAttribute("aria-selected", "false"));
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      updateDistance(button.dataset.tab);
    });
  });

  updateDistance(tabs[0]?.dataset.tab || "half");
}

function updateCountdown() {
  const countdown = document.querySelector(".countdown");
  if (!countdown) return;
  if (siteConfig.eventDate) countdown.dataset.date = siteConfig.eventDate;

  const difference = new Date(countdown.dataset.date).getTime() - Date.now();
  const safeDifference = Math.max(difference, 0);
  const values = {
    days: Math.floor(safeDifference / 86400000),
    hours: Math.floor((safeDifference / 3600000) % 24),
    minutes: Math.floor((safeDifference / 60000) % 60),
    seconds: Math.floor((safeDifference / 1000) % 60)
  };

  Object.entries(values).forEach(([unit, value]) => {
    countdown.querySelector(`[data-unit="${unit}"]`).textContent = String(value).padStart(2, "0");
  });
}

function setupFaqBehavior() {
  document.querySelectorAll(".accordion details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      document.querySelectorAll(".accordion details").forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });
}

function setupModal() {
  const modal = document.querySelector("#demo-modal");
  const modalContent = modal?.querySelector("[data-modal-content]");
  if (!modal || !modalContent) return;

  function createButtonLink(text, href) {
    const link = createElement("a", { className: "button button-primary", href });
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(document.createTextNode(`${text} `), createElement("span", { text: "→" }));
    return link;
  }

  const modalRenderers = {
    signup() {
      const wrapper = createElement("div", { className: "modal-inner" });
      wrapper.append(
        createElement("p", { className: "section-kicker", text: "Zapisy online" }),
        createElement("h2", { text: "Rejestracja Plus Timing" }),
        createElement("p", { text: "Ten przycisk prowadzi do oficjalnego formularza zapisów. Link ustawiony jest w jednym miejscu, w pliku assets/content.js." }),
        createButtonLink("Przejdź do zapisów", registrationUrl)
      );
      return wrapper;
    }
  };

  document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const renderModal = modalRenderers[button.dataset.modal];
      if (!renderModal) return;
      modalContent.replaceChildren(renderModal());
      modal.showModal();
    });
  });

  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

applyContent();
renderNavigation();
renderHeroMeta();
renderIntroBullets();
renderKitFeatures();
renderRouteStats();
renderRouteGallery();
renderTimeline();
renderFaq();
renderFooter();
renderSponsors();
renderDistanceTabs();
setupRegistrationLinks();
setupMenu();
setupFaqBehavior();
setupModal();
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector("[data-year]").textContent = new Date().getFullYear();
