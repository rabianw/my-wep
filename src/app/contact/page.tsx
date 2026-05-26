import { contactData } from "@/lib/mock-data";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Contact</h1>
          <p className="text-xl text-muted">Get in touch for collaborations, research inquiries, or academic discussions.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <address className="not-italic text-muted">
                    {contactData.address.map((line, i) => <p key={i}>{line}</p>)}
                  </address>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href={`mailto:${contactData.email}`} className="text-primary hover:underline">{contactData.email}</a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted">{contactData.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-surface border border-border rounded-2xl">
              <h3 className="font-bold text-foreground mb-4">Editorial Board Member</h3>
              <ul className="space-y-2 text-sm">
                {contactData.journals.map((j, i) => (
                  <li key={i}>
                    <a href={j.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                      {j.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="How can I help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="button" className="w-full py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-xl flex justify-center items-center gap-2 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
