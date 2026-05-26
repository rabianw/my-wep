import { profileData } from "@/lib/mock-data";

export default function AboutPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">About Me</h1>
          <p className="text-xl text-muted">{profileData.title}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
            <img 
              src={profileData.avatarUrl} 
              alt={profileData.name} 
              className="w-48 h-48 rounded-2xl object-cover shadow-lg shrink-0"
            />
            <div>
              {profileData.bio.map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Current Positions</h2>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <strong className="block text-foreground">{profileData.position}</strong>
                  <span>{profileData.institution}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <strong className="block text-foreground">Full Professor</strong>
                  <span>Department of Mathematics, Faculty of Science, Naresuan University</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
