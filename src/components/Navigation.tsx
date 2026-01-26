"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";

interface NavigationProps {
  onReserveClick: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
];

export function Navigation({ onReserveClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 h-20 lg:h-20
          flex items-center justify-between
          px-6 lg:px-12
          z-[var(--z-sticky)]
          transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
          ${isScrolled ? "bg-[var(--color-cream)] shadow-[var(--shadow-sm)]" : "bg-[var(--color-cream)]"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="w-10 h-10 text-[var(--color-amber)]"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S6 27.732 6 20 12.268 6 20 6z" />
            <path d="M20 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
            <circle cx="20" cy="20" r="4" />
          </svg>
          <span className="font-display text-xl font-bold text-[var(--color-charcoal)]">
            Oak & Barrel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative font-body text-base font-medium
                py-2 px-1
                transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
                ${pathname === link.href
                  ? "text-[var(--color-amber)]"
                  : "text-[var(--color-charcoal)] hover:text-[var(--color-amber)]"
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-0 after:h-0.5 after:bg-[var(--color-amber)]
                after:transition-all after:duration-[var(--duration-normal)] after:ease-[var(--ease-smooth)]
                ${pathname === link.href ? "after:w-full" : "hover:after:w-full"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button onClick={onReserveClick}>Reserve a Table</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-[var(--color-sand)] transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-[var(--color-charcoal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Backdrop */}
      <div
        className={`
          fixed inset-0 bg-[var(--color-charcoal)]/50
          z-[calc(var(--z-modal)-1)]
          transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
          lg:hidden
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 w-full max-w-xs
          bg-[var(--color-cream)]
          z-[var(--z-modal)]
          transform transition-transform duration-[var(--duration-slow)] ease-[var(--ease-swift)]
          lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-sand)]">
          <span className="font-display text-lg font-bold text-[var(--color-charcoal)]">
            Menu
          </span>
          <button
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[var(--color-sand)] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-[var(--color-charcoal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                font-display text-2xl font-medium
                py-3 border-b border-[var(--color-sand)]
                transition-colors duration-[var(--duration-fast)]
                ${pathname === link.href
                  ? "text-[var(--color-amber)]"
                  : "text-[var(--color-charcoal)] hover:text-[var(--color-amber)]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-8">
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
