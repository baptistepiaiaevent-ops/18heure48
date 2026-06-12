import type { Metadata } from "next";
import { releases } from "@/data/releases";
import { artists } from "@/data/artists";
import ReleaseCard from "@/components/ui/ReleaseCard";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Toutes les sorties du label 18heure48 : albums, EPs et singles.",
};

export default function CataloguePage() {
  const sorted = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-14">
        <p className="text-muted text-xs uppercase tracking-widest mb-3">
          {releases.length} sorties
        </p>
        <h1 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase tracking-tight leading-none">
          Catalogue
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sorted.map((release) => (
          <ReleaseCard key={release.id} release={release} artists={artists} />
        ))}
      </div>
    </div>
  );
}
