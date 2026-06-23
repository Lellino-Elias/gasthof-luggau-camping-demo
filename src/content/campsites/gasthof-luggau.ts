import type { CampsiteConfig } from "../types";

/**
 * Gasthof Luggau — Maria Luggau, Lesachtal (Kärnten).
 * Familiär geführter Gasthof mit Campingplatz auf zwei südseitigen Terrassen, 1.140 m.
 * Quelle: leads/gasthof-luggau/raw/digest. 100 % quellbelegt; Du-Anrede durchgehend.
 *
 * ⚠️ BILDARMER LEAD: Auf der eigenen Domain (gasthof-luggau.at) gibt es nur 2 Fotos ≥ 1000 px
 * (Sommer-Bergwiesen + Winter-Schneefläche, beide als Hero/Breather genutzt). Alle weiteren
 * echten Motiv-Fotos liegen nur als 767-px-„schleife"-Panorama-Crops vor. Aus diesen wurden
 * die schärfsten EINZELbild-Crops kuratiert für camping.features (Gasthof/Terrasse/Stube) und
 * galerie (Sommer-/Winter-Panoramen). pillars bleiben leer (keine weiteren starken Einzelbilder
 * ohne Doppelung) → Pillar-Block blendet sich ehrlich aus.
 * Der Nach-Scrape lieferte zwar viele hochwertige Fotos, diese stammen aber von FREMDEN
 * Plätzen (camping.info / campercontact: alpencamp-kärnten, alpenferienpark-reisach,
 * camping-am-waldbad, panorama-camping-lesachtal u. a.) → als Stock/Fremdfotos NICHT verwendet.
 */
const IMG = "/campsites/gasthof-luggau";

