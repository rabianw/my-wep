import { conferencesData } from "@/lib/mock-data";
import { Presentation, MapPin, Calendar, ExternalLink, GraduationCap, Globe, BookOpen } from "lucide-react";

const featuredConferences = [
  {
    id: "fc-acdl-2026",
    shortName: "ACDL 2026",
    fullName: "Advanced Course on Data Science & Machine Learning",
    date: "June 8-12, 2026",
    location: "Certosa di Pontignano, Siena, Italy",
    link: "https://acdl2026.icas.events",
    status: "Attending",
    iconName: "graduationCap",
  },
  {
    id: "fc-iccma-2026",
    shortName: "ICCMA 2026",
    fullName: "4th International Conference: Constructive Mathematical Analysis",
    date: "July 1-2, 2026",
    location: "Online (Selçuk University, Turkey)",
    link: "https://iccma2026.selcuk.edu.tr",
    status: "Attending",
    iconName: "presentation",
  },
  {
    id: "fc-cmmse-2026",
    shortName: "CMMSE 2026",
    fullName: "Computational and Mathematical Methods in Science and Engineering",
    date: "July 2-9, 2026",
    location: "Rota, Cádiz, Spain",
    link: "https://cmmse.usal.es/cmmse2026/welcome",
    status: "Attending",
    iconName: "bookOpen",
  },
  {
    id: "fc-icoml-2026",
    shortName: "ICOML 2026",
    fullName: "International Conference on Optimization and Machine Learning",
    date: "July 27-29, 2026",
    location: "NTNU, Taipei, Taiwan",
    link: "https://www.math.ntnu.edu.tw/workshop/icoml2026/index.php?menu=speakers",
    status: "Invited Speaker",
    iconName: "globe",
  },
];

function getIcon(iconName: string) {
  switch (iconName) {
    case "globe": return <Globe size={28} />;
    case "graduationCap": return <GraduationCap size={28} />;
    case "bookOpen": return <BookOpen size={28} />;
    default: return <Presentation size={28} />;
  }
}

export default function ConferencesPage() {
  // Group past conferences by year
  const conferencesByYear: Record<string, typeof conferencesData> = {};
  conferencesData.forEach((conf) => {
    const year = conf.date;
    if (!conferencesByYear[year]) {
      conferencesByYear[year] = [];
    }
    conferencesByYear[year].push(conf);
  });
  const sortedYears = Object.keys(conferencesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        {/* Featured Conferences Section */}
        <header className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">International Engagement</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">Featured Conferences</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Invited speaker roles at leading international conferences in optimization and machine learning
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {featuredConferences.map((fc) => (
            <a
              key={fc.id}
              href={fc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 rounded-full">
                  {fc.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-5 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(fc.iconName)}
              </div>

              {/* Conference Name */}
              <h3 className="text-xl font-extrabold text-foreground mb-2">{fc.shortName}</h3>
              <p className="text-sm text-muted leading-snug mb-4">{fc.fullName}</p>

              {/* Date & Location */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-1.5 text-sm text-primary font-medium">
                  <Calendar size={14} />
                  <span>{fc.date}</span>
                </div>
                {"location" in fc && fc.location && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted">
                    <MapPin size={12} />
                    <span>{fc.location}</span>
                  </div>
                )}
              </div>

              {/* View link */}
              <div className="mt-4 flex items-center justify-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors">
                <ExternalLink size={12} />
                <span>View Conference</span>
              </div>
            </a>
          ))}
        </div>

        {/* All Conference Presentations */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Conference Presentations</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            40+ International Conference Presentations
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Across Asia, Europe, and America (2005–2025)
          </p>
        </div>

        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year}>
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-extrabold text-primary">{year}</span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted font-medium">{conferencesByYear[year].length} presentation{conferencesByYear[year].length > 1 ? "s" : ""}</span>
              </div>

              <div className="space-y-4">
                {conferencesByYear[year].map((conf) => (
                  <div key={conf.id} className="bg-surface p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="hidden sm:flex shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl items-center justify-center">
                        <Presentation size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{conf.title}</h3>
                        <p className="text-primary font-medium text-sm mb-3">{conf.description}</p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            <span>{conf.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{conf.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
