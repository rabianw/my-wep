import { achievementsData } from "@/lib/mock-data";
import { Trophy, Award, Star } from "lucide-react";

export default function AchievementsPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Achievements</h1>
          <p className="text-xl text-muted">Awards, grants, and honors recognizing excellence in research and academia.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, idx) => (
            <div key={achievement.id} className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                {idx === 0 ? <Trophy size={24} /> : idx < 3 ? <Star size={24} /> : <Award size={24} />}
              </div>
              <div>
                <span className="inline-block px-2 py-1 bg-muted/10 text-muted text-xs font-semibold uppercase tracking-wider rounded mb-2">
                  {achievement.level}
                </span>
                <h2 className="text-lg font-bold text-foreground mb-1">{achievement.title}</h2>
                <p className="text-sm text-muted">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
