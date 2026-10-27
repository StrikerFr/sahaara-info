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
        return 'bg-[#245B49]/25 text-[#72D8B0] border-[#245B49]/50';
      case 'Tested':
        return 'bg-[#202B26] text-[#A9C2AE] border-[#A9C2AE]/30';
      case 'Experimental':
        return 'bg-[#261F33] text-[#CBB2E5] border-[#5A4575]/50';
      case 'In progress':
        return 'bg-[#2D2316] text-[#E0A96D] border-[#8A6335]/50';
      case 'Planned':
        return 'bg-[#18252C] text-[#8AC1DF] border-[#365A6E]/50';
      case 'Requires configuration':
      case 'Requires external setup':
        return 'bg-[#1C2521] text-[#95A49B] border-[#34443C]';
      case 'Requires real-world validation':
        return 'bg-[#2B1B1D] text-[#E58C8C] border-[#70353B]/50';
      default:
        return 'bg-[#1C2521] text-[#95A49B] border-[#34443C]';
    }
  };

  const getDotColor = (st: string) => {
    switch (st) {
      case 'Implemented':
        return 'bg-[#72D8B0]';
      case 'Tested':
        return 'bg-[#A9C2AE]';
      case 'Experimental':
        return 'bg-[#CBB2E5]';
      case 'In progress':
        return 'bg-[#E0A96D]';
      case 'Planned':
        return 'bg-[#8AC1DF]';
      case 'Requires real-world validation':
        return 'bg-[#E58C8C]';
      default:
        return 'bg-[#95A49B]';
    }
  };

  const px = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs font-medium';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border tracking-wide ${getStyles(
        status
      )} ${px}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(status)}`} />
      <span>{status}</span>
    </span>
  );
};
