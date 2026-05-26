"use client";

import { useState, useMemo } from "react";
import { publicationsData } from "@/lib/mock-data";
import { FileText, ExternalLink, FilterX, TrendingUp, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  // Group and sort publication data by year
  const yearData = useMemo(() => {
    const counts: Record<string, number> = {};
    publicationsData.forEach((pub) => {
      const year = pub.date;
      if (year && /^\d{4}$/.test(year)) {
        counts[year] = (counts[year] || 0) + 1;
      }
    });

    return Object.keys(counts)
      .sort()
      .map((year) => ({
        year,
        count: counts[year],
      }));
  }, []);

  // Find maximum publication count to normalize chart heights
  const maxCount = useMemo(() => {
    if (yearData.length === 0) return 1;
    return Math.max(...yearData.map((d) => d.count));
  }, [yearData]);

  // General publication statistics
  const stats = useMemo(() => {
    const total = publicationsData.length;
    const activeYear = yearData.reduce(
      (max, current) => (current.count > max.count ? current : max),
      { year: "-", count: 0 }
    );
    const avg = (total / (yearData.length || 1)).toFixed(1);
    return { total, activeYear, avg };
  }, [yearData]);

  // Filtered publications list
  const filteredPublications = useMemo(() => {
    if (!selectedYear) return publicationsData;
    return publicationsData.filter((pub) => pub.date === selectedYear);
  }, [selectedYear]);

  // Generate gridline levels
  const gridLines = useMemo(() => {
    const steps = 4;
    const lines = [];
    for (let i = 0; i <= steps; i++) {
      lines.push(Math.round((maxCount / steps) * i));
    }
    return Array.from(new Set(lines)).sort((a, b) => a - b);
  }, [maxCount]);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Publications
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Selected peer-reviewed journal articles and conference proceedings displaying research progress and academic contributions.
          </p>
        </header>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <span className="text-sm text-muted block font-medium">Total Publications</span>
              <span className="text-2xl font-bold text-foreground">{stats.total} Papers</span>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-sm text-muted block font-medium">Average / Year</span>
              <span className="text-2xl font-bold text-foreground">{stats.avg} Papers</span>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Award size={24} />
            </div>
            <div>
              <span className="text-sm text-muted block font-medium">Most Productive Year</span>
              <span className="text-2xl font-bold text-foreground">
                {stats.activeYear.year} ({stats.activeYear.count})
              </span>
            </div>
          </div>
        </div>

        {/* Publication Chart Section */}
        <section className="bg-surface p-6 sm:p-8 rounded-3xl border border-border shadow-sm mb-12 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" /> Publication Output over Time
              </h2>
              <p className="text-sm text-muted">Click on any bar to filter publications by that year</p>
            </div>
            {selectedYear && (
              <button
                onClick={() => setSelectedYear(null)}
                className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light bg-primary/5 hover:bg-primary/10 px-3.5 py-1.5 rounded-full transition-all border border-primary/20 cursor-pointer"
              >
                <FilterX size={14} /> Clear Filter
              </button>
            )}
          </div>

          {/* Chart Wrapper with Horizontal Scroll */}
          <div className="relative pl-8 pr-2">
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-border">
              {/* Outer container for the chart - fixed h-64 to accommodate tooltip spacing */}
              <div className="min-w-[640px] h-64 relative px-2">
                
                {/* Gridlines (drawn inside the h-36 bar area, bottom-8 from the container base) */}
                <div className="absolute left-2 right-2 bottom-8 h-36 pointer-events-none">
                  {gridLines.slice().reverse().map((val, idx) => {
                    const pct = (idx / (gridLines.length - 1)) * 100;
                    return (
                      <div
                        key={idx}
                        className="absolute w-full flex items-center border-t border-border/40 h-0"
                        style={{ bottom: `${pct}%` }}
                      >
                        <span className="absolute -left-8 text-[10px] font-bold text-muted w-6 text-right">
                          {val}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Columns Container (matches bottom-8 and height h-36 of active area) */}
                <div className="absolute left-2 right-2 bottom-8 h-36 flex items-end justify-between">
                  {yearData.map((data) => {
                    const isSelected = selectedYear === data.year;
                    const isHovered = hoveredYear === data.year;
                    const heightPercent = maxCount > 0 ? (data.count / maxCount) * 100 : 0;

                    return (
                      <div
                        key={data.year}
                        className="flex-1 flex flex-col items-center justify-end h-full relative z-10 mx-1 max-w-[40px]"
                      >
                        {/* Tooltip on hover (floats inside the top 80px space) */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.95 }}
                              className="absolute bottom-[calc(100%+28px)] bg-secondary text-white text-xs font-bold py-1.5 px-2.5 rounded-lg shadow-xl z-30 whitespace-nowrap pointer-events-none"
                            >
                              {data.count} publications
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-secondary rotate-45" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Display Count above Bar (floats dynamically above the bar) */}
                        <span
                          className={`text-[10px] font-extrabold absolute transition-colors z-20`}
                          style={{ bottom: `calc(${heightPercent}% + 6px)` }}
                        >
                          {data.count}
                        </span>

                        {/* Actual Interactive Bar */}
                        <motion.div
                          onClick={() => setSelectedYear(isSelected ? null : data.year)}
                          onHoverStart={() => setHoveredYear(data.year)}
                          onHoverEnd={() => setHoveredYear(null)}
                          className={`w-full rounded-t-md cursor-pointer transition-all duration-300 relative overflow-hidden`}
                          style={{ height: `${heightPercent}%`, transformOrigin: "bottom" }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <div
                            className={`w-full h-full transition-all duration-300 ${
                              isSelected
                                ? "bg-gradient-to-t from-accent to-accent/90 shadow-md shadow-accent/20 border-t border-accent"
                                : selectedYear
                                ? "bg-primary/20 hover:bg-primary/40 opacity-60"
                                : "bg-gradient-to-t from-primary to-primary-light hover:shadow-sm"
                            }`}
                          />
                          {/* Inner glow effect on hover */}
                          <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>

                        {/* X-Axis Label (Year) - placed below the bottom-8 base */}
                        <span
                          className={`text-xs font-bold absolute top-[calc(100%+6px)] transition-colors ${
                            isSelected
                              ? "text-accent font-extrabold"
                              : isHovered
                              ? "text-primary"
                              : "text-muted"
                          }`}
                        >
                          {data.year}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Publications List Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
            {selectedYear ? `Publications in ${selectedYear}` : "All Publications"}
            <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {filteredPublications.length} papers
            </span>
          </h2>
        </div>

        {/* Publications Cards List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                key={pub.id}
                className="bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-sm hover:border-primary/20 hover:shadow-md transition-all flex gap-6"
              >
                <div className="hidden sm:flex shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl items-center justify-center self-start">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 leading-snug">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-start gap-1.5 group"
                      >
                        {pub.title}
                        <ExternalLink
                          size={16}
                          className="shrink-0 mt-1 text-muted group-hover:text-primary transition-colors"
                        />
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h2>
                  <p className="text-sm text-foreground/80 mb-4 font-medium">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                    <span className="font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10 max-w-full truncate">
                      {pub.journal}
                    </span>
                    <span className="text-muted font-bold flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-muted/40 before:rounded-full before:mr-1.5">
                      {pub.date}
                    </span>
                    {pub.doi && (
                      <span className="text-muted font-medium flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-muted/40 before:rounded-full before:mr-1.5 font-bold">
                        DOI:{" "}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline ml-1 font-semibold text-muted"
                        >
                          {pub.doi}
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
