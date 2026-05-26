import { seminarsData } from "@/lib/mock-data";
import { Mic, MapPin, Calendar } from "lucide-react";

export default function SeminarsPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Seminars & Academic Visits</h1>
          <p className="text-xl text-muted">Invited talks and research collaborations at international institutions.</p>
        </header>

        <div className="space-y-6">
          {seminarsData.map((seminar) => (
            <div key={seminar.id} className="bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-primary/10 text-primary p-4 rounded-full shrink-0">
                <Mic size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">{seminar.title}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{seminar.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{seminar.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
