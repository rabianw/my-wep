import Link from "next/link";
import { ArrowRight, FileText, Award, BookOpen, Presentation, Calendar, Download, ExternalLink, GraduationCap, MousePointer, ChevronDown } from "lucide-react";
import { profileData, researchAreasData, publicationsData, newsData, conferencesData } from "@/lib/mock-data";

export default function Home() {
  const latestPublications = publicationsData.filter(p => p.featured).slice(0, 3);
  const latestNews = newsData.slice(0, 2);
  const featuredConferences = conferencesData.filter(c => c.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-surface py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Full Professor of Mathematics
            </p>
            <p className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
              Specializing in <span className="text-primary font-medium">Optimization Theory</span>, <span className="text-primary font-medium">Machine Learning</span>, and <span className="text-primary font-medium">Deep Learning</span>
            </p>

            {/* Stats Boxes */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[120px] hover:border-primary/40 transition-colors">
                <span className="text-3xl md:text-4xl font-bold text-primary block">100+</span>
                <span className="text-sm text-white/70">Publications</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-2xl px-6 py-4 text-center min-w-[120px] hover:border-primary/50 transition-colors">
                <span className="text-3xl md:text-4xl font-bold text-primary block">20+</span>
                <span className="text-sm text-white/70">Years<br/>Experience</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[120px] hover:border-primary/40 transition-colors">
                <span className="text-3xl md:text-4xl font-bold text-primary block">10+</span>
                <span className="text-sm text-white/70">Awards</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Link href="/contact" className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-primary/30">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link href="/publications" className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-primary font-semibold rounded-full transition-all border-2 border-primary/50 hover:border-primary flex items-center gap-2">
                View Research
              </Link>
            </div>

            {/* External Links */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto md:mx-0">
              <a href="/CV_Rabian_Wangkeeree.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-medium">
                <Download size={16} className="text-primary" /> Download CV
              </a>
              <a href={profileData.socials.scopus} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-medium">
                <ExternalLink size={16} className="text-primary" /> Scopus Profile
              </a>
              <a href={profileData.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-medium">
                <GraduationCap size={16} className="text-primary" /> Google Scholar
              </a>
              <a href={profileData.socials.mathGenealogy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-medium">
                <ExternalLink size={16} className="text-primary" /> Math Genealogy
              </a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-surface/10 overflow-hidden shadow-2xl shrink-0">
            <img src={profileData.avatarUrl} alt={profileData.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Scroll to Explore */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-white/50 rounded-full" />
          </div>
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-primary text-white py-12 border-y border-primary-light/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            <div className="py-4 sm:py-0 flex flex-col items-center">
              <BookOpen className="h-8 w-8 mb-3 opacity-80" />
              <span className="text-4xl font-bold mb-2">{profileData.impactStats.publications}</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Publications</span>
            </div>
            <div className="py-4 sm:py-0 flex flex-col items-center">
              <Award className="h-8 w-8 mb-3 opacity-80" />
              <span className="text-4xl font-bold mb-2">{profileData.impactStats.yearsExperience}</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Years Experience</span>
            </div>
            <div className="py-4 sm:py-0 flex flex-col items-center">
              <Presentation className="h-8 w-8 mb-3 opacity-80" />
              <span className="text-4xl font-bold mb-2">{profileData.impactStats.awards}</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Major Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Preview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Research Areas</h2>
              <p className="mt-2 text-muted">Core domains of academic exploration</p>
            </div>
            <Link href="/research-areas" className="text-primary hover:text-primary-light flex items-center gap-1 font-medium group">
              View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreasData.slice(0, 4).map((area) => (
              <div key={area.id} className="bg-surface p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{area.title}</h3>
                <p className="text-muted text-sm line-clamp-3">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Featured Publications</h2>
              <p className="mt-2 text-muted">Recent highlighted research articles</p>
            </div>
            <Link href="/publications" className="text-primary hover:text-primary-light flex items-center gap-1 font-medium group">
              View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-6">
            {latestPublications.map((pub) => (
              <div key={pub.id} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-semibold mb-2">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{pub.title}</a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-sm text-foreground/80 mb-2">{pub.authors}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted">
                  <span className="font-medium text-primary">{pub.journal}</span>
                  <span>{pub.date}</span>
                  {pub.doi && <span>DOI: {pub.doi}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout for News & Conferences */}
      <section className="py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Latest News */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold text-foreground">Latest News</h2>
              <Link href="/news" className="text-primary hover:text-primary-light flex items-center gap-1 font-medium text-sm">
                View all
              </Link>
            </div>
            <div className="space-y-6">
              {latestNews.map((item) => (
                <div key={item.id} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                    <img src={item.featuredImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-medium mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {item.date}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted line-clamp-2">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Conferences */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold text-foreground">Featured Conferences</h2>
              <Link href="/conferences" className="text-primary hover:text-primary-light flex items-center gap-1 font-medium text-sm">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {featuredConferences.map((conf) => (
                <div key={conf.id} className="p-4 rounded-xl bg-surface border border-border flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Presentation size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{conf.title}</h3>
                    <p className="text-sm text-muted mb-2">{conf.description}</p>
                    <div className="text-xs font-medium text-primary bg-primary/5 inline-block px-2 py-1 rounded">
                      {conf.date} | {conf.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
