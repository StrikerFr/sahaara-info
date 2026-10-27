import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#17231F] border border-[#273830] text-[#72D8B0] mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#72D8B0]">
            Error 404
          </span>
          <h1 className="text-display text-[#F4F2EA] mt-1">Page Not Found</h1>
          <p className="text-sm text-[#A9C2AE] mt-2 leading-relaxed">
            The page you requested could not be located in the Sahaara platform documentation. Please use the navigation links below to return to verified product sections.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#245B49] hover:bg-[#2e745d] text-[#F4F2EA] font-medium text-xs transition-colors"
          >
            <Home className="w-4 h-4 text-[#72D8B0]" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#17231F] hover:bg-[#202B26] text-[#F4F2EA] font-medium text-xs border border-[#273830] transition-colors"
          >
            <span>Explore Interactive Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

