import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { releases } from "@/data/releases";
import { artists } from "@/data/artists";
import StreamingLinks from "@/components/ui/StreamingLinks";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return releases.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const release = releases.find((r) => r.id === id);
  if (!release) return {};
  const releaseArtists = artists.filter((a) =>
    release.artistIds.includes(a.id)
  );
  return {
    title: release.title,
    description: release.description.slice(0, 160),
    openGraph: {
      title: `${release.title} — 18heure48`,
      description: release.description.slice(0, 160),
      images: [{ url: release.cover }],
    },
  };
}

const typeLabels = { single: "Single", ep: "EP", album: "Album" };

export default async function ReleaseDetailPage({ params }: Props) {
  const { id } = await params;
  const release = releases.find((r) => r.id === id);
  if (!release) notFound();

  const releaseArtists = artists.filter((a) =>
    release.artistIds.includes(a.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Link
        href="/catalogue"
        className="inline-block text-xs uppercase tracking-widest text-muted hover:text-white transition-colors mb-12"
      >
        ← Catalogue
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Pochette */}
        <div className="relative aspect-square bg-surface overflow-hidden">
          <Image
            src={release.cover}
            alt={`Pochette de ${release.title}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Infos */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-widest border border-border text-muted px-3 py-1">
              {typeLabels[release.type]}
            </span>
            <span className="text-muted text-xs">
              {new Date(release.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-none uppercase tracking-tight text-white mb-4">
            {release.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {releaseArtists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artistes/${artist.id}`}
                className="text-sm uppercase tracking-widest text-muted hover:text-white transition-colors"
              >
                {artist.name}
              </Link>
            ))}
          </div>

          <p className="text-neutral-400 leading-relaxed mb-10">
            {release.description}
          </p>

          <StreamingLinks links={release.links} />
        </div>
      </div>
    </div>
  );
}
