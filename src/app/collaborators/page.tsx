import { collaboratorsData } from "@/lib/mock-data";
import { Users } from "lucide-react";

export default function CollaboratorsPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Team & Collaborators</h1>
          <p className="text-xl text-muted">Working together to advance mathematical research and AI applications.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {collaboratorsData.map((collaborator) => (
            <div key={collaborator.id} className="bg-surface p-6 rounded-3xl border border-border shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-background shadow-sm bg-muted/10 flex items-center justify-center">
                {collaborator.avatarUrl ? (
                  <img src={collaborator.avatarUrl} alt={collaborator.name} className="w-full h-full object-cover" />
                ) : (
                  <Users className="w-8 h-8 text-muted" />
                )}
              </div>
              <h2 className="text-lg font-bold text-foreground">{collaborator.name}</h2>
              <p className="text-primary font-medium text-sm mb-2">{collaborator.role}</p>
              <p className="text-muted text-sm">{collaborator.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
