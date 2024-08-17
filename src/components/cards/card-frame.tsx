// Utils
import { cn } from '@/lib/utils';

// React
import React from 'react';

export interface ICardFrame {
  children: React.ReactNode;
  className?: string;
}

const CardFrame = ({ children, className }: ICardFrame) => {
  return (
    <div
      className={cn(
        'bg-white',
        'rounded-[20px] border-primary border-2 bg-divider px-6 shadow-box-shadow',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardFrame;
