import Link from "next/link";
import Image from "next/image";
import { artists } from "@/data/artists";
import { releases } from "@/data/releases";
import ReleaseCard from "@/components/ui/ReleaseCard";
import ArtistCard from "@/components/ui/ArtistCard";

export default function HomePage() {
  const latestReleases = [...releases]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-end pb-20 px-6 overflow-hidden">
        {/* Fond avec image floue */}
        <div className="absolute inset-0 z-0">
          <Image
            src={releases[0].cover}
            alt=""
            fill
            priority
            className="object-cover opacity-20 blur-sm scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-muted text-xs uppercase tracking-widest mb-6">
            Label indépendant · Paris
          </p>
          <h1 className="font-display font-black text-[clamp(3rem,10vw,8rem)] leading-none uppercase tracking-tight text-white">
            18heure48
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-xl leading-relaxed">
            Là où la lumière cède la place au son. Un label pour les artistes
            qui construisent leurs propres territoires.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/catalogue"
              className="inline-block px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors"
            >
              Découvrir le catalogue
            </Link>
            <Link
              href="/artistes"
              className="inline-block px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Les artistes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Dernières sorties ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display font-black text-3xl uppercase tracking-tight">
            Dernières sorties
          </h2>
          <Link
            href="/catalogue"
            className="text-xs uppercase tracking-widest text-muted hover:text-white transition-colors"
          >
            Tout voir →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestReleases.map((release) => (
            <ReleaseCard
              key={release.id}
              release={release}
              artists={artists}
            />
          ))}
        </div>
      </section>

      {/* ── Séparateur ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* ── Artistes ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display font-black text-3xl uppercase tracking-tight">
            Nos artistes
          </h2>
          <Link
            href="/artistes"
            className="text-xs uppercase tracking-widest text-muted hover:text-white transition-colors"
          >
            Tout voir →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* ── CTA À propos ── */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-2xl uppercase tracking-tight mb-3">
              Le label
            </h2>
            <p className="text-muted max-w-lg leading-relaxed">
              18heure48 — l'heure où la lumière devient or. Un espace pour une
              musique qui ne rentre dans aucune case.
            </p>
          </div>
          <Link
            href="/a-propos"
            className="shrink-0 inline-block px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Notre histoire
          </Link>
        </div>
      </section>
    </>
  );
}
