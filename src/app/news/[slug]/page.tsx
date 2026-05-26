import { newsData } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

export function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const newsItem = newsData.find((n) => n.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const latestNews = newsData.filter(n => n.id !== newsItem.id).slice(0, 3);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to News
        </Link>

        <article className="bg-surface rounded-3xl overflow-hidden border border-border shadow-sm">
          <div className="h-[400px] w-full relative">
            <img 
              src={newsItem.featuredImage} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              {newsItem.category}
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6 border-b border-border pb-6">
              <div className="flex items-center gap-2 text-muted font-medium">
                <Calendar size={18} />
                <span>{newsItem.date}</span>
              </div>
              <button className="text-muted hover:text-primary transition-colors flex items-center gap-2">
                <Share2 size={18} />
                <span className="hidden sm:inline text-sm font-medium">Share</span>
              </button>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              {newsItem.title}
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>{newsItem.content}</p>
            </div>
            
            {newsItem.gallery && newsItem.gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 border-b border-border pb-2">Event Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {newsItem.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt={`Gallery image ${idx + 1}`} className="rounded-xl w-full h-48 object-cover shadow-sm" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
        
        {latestNews.length > 0 && (
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNews.map(item => (
                <Link key={item.id} href={`/news/${item.slug}`} className="group flex gap-4 bg-surface p-4 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                  <img src={item.featuredImage} alt={item.title} className="w-24 h-24 rounded-xl object-cover shrink-0" />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-primary font-medium mb-1">{item.date}</span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
