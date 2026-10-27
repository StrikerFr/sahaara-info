import React from 'react';
import { StatusType } from '@/types';

interface StatusBadgeProps {
  status: StatusType | string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getStyles = (st: string) => {
    switch (st) {
      case 'Implemented':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Tested':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/30';
      case 'Experimental':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'In progress':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Planned':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      case 'Requires configuration':
      case 'Requires external setup':
        return 'bg-slate-500/10 text-slate-300 border-slate-500/30';
      case 'Requires real-world validation':
        return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/30';
    }
  };

  const px = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-medium';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${getStyles(status)} ${px}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'Implemented'
            ? 'bg-emerald-400'
            : status === 'Tested'
            ? 'bg-teal-400'
            : status === 'Experimental'
            ? 'bg-purple-400'
            : status === 'In progress'
            ? 'bg-amber-400'
            : status === 'Planned'
            ? 'bg-blue-400'
            : status === 'Requires real-world validation'
            ? 'bg-rose-400'
            : 'bg-slate-400'
        }`}
      />
      {status}
    </span>
  );
};
