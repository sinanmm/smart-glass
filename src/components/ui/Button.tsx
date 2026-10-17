import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, ReactNode } from "react";
import Link from "next/link";

interface BaseProps {
  variant?: "primary" | "secondary" | "teal" | "outline" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  className?: string;
}

export type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
      })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "right",
      isLoading = false,
      className = "",
      ...restProps
    } = props;

    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

    const sizeStyles = {
      sm: "text-xs tracking-wide px-3.5 py-2 gap-1.5",
      md: "text-sm tracking-wide px-5 py-2.5 gap-2",
      lg: "text-base tracking-wide px-7 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#286497] hover:bg-[#1d4d75] text-white shadow-sm hover:shadow-md focus-visible:ring-[#286497]",
      secondary:
        "bg-white hover:bg-[#F5F9FB] text-[#286497] border border-[#286497]/25 hover:border-[#286497] shadow-xs focus-visible:ring-[#286497]",
      teal:
        "bg-[#66BEAE] hover:bg-[#52ab9a] text-white shadow-sm hover:shadow-md focus-visible:ring-[#66BEAE]",
      outline:
        "bg-transparent hover:bg-black/5 text-[#2D3741] border border-slate-300 hover:border-slate-400 focus-visible:ring-slate-400",
      glass:
        "glass-panel text-[#2D3741] hover:text-[#286497] hover:bg-white/95 shadow-xs hover:shadow-sm focus-visible:ring-[#286497]",
      ghost:
        "bg-transparent hover:bg-slate-100 text-[#2D3741] hover:text-[#286497] focus-visible:ring-[#286497]",
    };

    const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if ("href" in props && typeof props.href === "string") {
      const { href, target, rel, ...anchorProps } = restProps as AnchorHTMLAttributes<HTMLAnchorElement>;
      const isExternal =
        props.href.startsWith("http") ||
        props.href.startsWith("mailto") ||
        props.href.startsWith("tel");

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={props.href}
            className={combinedClasses}
            target={target || (props.href.startsWith("http") ? "_blank" : undefined)}
            rel={rel || (props.href.startsWith("http") ? "noopener noreferrer" : undefined)}
            {...anchorProps}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={props.href}
          className={combinedClasses}
          target={target}
          rel={rel}
          {...anchorProps}
        >
          {content}
        </Link>
      );
    }

    const buttonProps = restProps as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClasses}
        disabled={isLoading || buttonProps.disabled}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
