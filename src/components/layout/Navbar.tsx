"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research Areas", href: "/research-areas" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/news" },
  { name: "Seminars", href: "/seminars" },
  { name: "Conferences", href: "/conferences" },
  { name: "Achievements", href: "/achievements" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/collaborators" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Prof. Rabian</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary-light"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2 bg-surface border-b border-border shadow-lg">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted/10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
