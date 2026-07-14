const siteConfig = window.BDS_CONFIG || {};
const registrationUrl = siteConfig.registrationUrl || "https://plus-timing.pl/zgloszenia/polmaraton-dolina-samy-kazmierz-2026/";

document.querySelectorAll("[data-registration-link]").forEach((link) => {
  link.href = registrationUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const countdown = document.querySelector(".countdown");
if (siteConfig.eventDate && countdown) {
  countdown.dataset.date = siteConfig.eventDate;
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

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

const demoBarButton = document.querySelector(".demo-bar button");
if (demoBarButton) {
  demoBarButton.addEventListener("click", (event) => {
    event.currentTarget.parentElement.remove();
  });
}

const fallbackDistanceContent = {
  half: {
    number: "21",
    decimal: ",097 km",
    tag: "Główny dystans",
    title: "Półmaraton Doliną Samy",
    description: "Najdłuższy dystans wydarzenia. Mapa trasy zostanie dodana po publikacji przez organizatora.",
    start: "09:00",
    limit: "3 godz.",
    route: "wkrótce",
    button: "Zapisz się na półmaraton",
    routeImage: "",
    routeFallback: "Trasa dostępna wkrótce"
  },
  ten: {
    number: "10",
    decimal: " km",
    tag: "Pyrlandzka Dycha",
    title: "Pyrlandzka Dycha",
    description: "10 km przez Kaźmierz i okolice. Dystans dla osób, które chcą sprawdzić charakter na szybkiej, konkretnej trasie.",
    start: "09:30",
    limit: "1,5 godz.",
    route: "mapa 10 km",
    button: "Zapisz się na 10 km",
    routeImage: "assets/img/trasa-10.jpg",
    routeFallback: ""
  },
  five: {
    number: "5",
    decimal: " km",
    tag: "Szybka leśna",
    title: "Piątka",
    description: "Leśna, szybka trasa dla początkujących i zaawansowanych. Dobra na pierwszy start i na mocne tempo.",
    start: "09:40",
    limit: "1 godz.",
    route: "mapa 5 km",
    button: "Zapisz się na 5 km",
    routeImage: "assets/img/trasa-5.jpg",
    routeFallback: ""
  },
  nw: {
    number: "5",
    decimal: " km",
    tag: "Marsz po emocje",
    title: "Nordic Walking",
    description: "Aktywny marsz w sportowej atmosferze wydarzenia. Szczegóły trasy można uzupełnić po publikacji regulaminu.",
    start: "09:45",
    limit: "1,5 godz.",
    route: "5 km",
    button: "Zapisz się na Nordic Walking",
    routeImage: "",
    routeFallback: "Trasa Nordic Walking 5 km"
  }
};

const distanceContent = siteConfig.distances || fallbackDistanceContent;
const card = document.querySelector(".distance-card");
const routePreview = card.querySelector(".distance-route-preview");
const routePreviewImage = routePreview.querySelector("img");
const routePreviewText = routePreview.querySelector("p");

function updateRoutePreview(item) {
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
  if (!item) return;

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

updateDistance("half");

document.querySelectorAll(".distance-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".distance-tabs .active").classList.remove("active");
    document.querySelectorAll(".distance-tabs button").forEach((item) => item.setAttribute("aria-selected", "false"));
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    updateDistance(button.dataset.tab);
  });
});

function updateCountdown() {
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
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll(".accordion details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".accordion details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

const modal = document.querySelector("#demo-modal");
const modalContent = modal.querySelector("[data-modal-content]");

function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;
  if (options.href) element.href = options.href;
  return element;
}

function createButtonLink(text, href) {
  const link = createElement("a", { className: "button button-primary", href });
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.append(document.createTextNode(`${text} `), createElement("span", { text: "->" }));
  return link;
}

function renderSignupModal() {
  const wrapper = createElement("div", { className: "modal-inner" });
  wrapper.append(
    createElement("p", { className: "section-kicker", text: "Zapisy online" }),
    createElement("h2", { text: "Rejestracja Plus Timing" }),
    createElement("p", { text: "Ten przycisk prowadzi do oficjalnego formularza zapisów. Link ustawiony jest w jednym miejscu, w pliku assets/content.js." }),
    createButtonLink("Przejdź do zapisów", registrationUrl)
  );
  return wrapper;
}

function renderMapModal() {
  const wrapper = createElement("div", { className: "modal-inner" });
  wrapper.append(
    createElement("p", { className: "section-kicker", text: "Trasy" }),
    createElement("h2", { text: "Mapy tras 5 km i 10 km" }),
    createElement("p", { text: "Mapy są pokazane w sekcji Trasa oraz w kartach dystansów. Półmaraton ma tymczasowo komunikat: Trasa dostępna wkrótce." })
  );
  return wrapper;
}

const modalRenderers = {
  signup: renderSignupModal,
  map: renderMapModal
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

document.querySelector("[data-year]").textContent = new Date().getFullYear();
