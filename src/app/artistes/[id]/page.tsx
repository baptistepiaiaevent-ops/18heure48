import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { artists } from "@/data/artists";
import { releases } from "@/data/releases";
import StreamingLinks from "@/components/ui/StreamingLinks";
import ReleaseCard from "@/components/ui/ReleaseCard";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return artists.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const artist = artists.find((a) => a.id === id);
  if (!artist) return {};
  return {
    title: artist.name,
    description: artist.bio.slice(0, 160),
    openGraph: {
      title: `${artist.name} — 18heure48`,
      description: artist.bio.slice(0, 160),
      images: [{ url: artist.photo }],
    },
  };
}

export default async function ArtistDetailPage({ params }: Props) {
  const { id } = await params;
  const artist = artists.find((a) => a.id === id);
  if (!artist) notFound();

  const artistReleases = releases
    .filter((r) => r.artistIds.includes(artist.id))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      {/* En-tête pleine largeur */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={artist.photo}
          alt={`Photo de ${artist.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10">
          <Link
            href="/artistes"
            className="inline-block text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-6"
          >
            ← Artistes
          </Link>
          <h1 className="font-display font-black text-[clamp(3rem,8vw,7rem)] leading-none uppercase tracking-tight text-white">
            {artist.name}
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Bio et liens */}
          <div className="lg:col-span-1">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-4">
              Biographie
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">{artist.bio}</p>
            <StreamingLinks links={artist.links} />
          </div>

          {/* Sorties */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-8">
              Sorties — {artistReleases.length}
            </h2>
            {artistReleases.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {artistReleases.map((release) => (
                  <ReleaseCard
                    key={release.id}
                    release={release}
                    artists={artists}
                  />
                ))}
              </div>
            ) : (
              <p className="text-muted text-sm">Aucune sortie pour le moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
