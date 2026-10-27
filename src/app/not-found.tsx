import React from 'react';
import Link from 'next/link';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
            Error 404
          </span>
          <h1 className="text-2xl font-bold text-white mt-1">Page Not Found</h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            The page you requested could not be located in the Sahaara platform documentation. Please use the navigation links below to return to verified product sections.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <span>Explore Interactive Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
