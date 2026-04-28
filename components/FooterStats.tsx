"use client";
import { useState, useEffect } from "react";
import { GitHubCalendar } from 'react-github-calendar';

export default function FooterStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-40" />; // Returns empty space until ready
  }

  return (
    <footer className="w-full py-20 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">
          Code Activity
        </h3>
        <div className="flex justify-center p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <GitHubCalendar 
            username="Phresy" 
            blockSize={12} 
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </footer>
  );
}