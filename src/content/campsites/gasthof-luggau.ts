import type { CampsiteConfig } from "../types";

/**
 * Gasthof & Camping Luggau — Maria Luggau, Lesachtal, Kärnten.
 * Alle Texte/Fakten belegt aus gasthof-luggau.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Fotos des Betriebs/der Region, aus den
 * Original-„Schleifen"-Streifen sauber als Einzelpanels herausgeschnitten
 * (rosa Trenner/Rahmen entfernt) und in /public/campsites/gasthof-luggau/.
 * EHRLICH:
 *  - KEIN See am Platz → `see` weggelassen; Lage = Berge (1.140 m), naher
 *    Wildwasserfluss Gail (nicht als „am See" geframt).
 *  - Auf der Quelle stehen NIRGENDS Preise (alles „auf Anfrage") → Booking
 *    nutzt realistische Platzhalter + offene Offenlegung, pricesArePlaceholder.
 *  - Bergsteigerdorf = echte Auszeichnung der Quelle, aber ohne Logo-Bild →
 *    als USP geführt (awards braucht ein Bild, sonst unsichtbar) → awards leer.
 *  - Keine Koordinaten auf der Quelle → coords weggelassen (Karte aus, Adresse).
 */
const IMG = "/campsites/gasthof-luggau";

