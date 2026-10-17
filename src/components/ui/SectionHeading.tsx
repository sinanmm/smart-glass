import { ReactNode } from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "blue" | "teal" | "neutral";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  action?: ReactNode;
}

export function SectionHeading({
  badge,
  badgeVariant = "teal",
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  action,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      <div className={`w-full ${!isCenter && action ? "flex flex-col md:flex-row md:items-end md:justify-between gap-4" : ""}`}>
        <div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#286497] leading-[1.2] ${titleClassName}`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl ${
                isCenter ? "mx-auto" : ""
              } ${descriptionClassName}`}
            >
              {description}
            </p>
          )}
        </div>

        {!isCenter && action && <div className="mt-4 md:mt-0 shrink-0">{action}</div>}
      </div>
    </div>
  );
}
