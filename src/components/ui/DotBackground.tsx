import { cn } from "@/lib/utils";
import React from "react";

interface DotBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function DotBackground({ className, children, style }: DotBackgroundProps) {
  return (
    <div
      style={style}
      className={cn(
        "relative flex w-full items-center justify-center",
        "bg-background dark:bg-background",
        className
      )}
    >
      {/* Dot pattern using CSS variables for proper theme support */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          // Light mode: gray-400 dots on background
          "[background-image:radial-gradient(var(--gray-400)_1px,transparent_1px)]",
          // Dark mode: gray-600 dots on background
          "dark:[background-image:radial-gradient(var(--gray-600)_1px,transparent_1px)]"
        )}
      />
      
      {/* Radial gradient mask for faded center effect */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "bg-background dark:bg-background",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
          "dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        )}
      />
      
      {/* Content layer */}
      {children && (
        <div className="relative z-10 w-full">
          {children}
        </div>
      )}
    </div>
  );
}

interface DotBackgroundSectionProps {
  className?: string;
  children?: React.ReactNode;
  minHeight?: string;
}

export function DotBackgroundSection({ 
  className, 
  children, 
  minHeight = "50rem" 
}: DotBackgroundSectionProps) {
  return (
    <DotBackground className={className} style={{ minHeight }}>
      {children}
    </DotBackground>
  );
}

export default DotBackground;
