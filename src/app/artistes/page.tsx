import type { Metadata } from "next";
import { artists } from "@/data/artists";
import ArtistCard from "@/components/ui/ArtistCard";

export const metadata: Metadata = {
  title: "Artistes",
  description:
    "Découvrez tous les artistes du label 18heure48.",
};

export default function ArtistesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-14">
        <p className="text-muted text-xs uppercase tracking-widest mb-3">
          {artists.length} artistes
        </p>
        <h1 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase tracking-tight leading-none">
          Artistes
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
