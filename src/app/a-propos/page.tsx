import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "L'histoire et la vision de 18heure48, label de musique indépendant.",
};

export default function AProposPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20">
        <p className="text-muted text-xs uppercase tracking-widest mb-3">
          Le label
        </p>
        <h1 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase tracking-tight leading-none">
          À propos
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Histoire */}
        <div>
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-6">
            Notre histoire
          </h2>
          <div className="space-y-5 text-neutral-400 leading-relaxed">
            <p>
              18heure48 est né un soir d'automne 2019, au moment précis où le
              soleil disparaissait derrière les toits parisiens. Ses fondateurs,
              réunis autour d'un amour commun pour la musique qui résiste aux
              classifications, ont décidé de créer un espace dédié aux artistes
              qui construisent leurs propres langages.
            </p>
            <p>
              Le nom vient de cette heure suspendue entre le jour et la nuit —
              l'heure bleue, l'heure dorée, l'heure des possibles. C'est dans
              cet entre-deux que naît la musique du label : ni tout à fait folk,
              ni tout à fait électronique, ni tout à fait pop. Une musique qui
              habite le territoire de l'entre-deux.
            </p>
            <p>
              Depuis ses débuts, 18heure48 a accompagné une poignée d'artistes
              qui partagent cette même conviction : la forme doit servir
              l'émotion, et l'émotion doit bousculer les attentes.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div>
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-6">
            Notre vision
          </h2>
          <div className="space-y-5 text-neutral-400 leading-relaxed">
            <p>
              Nous croyons que les meilleurs disques sont ceux qui surprennent à
              chaque écoute. Ceux qui révèlent un nouveau détail à chaque
              passage, qui changent de couleur selon la lumière du jour ou
              l'état dans lequel on les écoute.
            </p>
            <p>
              Notre rôle n'est pas d'orienter la création — c'est de créer les
              conditions dans lesquelles elle peut s'épanouir. Nous travaillons
              avec des artistes sur le long terme, en leur donnant le temps et
              l'espace nécessaires pour construire une œuvre cohérente.
            </p>
            <p>
              L'indépendance n'est pas une contrainte pour nous. C'est une
              liberté que nous défendons comme condition de l'exigence.
            </p>
          </div>
        </div>
      </div>

      {/* Chiffres */}
      <div className="mt-20 pt-16 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "2019", label: "Fondé en" },
          { value: "3", label: "Artistes" },
          { value: "4", label: "Sorties" },
          { value: "Paris", label: "Basé à" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="font-display font-black text-4xl text-white mb-1">
              {value}
            </p>
            <p className="text-muted text-xs uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-20 pt-16 border-t border-border">
        <h2 className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-6">
          Contact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">
              Général
            </p>
            <a
              href="mailto:contact@18heure48.com"
              className="text-white hover:opacity-70 transition-opacity text-sm"
            >
              contact@18heure48.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">
              Presse & booking
            </p>
            <a
              href="mailto:presse@18heure48.com"
              className="text-white hover:opacity-70 transition-opacity text-sm"
            >
              presse@18heure48.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">
              Démos
            </p>
            <a
              href="mailto:demos@18heure48.com"
              className="text-white hover:opacity-70 transition-opacity text-sm"
            >
              demos@18heure48.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
