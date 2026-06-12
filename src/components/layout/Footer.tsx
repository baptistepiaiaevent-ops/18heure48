import Link from "next/link";

const links = [
  { href: "https://open.spotify.com", label: "Spotify" },
  { href: "https://music.apple.com", label: "Apple Music" },
  { href: "https://bandcamp.com", label: "Bandcamp" },
  { href: "https://soundcloud.com", label: "SoundCloud" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://deezer.com", label: "Deezer" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display font-black text-2xl tracking-widest uppercase text-white mb-3">
              18heure48
            </p>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Label indépendant fondé sur une heure et une conviction : la
              musique commence là où le soleil se couche.
            </p>
          </div>

          <nav aria-label="Liens réseaux et plateformes">
            <p className="text-xs uppercase tracking-widest text-muted mb-4">
              Retrouvez-nous
            </p>
            <ul className="flex flex-wrap gap-4">
              {links.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-muted hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navigation secondaire">
            <p className="text-xs uppercase tracking-widest text-muted mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: "/catalogue", label: "Catalogue" },
                { href: "/artistes", label: "Artistes" },
                { href: "/a-propos", label: "À propos" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs uppercase tracking-widest text-muted hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} 18heure48. Tous droits réservés.
          </p>
          <a
            href="mailto:contact@18heure48.com"
            className="text-muted text-xs hover:text-white transition-colors"
          >
            contact@18heure48.com
          </a>
        </div>
      </div>
    </footer>
  );
}
