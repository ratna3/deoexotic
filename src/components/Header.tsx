'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Sun, Moon, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { totalItems } = useCartStore();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass backdrop-blur-md shadow-luxury"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-col">
                <h1 className="font-playfair font-bold text-2xl lg:text-3xl text-amber-deep dark:text-gold leading-none">
                  Deo Exotic
                </h1>
                <p className="text-xs text-forest dark:text-green-400 font-medium tracking-wide">
                  ATTAR & PERFUME
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-amber-deep dark:hover:text-gold transition-colors duration-200 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 rounded-full hover:bg-cream dark:hover:bg-gray-800 transition-colors duration-200">
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-cream dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              {/* Shopping cart */}
              <Link
                href="/cart"
                className="relative p-2 rounded-full hover:bg-cream dark:hover:bg-gray-800 transition-colors duration-200 group"
              >
                <ShoppingBag className="w-5 h-5 text-foreground group-hover:text-amber-deep dark:group-hover:text-gold transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-deep text-cream text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Link>

              {/* Shop Now CTA */}
              <Link
                href="/collections"
                className="hidden lg:flex items-center px-6 py-2 bg-gradient-to-r from-amber-deep to-gold text-cream rounded-full font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-cream dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass backdrop-blur-md border-t border-amber-deep/20">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:text-amber-deep dark:hover:text-gold transition-colors duration-200 font-medium py-2 border-b border-cream/20 last:border-b-0"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/collections"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-deep to-gold text-cream rounded-full font-medium hover:shadow-glow transition-all duration-300 mt-4"
                >
                  Shop Now
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;