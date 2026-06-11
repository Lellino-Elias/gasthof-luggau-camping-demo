import type { CampsiteConfig } from "../types";

/**
 * Gasthof Luggau — Maria Luggau, Lesachtal (Kärnten).
 * Familiär geführter Gasthof mit Campingplatz auf zwei südseitigen Terrassen, 1.140 m.
 * Quelle: leads/gasthof-luggau/raw/digest. 100 % quellbelegt; Du-Anrede durchgehend.
 *
 * ⚠️ BILDARMER LEAD: Auf der Quelle sind nur 2 echte Fotos ≥ 800 px vorhanden
 * (verblasstes Sommer-Bergwiesen-Hero + Winter-Schneefläche). Alle echten Motiv-Fotos
 * existieren nur als 767-px-„schleife"-Streifen (tooSmall) bzw. als Website-Layout-Grafiken.
 * Daher: pillars / camping.features / galerie leer → Sektionen blenden sich ehrlich aus.
 * Siehe REPORT.md → Tier-1b-Foto-Enrichment nötig, bevor dies als Premium-Demo taugt.
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
    text: "Bei uns campst du mitten in der Natur — und am Abend kocht der Chef noch selbst.",
    emphasis: "der Chef noch selbst",
  },

  // Keine geeigneten Motiv-Fotos in der Library → Pillar-Block blendet sich aus (BrandStatement return null).
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

  saison: { von: "Jänner", bis: "Dezember" },

  // Sommerwiesen-Aufnahme (hintergrund_sommer.jpg) als Hero: alpine Blumenwiese mit weißen
  // Margeriten — das EIGENE Startseiten-Hintergrundbild der Quelle (01.md, "Hintergrund, preload").
  // Hat im Gegensatz zur Winter-Schneefläche ein echtes Motiv → tragfähiger als Hero.
  // Bildarmer Lead (nur 2 Fotos ≥ 1920 px auf eigener Domain); Enrichment wurde versucht
  // (.enriched-marker), kein besseres Motiv-Foto gefunden.
  hero: {
    aerial: { src: `${IMG}/gallery-0d7e12ca25.webp`, alt: "Blühende Margeritenwiese auf der Alm im Lesachtaler Sommer bei Maria Luggau" },
  },

  // Winteraufnahme (hintergrund_winter1.jpg, gasthof-luggau.at/winterurlaub.html) als Breather:
  // scharfe, sonnenbeschienene Schneefläche — motivarm, aber als atmosphärische Wintertextur
  // im Hintergrund rollengerecht.
  breather: {
    image: { src: `${IMG}/gallery-408a04e3a3.webp`, alt: "Frisch verschneite, sonnenbeschienene Winterlandschaft im Lesachtal" },
    line: "Das Lesachtal — Natur pur, von der Sommerwiese bis zum verschneiten Winter.",
  },

  camping: {
    heading: "Camping zwischen Alpen und Dolomiten",
    intro:
      "Auf zwei südseitigen Terrassen, mitten in der Natur: Ausgangspunkt für Wanderungen, Wallfahrten und Wildwasser an der Gail — und doch mit allem Komfort, den du brauchst.",
    // Keine geeigneten Foto-Motive in der Library → CampingFeatures blendet sich aus (return null).
    features: [],
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

  // Keine geeigneten Foto-Motive übrig → Galerie blendet sich aus (return null bei < 4 Bildern).
  galerie: {
    heading: "Rund um Maria Luggau",
    headingEmphasis: "Maria Luggau",
    intro: "Bergwiesen, Wildwasser und verschneite Winter — ein paar Eindrücke aus dem Lesachtal.",
    tag: "Sommer & Winter",
    images: [],
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
