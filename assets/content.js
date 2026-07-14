/*
  EDYCJA STRONY BEZ ZNAJOMOŚCI PROGRAMOWANIA
  ==========================================
  1. Link do zapisów zmieniasz w polu registrationUrl.
  2. Zdjęcia podmieniasz w folderze assets/img, najlepiej zostawiając te same nazwy plików.
  3. Opisy dystansów zmieniasz poniżej w sekcji distances.
  4. Gdy pojawi się trasa półmaratonu, wpisz ścieżkę w routeImage, np. "assets/img/trasa-polmaraton.jpg".
*/

window.BDS_CONFIG = {
  registrationUrl: "https://plus-timing.pl/zgloszenia/polmaraton-dolina-samy-kazmierz-2026/",
  eventDate: "2026-09-13T09:00:00",
  images: {
    heroLogo: "assets/img/hero.jpg",
    headerLogo: "assets/img/logo-male.jpg",
    shirt: "assets/img/koszulka.jpg",
    route5: "assets/img/trasa-5.jpg",
    route10: "assets/img/trasa-10.jpg"
  },
  distances: {
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
  }
};
