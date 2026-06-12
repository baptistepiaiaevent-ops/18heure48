import Link from "next/link";
import Image from "next/image";
import type { Release, Artist } from "@/types";

interface Props {
  release: Release;
  artists: Artist[];
}

const typeLabels: Record<Release["type"], string> = {
  single: "Single",
  ep: "EP",
  album: "Album",
};

export default function ReleaseCard({ release, artists }: Props) {
  const releaseArtists = artists.filter((a) =>
    release.artistIds.includes(a.id)
  );

  return (
    <Link
      href={`/catalogue/${release.id}`}
      className="group block"
      aria-label={`${release.title} par ${releaseArtists.map((a) => a.name).join(", ")}`}
    >
      <div className="relative aspect-square overflow-hidden bg-surface">
        <Image
          src={release.cover}
          alt={`Pochette de ${release.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest border border-white/40 text-white/70 px-2 py-1 backdrop-blur-sm">
          {typeLabels[release.type]}
        </span>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-display font-bold text-white text-lg leading-tight group-hover:opacity-70 transition-opacity">
          {release.title}
        </h3>
        <p className="text-muted text-sm uppercase tracking-wider">
          {releaseArtists.map((a) => a.name).join(", ")}
        </p>
        <p className="text-muted text-xs">
          {new Date(release.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>
    </Link>
  );
}
