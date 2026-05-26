import { galleryData } from "@/lib/mock-data";

export default function GalleryPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Gallery</h1>
          <p className="text-xl text-muted">A visual record of academic life, conferences, and collaborations.</p>
        </header>

        <div className="space-y-20">
          {galleryData.map((album) => (
            <section key={album.id}>
              <div className="flex items-end justify-between mb-8 border-b border-border pb-4">
                <h2 className="text-2xl font-bold text-foreground">{album.title}</h2>
                {album.date && <span className="text-muted font-medium">{album.date}</span>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {album.images.map((img, idx) => (
                  <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-surface border border-border">
                    <img 
                      src={img} 
                      alt={`${album.title} image ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
