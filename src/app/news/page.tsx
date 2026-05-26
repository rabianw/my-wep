import { newsData } from "@/lib/mock-data";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">News & Activities</h1>
          <p className="text-xl text-muted">Latest updates, announcements, and events.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article key={item.id} className="bg-surface rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <Link href={`/news/${item.slug}`} className="block h-48 overflow-hidden">
                <img 
                  src={item.featuredImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium mb-3">
                  <span className="text-primary bg-primary/10 px-2 py-1 rounded">{item.category}</span>
                  <span className="text-muted flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h2>
                <p className="text-muted text-sm line-clamp-3 mb-6 flex-1">
                  {item.content}
                </p>
                <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light">
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
