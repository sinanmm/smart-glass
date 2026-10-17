"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { navItems, primaryAction } from "@/content/navigation";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Trap focus and close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    firstFocusableRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="relative w-[66px] h-[48px]">
              <Image
                src={siteConfig.logo.primary}
                alt={siteConfig.brandName}
                fill
                className="object-contain object-left"
                sizes="66px"
              />
            </div>
          </Link>

          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#286497]"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="px-6 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== "/" && currentPath.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? "bg-[#eaf2f8] text-[#286497] font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#286497]"
                }`}
              >
                <div>
                  <div>{item.label}</div>
                  {item.description && (
                    <span className="text-xs text-slate-400 block font-normal">
                      {item.description}
                    </span>
                  )}
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isActive ? "text-[#286497]" : "text-slate-400"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Contact Info */}
        <div className="p-6 border-t border-slate-100 bg-[#F5F9FB] space-y-4">
          <Button
            href={primaryAction.href}
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-md"
            onClick={onClose}
          >
            {primaryAction.label}
          </Button>

          <div className="pt-2 text-xs text-slate-500 space-y-2">
            <a
              href={`tel:${siteConfig.contact.indiaPrimary.tel}`}
              className="flex items-center gap-2 hover:text-[#286497]"
            >
              <Phone className="w-3.5 h-3.5 text-[#66BEAE]" />
              <span>{siteConfig.contact.indiaPrimary.display}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-[#286497]"
            >
              <Mail className="w-3.5 h-3.5 text-[#66BEAE]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
