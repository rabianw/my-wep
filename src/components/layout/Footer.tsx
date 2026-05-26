import Link from "next/link";
import { contactData, profileData } from "@/lib/mock-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-surface py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{profileData.name}</h3>
            <p className="text-muted text-sm mb-4">
              {profileData.title} <br />
              {profileData.institution}
            </p>
            <div className="flex gap-4">
              {profileData.socials.scopus && (
                <a href={profileData.socials.scopus} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                  Scopus
                </a>
              )}
              {profileData.socials.googleScholar && (
                <a href={profileData.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                  Google Scholar
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/publications" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link href="/research-areas" className="hover:text-white transition-colors">Research Areas</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Activities</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic text-sm text-muted space-y-2">
              {contactData.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="mt-4">
                <a href={`mailto:${contactData.email}`} className="hover:text-white transition-colors">{contactData.email}</a>
              </p>
              <p>{contactData.phone}</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-muted/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Academic Research Network</p>
        </div>
      </div>
    </footer>
  );
}
