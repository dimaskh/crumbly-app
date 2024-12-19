"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when pathname changes (navigation occurs)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    const baseClasses =
      "relative text-gray-800 hover:text-gray-600 transition-colors";
    if (pathname === path) {
      return `${baseClasses} after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-0.5 after:bg-gray-800`;
    }
    return baseClasses;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl text-gray-800 hover:opacity-80 transition-opacity"
          >
            Crumbly
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/recipes" className={isActive("/recipes")}>
              Recipes
            </Link>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className={`${isActive(
                "/"
              )} block px-2 py-1 rounded-lg hover:bg-gray-100`}
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className={`${isActive(
                "/recipes"
              )} block px-2 py-1 rounded-lg hover:bg-gray-100`}
            >
              Recipes
            </Link>
            <Link
              href="/about"
              className={`${isActive(
                "/about"
              )} block px-2 py-1 rounded-lg hover:bg-gray-100`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