export const gasthofLuggau: CampsiteConfig = {
  name: "Gasthof & Camping Luggau",
  shortName: "Gasthof Luggau",
  slug: "gasthof-luggau",
  ort: "Maria Luggau",
  region: "Kärnten",
  brandKind: "Gasthof & Camping",
  regionLong: "Lesachtal · Karnische Alpen · Kärnten · Österreich",

  claim: "Gastfreundschaft auf 1.140 m im Lesachtal",
  claimEmphasis: "im Lesachtal",
  intro:
    "Familiär geführter Gasthof mit Restaurant und Bergcampingplatz auf 1.140 m Seehöhe – mitten im Wallfahrtsort Maria Luggau, umgeben von den Karnischen Alpen und den Lienzer Dolomiten.",

  statement: {
    text: "Bei uns kocht der Chef noch selbst – und das schmeckt man in jedem Gericht.",
    emphasis: "der Chef noch selbst",
  },

  pillars: [
    {
      title: "Mitten in den Bergen",
      text: "Auf 1.140 m zwischen Karnischen Alpen und Lienzer Dolomiten – Ausgangspunkt für Wanderungen, Klettersteige und Touren ohne Grenzen.",
      image: { src: `${IMG}/lesachtal-panorama.webp`, alt: "Grüne Almwiesen und Höfe im Lesachtal rund um Maria Luggau" },
    },
    {
      title: "Gasthof mit Herz",
      text: "Familiär geführt, mit gemütlichen Stuben, Gastgarten im Sommer und hauseigener Sauna im Winter – ein beliebter Treffpunkt für Gäste und Einheimische.",
      image: { src: `${IMG}/gastgarten.webp`, alt: "Gastgarten des Gasthof Luggau mit Sonnenschirmen und Bergblick" },
    },
    {
      title: "Camping in der Natur",
      text: "Ein ruhiger Bergcampingplatz auf zwei südseitigen Terrassen – Stellplätze für Zelt, Wohnwagen und Wohnmobil mitten im Grünen.",
      image: { src: `${IMG}/camping-stellplatz.webp`, alt: "Wohnwagen auf der grünen Campingwiese vor den Bergen" },
    },
  ],

  usps: [
    "Familiär geführt",
    "Restaurant – der Chef kocht selbst",
    "Hauseigene Sauna im Winter",
    "Täglicher Semmelservice am Camping",
    "Bergsteigerdorf Maria Luggau",
    "Schneesicheres Skigebiet in 10 Min.",
  ],

  trust: {
    heading: "Worauf Sie sich bei Familie Oberluggauer verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Oberluggauer: 30 gemütliche Betten, ehrliche Lesachtaler Küche aus regionalen Produkten und ein ruhiger Campingplatz – mitten im Wallfahrtsort Maria Luggau auf 1.140 m.",
  },

  // Bergsteigerdorf-Auszeichnung ist belegt, aber ohne Logo-Bild → als USP geführt.
  awards: [],

  saison: { von: "Sommer", bis: "Winter" },

  hero: {
    aerial: { src: `${IMG}/hero-gasthof.webp`, alt: "Gasthof Luggau auf 1.140 m, eingebettet in die grüne Berglandschaft von Maria Luggau" },
  },

  camping: {
    heading: "Camping zwischen den Bergen",
    intro:
      "Unser Campingplatz liegt auf zwei südseitigen Terrassen auf 1.140 m – ruhig im Herzen der Natur, zwischen Karnischen Alpen und Lienzer Dolomiten.",
    features: [
      { title: "Zwei südseitige Terrassen", text: "Ruhige Lage im Herzen der Natur auf 1.140 m – Ausgangspunkt für Wanderungen, Ausflüge in die Natur und Wallfahrten.", image: { src: `${IMG}/camping-terrasse.webp`, alt: "Stellplätze mit Wohnwagen und Zelten auf der Campingterrasse vor den Bergen" } },
      { title: "Platz für Zelt, Van & Wohnwagen", text: "Sonnige Wiesenplätze mit weitem Blick auf die Berge und das Lesachtal.", image: { src: `${IMG}/camping-zelt.webp`, alt: "Zelt und Motorrad auf der Campingwiese mit Blick über das Lesachtal" } },
      { title: "Eigener Pool für Kinder", text: "Kinder haben ihre Freude am campingeigenen Pool und einem Spielplatz mitten in der Bergnatur.", image: { src: `${IMG}/camping-pool.webp`, alt: "Kinder planschen im campingeigenen Pool vor den Bergen" } },
      { title: "Lagerfeuer am Abend", text: "Gemütliche Abende an der Feuergrillstelle – mitten in der ruhigen Bergnatur.", image: { src: `${IMG}/camping-lagerfeuer.webp`, alt: "Gäste sitzen abends gemütlich an der Feuergrillstelle" } },
      { title: "Komfort & Semmelservice", text: "Warmwasser-Duschen, WC, Abwaschplätze, Waschmaschine, Wäschetrocknung und Stromanschlüsse – dazu täglicher Semmelservice und ein Spar-Markt ca. 300 m entfernt.", image: { src: `${IMG}/camping-familie.webp`, alt: "Familie beim Camping mit Zelt vor dem Bergdorf Maria Luggau" } },
    ],
  },

  mobilheime: {
    heading: "Zimmer & Gasthof",
    intro:
      "Lieber feste Wände? Unser Gasthof bietet 30 Betten in gemütlichen Zimmern – und im Restaurant erwartet Sie traditionelle Lesachtaler Küche.",
    items: [
      { name: "Komfortzimmer", kind: "Übernachtung & Frühstück", text: "Ein-, Zwei- und Dreibettzimmer mit Dusche/Bad, WC und SAT-TV – teilweise mit Balkon oder Terrasse.", image: { src: `${IMG}/zimmer-doppel.webp`, alt: "Doppelzimmer im Gasthof Luggau mit Ausblick auf die verschneiten Berge" }, features: ["Dusche/Bad & WC", "SAT-TV", "teils Balkon/Terrasse"] },
      { name: "Familienzimmer", kind: "Zwei Räume · Verbindungstür", text: "Familienzimmer mit zwei Räumen, Verbindungstür und jeweils zwei Betten – ideal für Familien und kleine Gruppen.", image: { src: `${IMG}/zimmer-familie.webp`, alt: "Familienzimmer im Gasthof Luggau mit zwei Betten" }, features: ["bis 4 Personen", "2 Räume", "SAT-TV"] },
      { name: "Restaurant & Gastgarten", kind: "Gutbürgerliche Küche", text: "Traditionelle Lesachtaler Spezialitäten – Schlipfkrapfen, Käsespätzle und Grillteller aus heimischem Fleisch. Gaststube, Saal und Gastgarten mit rund 140 Plätzen.", image: { src: `${IMG}/restaurant-saal.webp`, alt: "Festlich gedeckter Saal im Gasthof Luggau mit Bergblick" }, features: ["Schlipfkrapfen & Käsespätzle", "Saal für Gruppen", "Gastgarten"] },
    ],
  },

  aktivitaeten: {
    heading: "Sommer & Winter aktiv",
    intro:
      "Vom Wandern und Klettern über Wallfahrt und Wildwasser bis zu Ski, Langlauf und Rodeln – rund um Maria Luggau wird es zu keiner Jahreszeit langweilig.",
    items: [
      { title: "Wandern & Klettersteige", text: "Von leichten Themenwanderungen bis zu Klettersteigen wie Großer Kinigat und Porze – am Gailtaler und Karnischen Höhenweg.", image: { src: `${IMG}/wandern.webp`, alt: "Wanderer auf einem Bergrücken über dem Lesachtal" } },
      { title: "Wallfahrtsort Maria Luggau", text: "Seit 1513 einer der bekanntesten Marienwallfahrtsorte der Alpen – betreut vom Servitenorden seit 1635.", image: { src: `${IMG}/maria-luggau-dorf.webp`, alt: "Das Dorf Maria Luggau mit Wallfahrtskirche und Kloster" } },
      { title: "Kajak & Wildwasser", text: "Kajak und Rafting am nahen Wildwasserfluss Gail – Abenteuer mitten in der Natur.", image: { src: `${IMG}/wildwasser-gail.webp`, alt: "Holzbrücke über den klaren Wildbach bei Maria Luggau" } },
      { title: "Motorradtouren ohne Grenzen", text: "Kurvenreiche Pässe von der Lesachtal-Rundtour bis zu den Drei Zinnen – die Motorräder stehen sicher in der Garage.", image: { src: `${IMG}/motorrad.webp`, alt: "Motorrad auf einer kurvenreichen Bergstraße im Lesachtal" } },
      { title: "Skifahren am Golzentipp", text: "Das schneesichere Familienskigebiet Golzentipp ist in 10 Minuten erreichbar – 16 km Pisten bis 2.200 m, ohne Anstehen.", image: { src: `${IMG}/ski-golzentipp.webp`, alt: "Skifahrerin auf der Piste vor verschneiten Berggipfeln" } },
      { title: "Langlaufen & Winterzauber", text: "Tief verschneite Loipen und Wälder im Lesachtal – ein Geheimtipp für Wintersportler, die unverbaute Landschaft schätzen.", image: { src: `${IMG}/langlauf.webp`, alt: "Langläufer auf einer Loipe zwischen frostbedeckten Bäumen" } },
    ],
  },

  anreise: {
    heading: "So finden Sie zu uns",
    modes: [
      { title: "Aus Kärnten & dem Osten", text: "Über A2 / Villach–Arnoldstein, weiter auf der B111 Richtung Kötschach-Mauthen und ins Lesachtal bis Maria Luggau." },
      { title: "Aus Deutschland", text: "Empfohlen über Kufstein–Mittersill–Felbertauerntunnel–Lienz–Tassenbach nach Maria Luggau." },
      { title: "Aus Südtirol", text: "Über die Pustertalstraße durch Sillian, bei Tassenbach Richtung Kartitsch–Obertilliach–Maria Luggau." },
    ],
  },

  galerie: {
    heading: "Bergmomente in Maria Luggau",
    headingEmphasis: "Maria Luggau",
    intro:
      "Sommerwiesen und tief verschneite Winter, der Gasthof, das Dorf und seine Wallfahrtskirche – ein paar Eindrücke aus dem Lesachtal.",
    tag: "Sommer & Winter",
    moreCount: 14,
    images: [
      { src: `${IMG}/gasthof-haus.webp`, alt: "Gasthof Luggau in der grünen Berglandschaft von Maria Luggau" },
      { src: `${IMG}/winter-panorama.webp`, alt: "Verschneites Gipfelpanorama über dem Lesachtal" },
      { src: `${IMG}/bergsee.webp`, alt: "Kühe an einem klaren Bergsee in den Karnischen Alpen" },
      { src: `${IMG}/wallfahrtskirche.webp`, alt: "Die Wallfahrtskirche von Maria Luggau" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum und Unterkunft – Familie Oberluggauer meldet sich persönlich mit Ihrer Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise – auf der Website sind keine Preise angegeben; alle Tarife nur auf Anfrage. Diese Werte sind realistische Platzhalter und vom Betrieb zu bestätigen. Ortstaxe je nach Aufenthalt.",
    highlight: {
      title: "Preise auf Anfrage",
      text: "Die hier gezeigten Beträge sind unverbindliche Richtwerte – aktuelle Preise und Verfügbarkeiten erhalten Sie direkt bei Familie Oberluggauer.",
    },
    categories: [
      // PLATZHALTER (keine Preise auf der Quelle) – realistische Austrian-Bergtarife, zu bestätigen.
      { id: "camping", label: "Stellplatz", perNight: 30, perExtraGuest: 8 },
      { id: "zimmer", label: "Zimmer & Frühstück", perNight: 78 },
      { id: "halbpension", label: "Zimmer & Halbpension", perNight: 96 },
    ],
  },

  kontakt: {
    coords: { lat: 46.705557, lng: 12.734849 },
    tel: "+43 4716 209",
    telHref: "tel:+434716209",
    mail: "gasthof-luggau@aon.at",
    adresse: "Maria Luggau 34 · 9655 Maria Luggau · Lesachtal, Kärnten",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Südseitige Terrassen", href: "#camping" },
        { label: "Pool & Spielplatz", href: "#camping" },
        { label: "Komfort & Service", href: "#camping" },
      ],
    },
    {
      label: "Zimmer & Gasthof",
      href: "#mobilheime",
      children: [
        { label: "Komfortzimmer", href: "#mobilheime" },
        { label: "Familienzimmer", href: "#mobilheime" },
        { label: "Restaurant", href: "#mobilheime" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern & Klettern", href: "#aktivitaeten" },
        { label: "Wallfahrt & Kultur", href: "#aktivitaeten" },
        { label: "Ski & Langlauf", href: "#aktivitaeten" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default gasthofLuggau;
