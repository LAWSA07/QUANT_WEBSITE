import React, { ReactNode } from "react";
import { cn } from "../utils";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export function BentoGrid({ className = '', children }: BentoGridProps) {
  return (
    <div className={`grid auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  src?: string;
}

export function BentoGridItem({
  title,
  description,
  icon,
  className = '',
  src,
}: BentoGridItemProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md ${className}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          {icon && (
            <div className="mb-3">{icon}</div>
          )}
          <h3 className="mb-2 font-semibold text-xl">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
        {src && (
          <img
            src={src}
            alt={title}
            className="mt-4 h-60 w-full object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
} 