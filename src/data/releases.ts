import type { Release } from "@/types";

// ── Ajoutez ou modifiez une sortie ici sans toucher aux composants ──
export const releases: Release[] = [
  {
    id: "failles",
    title: "Failles",
    artistIds: ["nour-cerise"],
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    date: "2024-11-08",
    type: "album",
    description: "«Failles» est le premier album de Nour & Cerise, enregistré en deux semaines dans une ancienne usine reconvertie en studio à Montreuil. Neuf titres qui explorent les fractures du quotidien, l'amour comme terrain d'instabilité, et la résilience comme acte de création. Une œuvre qui redéfinit les contours de la pop francophone contemporaine.",
    links: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      deezer: "https://deezer.com",
      bandcamp: "https://bandcamp.com",
    },
  },
  {
    id: "demi-lune",
    title: "Demi-lune",
    artistIds: ["maelis-voss"],
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    date: "2024-06-21",
    type: "ep",
    description: "Premier EP de Maëlis Voss, «Demi-lune» rassemble cinq titres enregistrés entre Lyon et Berlin. Un équilibre parfait entre l'organique et le synthétique, la fragilité et la puissance. La voix de Maëlis y navigue entre le murmure et l'éclat, portée par des arrangements qui semblent flotter hors du temps.",
    links: {
      spotify: "https://open.spotify.com",
      soundcloud: "https://soundcloud.com",
      bandcamp: "https://bandcamp.com",
    },
  },
  {
    id: "obsidienne",
    title: "Obsidienne",
    artistIds: ["kelyan-drift"],
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    date: "2024-09-13",
    type: "single",
    description: "«Obsidienne» est le premier single de Kelyan Drift depuis son installation à Marseille. Un titre de sept minutes qui s'ouvre sur une nappe de synthés caverneuse avant d'exploser en un climax techno d'une précision chirurgicale. La pierre volcanique comme métaphore : fragile en surface, d'une dureté absolue en son cœur.",
    links: {
      spotify: "https://open.spotify.com",
      soundcloud: "https://soundcloud.com",
      youtube: "https://youtube.com",
    },
  },
  {
    id: "territoires",
    title: "Territoires",
    artistIds: ["maelis-voss", "kelyan-drift"],
    cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    date: "2025-02-14",
    type: "single",
    description: "Une rencontre improbable entre Maëlis Voss et Kelyan Drift, née d'une nuit d'improvisation en studio. «Territoires» fusionne la voix spectrale de Maëlis avec les architectures sonores monumentales de Kelyan pour créer quelque chose d'entièrement nouveau : une pop ambient qui habite l'espace comme une sculpture.",
    links: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      deezer: "https://deezer.com",
      youtube: "https://youtube.com",
    },
  },
];
