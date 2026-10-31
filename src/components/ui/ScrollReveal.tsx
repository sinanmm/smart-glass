"use client";

import React, { useEffect, useRef, ElementType, ReactNode } from "react";
import { usePathname } from "next/navigation";

export interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-up" | "card" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
}

/**
 * ScrollReveal wrapper component for animating any element when it enters the viewport.
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration,
  className = "",
  as: Component = "div",
  style,
  ...props
}: ScrollRevealProps & React.HTMLAttributes<HTMLElement>) {
  const customStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  };

  return (
    <Component
      data-reveal={variant}
      data-reveal-delay={delay > 0 ? delay : undefined}
      className={className}
      style={customStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Global ScrollRevealProvider:
 * Uses a single, high-performance IntersectionObserver to detect elements with [data-reveal]
 * and reveal them with smooth easing as the user scrolls.
 * Also automatically staggers children inside [data-reveal-group] containers.
 */
export function ScrollRevealProvider() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Flag to enable CSS-based reveal styles safely once JS is ready
    document.documentElement.classList.add("js-reveal");

    const handleIntersect: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          // If child inside a group without explicit delay, check for group stagger
          const group = target.closest<HTMLElement>("[data-reveal-group]");
          if (group && !target.dataset.revealDelay) {
            const siblings = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
            const index = siblings.indexOf(target);
            if (index > 0) {
              const stagger = parseInt(group.dataset.revealStagger || "80", 10);
              target.style.transitionDelay = `${index * stagger}ms`;
            }
          }

          target.classList.add("is-revealed");
          obs.unobserve(target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08,
    });

    const observeAll = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.is-revealed)"
      );
      elements.forEach((el) => {
        // Immediate reveal if already clearly in viewport on load
        const rect = el.getBoundingClientRect();
        const isInViewport =
          rect.top < window.innerHeight - 30 && rect.bottom > 0;

        if (isInViewport) {
          // If in viewport, give slight stagger or immediate reveal
          const group = el.closest<HTMLElement>("[data-reveal-group]");
          if (group && !el.dataset.revealDelay) {
            const siblings = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
            const index = siblings.indexOf(el);
            if (index > 0) {
              const stagger = parseInt(group.dataset.revealStagger || "80", 10);
              el.style.transitionDelay = `${index * stagger}ms`;
            }
          }
          requestAnimationFrame(() => {
            el.classList.add("is-revealed");
          });
        } else {
          observerRef.current?.observe(el);
        }
      });
    };

    observeAll();

    // Observe dynamic elements added after client-side transitions
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

