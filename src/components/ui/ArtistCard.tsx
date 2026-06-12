import Link from "next/link";
import Image from "next/image";
import type { Artist } from "@/types";

interface Props {
  artist: Artist;
}

export default function ArtistCard({ artist }: Props) {
  return (
    <Link
      href={`/artistes/${artist.id}`}
      className="group block"
      aria-label={`Voir le profil de ${artist.name}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface">
        <Image
          src={artist.photo}
          alt={`Photo de ${artist.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-bold text-white text-xl leading-tight">
            {artist.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
