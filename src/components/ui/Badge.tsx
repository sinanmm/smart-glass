import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "teal" | "neutral" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "blue",
  size = "md",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-[#eaf2f8] text-[#286497] border border-[#286497]/20",
    teal: "bg-[#edf8f6] text-[#2a8575] border border-[#66BEAE]/30",
    neutral: "bg-slate-100 text-slate-750 border border-slate-200",
    outline: "bg-transparent text-slate-700 border border-slate-300",
  };

  const sizeStyles = {
    sm: "text-[11px] font-semibold px-2.5 py-0.5 tracking-wider uppercase",
    md: "text-xs font-semibold px-3 py-1 tracking-wider uppercase",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
