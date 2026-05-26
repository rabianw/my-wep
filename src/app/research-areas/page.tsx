import { researchAreasData } from "@/lib/mock-data";
import { BrainCircuit, LineChart, Target, Code, BookOpen } from "lucide-react";

const getIcon = (name?: string) => {
  switch (name) {
    case "BrainCircuit": return <BrainCircuit className="w-8 h-8" />;
    case "LineChart": return <LineChart className="w-8 h-8" />;
    case "Target": return <Target className="w-8 h-8" />;
    case "Code": return <Code className="w-8 h-8" />;
    default: return <BookOpen className="w-8 h-8" />;
  }
};

export default function ResearchAreasPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Research Areas</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">Exploring the frontiers of mathematics and artificial intelligence.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreasData.map((area) => (
            <div key={area.id} className="bg-surface p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                {getIcon(area.iconName)}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">{area.title}</h2>
              <p className="text-muted mb-6 leading-relaxed">{area.description}</p>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-3">Key Topics</h3>
                <ul className="flex flex-wrap gap-2">
                  {area.topics.map((topic, i) => (
                    <li key={i} className="px-3 py-1 bg-background border border-border text-sm text-foreground/80 rounded-full">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
