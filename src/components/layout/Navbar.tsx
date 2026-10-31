"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { navItems, primaryAction } from "@/content/navigation";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
            : "py-2.5 sm:py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[54px] sm:min-h-[62px] lg:min-h-[66px]">
            {/* Logo: Brand emblem + typography for high visibility */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#286497] rounded-md shrink-0"
              aria-label="SG Smart Glass Home"
            >
              <div className="relative w-[52px] sm:w-[60px] lg:w-[66px] h-[46px] sm:h-[52px] lg:h-[56px] transition-transform duration-200 group-hover:scale-[1.03] shrink-0">
                <Image
                  src={siteConfig.logo.primary}
                  alt={siteConfig.logo.alt}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 52px, (max-width: 1024px) 60px, 66px"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#286497] transition-colors leading-none">
                  SG Smart Glass
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wider uppercase mt-1 hidden sm:block">
                  Smart Privacy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-xs"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#286497] font-semibold bg-[#eaf2f8]"
                        : "text-slate-600 hover:text-[#286497] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#286497] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Button
                href={primaryAction.href}
                variant="primary"
                size="md"
                className="hidden sm:inline-flex shadow-xs hover:shadow-sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {primaryAction.label}
              </Button>

              {/* Mobile menu hamburger button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#286497] transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