const gasthofLuggau: CampsiteConfig = {
  name: "Gasthof Luggau",
  shortName: "Luggau",
  slug: "gasthof-luggau",
  ort: "Maria Luggau",
  region: "Kärnten",
  brandKind: "Gasthof & Camping",
  regionLong: "Lesachtal · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Camping auf zwei Sonnenterrassen im Lesachtal",
  claimEmphasis: "zwei Sonnenterrassen",
  intro:
    "Auf 1.140 m, zwischen den Karnischen Alpen und den Lienzer Dolomiten, findest du unseren Campingplatz auf zwei südseitigen Terrassen — ruhig, naturbelassen und voller Bergluft.",

  statement: {
    text: "Bei uns campst du mitten in der Natur — und am Abend kommen Lesachtaler Spezialitäten aus eigener Küche auf den Tisch.",
    emphasis: "Lesachtaler Spezialitäten aus eigener Küche",
  },

  // Keine weiteren starken Einzelbild-Fotos auf eigener Domain übrig (ohne Doppelung mit
  // camping.features/galerie) → Pillar-Block blendet sich ehrlich aus (BrandStatement return null).
  pillars: [],

  usps: [
    "Pool & Spielplatz",
    "Warmwasser-Duschen",
    "Stromanschlüsse",
    "Täglicher Semmelservice",
    "Sauna im Haus",
    "Spar-Markt 300 m",
  ],

  trust: {
    heading: "Was Luggau besonders macht",
    headingEmphasis: "besonders",
    intro:
      "Familiär geführt, auf 1.140 m Seehöhe: eigene Küche mit Lesachtaler Spezialitäten, gemütliche Räume und ein Campingplatz mitten in der Natur — bei uns gehört das zusammen.",
  },

  awards: [],

  // Saisonangabe entfernt: Campingseite (02.md) nennt keine Saisondaten; kein Quellenbeleg
  // für ganzjährigen Campingbetrieb. (verify2-Issue: saison ohne Quellenbeleg.)

  // Winteraufnahme (hintergrund_winter1.jpg, gasthof-luggau.at/winterurlaub.html) als Hero:
  // scharf, kristalline Schneefläche mit guten Kontrast-Schatten — visuell stärker als die
  // überbelichtete/ausgewaschene Sommerwiese. Beide Fotos heroOk, eigene Domain.
  // Bildarmer Lead (nur 2 Fotos ≥ 1920 px auf eigener Domain); Enrichment wurde versucht
  // (.enriched-marker), kein besseres Motiv-Foto gefunden.
  hero: {
    aerial: { src: `${IMG}/gallery-408a04e3a3.webp`, alt: "Kristalline, sonnenbeschienene Schneeoberfläche mit blauen Schatten im Lesachtal bei Maria Luggau" },
  },

  // Sommerwiesen-Aufnahme (hintergrund_sommer.jpg) als Breather: alpine Blumenwiese mit
  // weißen Margeriten — als atmosphärische Sommertextur hinter der Breather-Zeile passend.
  breather: {
    image: { src: `${IMG}/gallery-0d7e12ca25.webp`, alt: "Blühende Margeritenwiese im Lesachtaler Sommer bei Maria Luggau" },
    line: "Das Lesachtal — Natur pur, von der Sommerwiese bis zum verschneiten Winter.",
  },

  camping: {
    heading: "Camping zwischen Alpen und Dolomiten",
    intro:
      "Auf zwei südseitigen Terrassen, mitten in der Natur: Ausgangspunkt für Wanderungen, Wallfahrten und Wildwasser an der Gail — und doch mit allem Komfort, den du brauchst.",
    // Nach-Scrape: eigene Website-Fotos (gasthof-luggau.at/pic/*) — scharfe Panorama-Crops
    // (767 px breit, einzelbildig, keine Stock-/Fremdfotos). Erstes = große Kachel.
    features: [
      {
        title: "Unser Gasthof im Lesachtal",
        text: "Familiär geführt auf 1.140 m: das Haus liegt sonnig zwischen Bergwiesen und Wald — der Campingplatz direkt vor der Tür.",
        image: { src: `${IMG}/gallery-96d10c2ee0.webp`, alt: "Gasthof Luggau am sonnigen Berghang über Maria Luggau, umgeben von Bergwiesen und Wald" },
      },
      {
        title: "Sonnenterrasse & Garten",
        text: "Im Garten unter Schirmen sitzt du mit Blick ins Tal — der gemütliche Treffpunkt nach einem Tag in den Bergen.",
        image: { src: `${IMG}/gallery-3655bb7122.webp`, alt: "Gartenterrasse des Gasthof Luggau mit Sonnenschirmen, Tischen und Talblick" },
      },
      {
        title: "Lesachtaler Spezialitäten",
        text: "In der gemütlichen Stube kommen am Abend Spezialitäten aus eigener Küche auf den gedeckten Tisch.",
        image: { src: `${IMG}/gallery-0215693f2f.webp`, alt: "Gemütliche Gaststube im Gasthof Luggau mit gedeckten Tischen und Blick ins Grüne" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Lesachtal",
    modes: [
      {
        title: "Aus Deutschland",
        text: "Über Kufstein — Mittersill — Felbertauerntunnel — Lienz — Tassenbach bis Maria Luggau. Meist die schnellere Route als über die Tauernautobahn.",
      },
      {
        title: "Aus Kärnten & dem Osten",
        text: "A2 bis Villach, weiter über Arnoldstein auf die B111 Richtung Kötschach-Mauthen und ins Lesachtal bis Maria Luggau.",
      },
      {
        title: "Aus Südtirol",
        text: "Über die Pustertalstraße durch Sillian, bei Tassenbach rechts ab Richtung Kartitsch — Obertilliach — Maria Luggau.",
      },
    ],
  },

  // Nach-Scrape: vier scharfe Einzelbild-Panoramen von der eigenen Website (gasthof-luggau.at/pic/*).
  galerie: {
    heading: "Rund um Maria Luggau",
    headingEmphasis: "Maria Luggau",
    intro: "Bergwiesen, Wildwasser und verschneite Winter — ein paar Eindrücke aus dem Lesachtal.",
    tag: "Sommer & Winter",
    images: [
      { src: `${IMG}/gallery-805dd69a5b.webp`, alt: "Grünes Lesachtal mit verstreuten Bergbauernhöfen und Berghängen im Sommer" },
      { src: `${IMG}/gallery-6606d7b797.webp`, alt: "Sonniges Schneepanorama über den verschneiten Gipfeln rund um Maria Luggau" },
      { src: `${IMG}/gallery-3ca5a0cbc8.webp`, alt: "Verschneites Lesachtal mit Bergbauernhöfen und Bergkette im Winter" },
      { src: `${IMG}/gallery-1abeec50d0.webp`, alt: "Camping auf dem Gasthof Luggau: Wohnwagen auf dem Stellplatz mit Lesachtal-Panorama und Zelt vor der Wallfahrtskirche Maria Luggau" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Urlaub im Lesachtal?",
    headingEmphasis: "im Lesachtal",
    intro:
      "Wähle Zeitraum und Personen — die Familie Oberluggauer meldet sich persönlich mit deiner Verfügbarkeit und den aktuellen Preisen.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Campingpreise angegeben (alle Preise „auf Anfrage“). Bitte bestätigen. Endpreise zzgl. Ortstaxe.",
    highlight: {
      title: "Mitten in der Natur",
      text: "Zwischen Karnischen Alpen und Lienzer Dolomiten — Wandern, Wildwasser und Ruhe direkt am Platz.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 30, perExtraGuest: 8 },
      { id: "stellplatz-strom", label: "Stellplatz mit Strom", perNight: 36, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 46.703958, lng: 12.741422 },
    tel: "+43 4716 209",
    telHref: "tel:+434716209",
    mail: "gasthof-luggau@aon.at",
    adresse: "Maria Luggau 34 · 9655 Maria Luggau · Kärnten",
  },

  languages: ["DE"],

  nav: [
    { label: "Gasthof", href: "#top" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Anfrage", href: "#booking" },
  ],
};

export default gasthofLuggau;
