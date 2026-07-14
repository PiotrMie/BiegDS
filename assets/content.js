/*
  EDYCJA STRONY BEZ ZNAJOMOŚCI PROGRAMOWANIA
  ==========================================
  Wszystkie najważniejsze teksty i zdjęcia edytujesz w tym pliku.

  Zasady:
  - Teksty wpisuj między cudzysłowami.
  - Zdjęcia podmieniaj w folderze assets/img, najlepiej zostawiając te same nazwy plików.
  - Link do zapisów zmieniasz w polu registrationUrl.
  - Godziny programu zmieniasz w sekcji timeline.
  - Pytania i odpowiedzi zmieniasz w sekcji faq.
*/

window.BDS_CONFIG = {
  registrationUrl: "https://plus-timing.pl/zgloszenia/polmaraton-dolina-samy-kazmierz-2026/",
  eventDate: "2026-09-13T09:00:00",
  images: {
    heroLogo: "assets/img/hero.jpg",
    headerLogo: "assets/img/logo-male.jpg",
    eneaLogo: "assets/img/logo-enea-cropped.png",
    lastEdition: "assets/img/last-edition.jpg",
    shirt: "assets/img/koszulka.jpg",
    route5: "assets/img/trasa-5.jpg",
    route10: "assets/img/trasa-10.jpg",
    routeNordic: "assets/img/trasa-nordic.jpg"
  },
  meta: {
    title: "Półmaraton Doliną Samy",
    description: "Półmaraton Doliną Samy, Pyrlandzka Dycha i Piątka."
  },
  nav: {
    ariaLabel: "Główna nawigacja",
    items: [
      { label: "O biegu", href: "#o-biegu" },
      { label: "Dystanse", href: "#dystanse" },
      { label: "Program", href: "#program" },
      { label: "FAQ", href: "#faq" }
    ],
    cta: "Zapisz się"
  },
  hero: {
    eyebrow: "14. edycja",
    location: "Kaźmierz • Wielkopolska",
    title: "Pobiegnij",
    titleAccent: "Doliną Samy",
    lead: "Sportowe emocje, lokalna energia i trasa, do której chce się wracać. Wybierz swój dystans i spotkajmy się na starcie.",
    primaryButton: "Zapisz się na bieg",
    secondaryButton: "Poznaj dystanse",
    meta: [
      { value: "21,097 km", label: "Półmaraton" },
      { value: "10 km", label: "Pyrlandzka Dycha" },
      { value: "10 km", label: "Nordic Walking" }
    ],
    imageAlt: "Półmaraton Doliną Samy, Pyrlandzka Dycha i Piątka - 13 września 2026",
    scrollCue: "Przewiń"
  },
  countdown: {
    kicker: "Następna edycja",
    title: "Do zobaczenia na starcie!",
    dateLabel: "Termin wydarzenia:",
    dateText: "13 września 2026",
    units: {
      days: "dni",
      hours: "godz.",
      minutes: "min.",
      seconds: "sek."
    }
  },
  infoSponsors: {
    facebook: {
      kicker: "Aktualności",
      title: "Wszystkie szczegóły na Facebooku",
      text: "Najświeższe informacje organizacyjne, komunikaty dla zawodników i materiały z przygotowań publikujemy na profilu wydarzenia.",
      button: "Przejdź na Facebook"
    },
    sponsors: {
      kicker: "Partnerzy wydarzenia",
      title: "Sponsorzy",
      text: "Z energią od ENEA widzimy się na starcie",
      items: [
        {
          name: "ENEA",
          logo: "assets/img/logo-enea-cropped.png",
          alt: "Logo ENEA"
        }
      ]
    }
  },
  intro: {
    kicker: "Bieg z charakterem",
    title: "Tu liczy się",
    titleAccent: "każdy krok",
    imageAlt: "Medale z poprzedniej edycji Półmaratonu Doliną Samy",
    imageLabel: "poprzednia edycja",
    statNumber: "14",
    statText: "lat biegowej<br>historii",
    heading: "Półmaraton Doliną Samy to więcej niż wynik na mecie.",
    paragraph: "To lokalne święto sportu, stworzone dla doświadczonych biegaczy, debiutantów, rodzin i kibiców. Malownicza trasa prowadzi przez serce gminy Kaźmierz, łącząc sportową rywalizację z wyjątkową atmosferą.",
    bullets: [
      "Atestowane i różnorodne dystanse",
      "Elektroniczny pomiar czasu",
      "Medal i bogaty pakiet startowy",
      "Strefa kibica i biegi dla dzieci"
    ],
    linkText: "Zobacz, co czeka na miejscu"
  },
  distancesSection: {
    kicker: "Znajdź swój dystans",
    title: "Jeden dzień.",
    titleAccent: "Cztery wyzwania.",
    labels: {
      start: "Start",
      limit: "Limit",
      route: "Trasa"
    }
  },
  distances: {
    half: {
      tab: "Półmaraton",
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
      tab: "10 km",
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
      tab: "5 km",
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
      tab: "Nordic Walking",
      number: "10",
      decimal: " km",
      tag: "Zabierz kijki",
      title: "Nordic Walking",
      description: "10 km z kijkami po trasie pełnej emocji. Dystans dla osób, które chcą aktywnie spędzić dzień w atmosferze biegowego święta.",
      start: "09:45",
      limit: "1,5 godz.",
      route: "mapa Nordic Walking",
      button: "Zapisz się na Nordic Walking",
      routeImage: "assets/img/trasa-nordic.jpg",
      routeFallback: ""
    }
  },
  program: {
    kicker: "Dzień zawodów",
    title: "Wszystko w",
    titleAccent: "dobrym rytmie",
    timeline: [
      { time: "07:00", label: "Otwarcie", title: "Biuro zawodów", text: "Odbiór numerów i pakietów startowych." },
      { time: "08:30", label: "Rozgrzewka", title: "Wspólny trening", text: "Energetyczne przygotowanie w strefie startu." },
      { time: "09:00", label: "Start główny", title: "Półmaraton", text: "21,097 km przez Dolinę Samy.", highlight: true },
      { time: "09:30", label: "Kolejne starty", title: "10 km, 5 km i NW", text: "Pyrlandzka Dycha, Piątka i Nordic Walking 10 km." },
      { time: "12:30", label: "Finał", title: "Dekoracja i piknik", text: "Nagrody, muzyka i wspólne świętowanie." }
    ]
  },
  kit: {
    kicker: "Koszulka edycji 14",
    title: "Zamów ją",
    titleAccent: "przy rejestracji",
    paragraph: "Pamiątkową koszulkę można dodać podczas zapisów online. To mocny element identyfikacji wydarzenia i dobry powód, żeby pokazać ją wyraźnie na stronie.",
    imageAlt: "Koszulka dostępna do zamówienia przy rejestracji",
    button: "Zamów przy rejestracji",
    features: [
      "Wyraźny nadruk wysokiej jakości",
      "Nadruk na rękawie",
      "Subtelny wzór na całości",
      "Kontrastowe wykończenia"
    ]
  },
  faq: {
    kicker: "Przed startem",
    title: "Najczęstsze",
    titleAccent: "pytania",
    items: [
      { question: "Gdzie znajduje się biuro zawodów?", answer: "W tej sekcji warto wpisać dokładny adres, mapę dojazdu, godziny pracy oraz informacje o parkingach." },
      { question: "Czy mogę zmienić wybrany dystans?", answer: "Zasady zmiany dystansu należy uzupełnić zgodnie z regulaminem organizatora." },
      { question: "Co znajduje się w pakiecie startowym?", answer: "Koszulka, numer startowy z chipem, medal po ukończeniu biegu oraz świadczenia regeneracyjne." },
      { question: "Czy na miejscu będzie parking i depozyt?", answer: "Takie informacje warto pokazać na osobnej, prostej mapie sytuacyjnej przed wydarzeniem." }
    ]
  },
  signup: {
    kicker: "Gotowy na wyzwanie?",
    title: "Twoja meta zaczyna się",
    titleAccent: "tutaj.",
    paragraph: "Wybierz dystans, zapisz się i zacznij przygotowania do kolejnej edycji.",
    button: "Przejdź do zapisów"
  },
  footer: {
    columnTitle: "Najważniejsze",
    contactTitle: "Kontakt",
    email: "sportowykazmierz@wp.pl",
    facebookLabel: "Facebook ↗",
    facebookUrl: "https://www.facebook.com/PDSiPDP/",
    note: "Półmaraton Doliną Samy, Pyrlandzka Dycha i Piątka.",
    copyright: "Półmaraton Doliną Samy"
  }
};
