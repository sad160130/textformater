'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/lib/tools-data';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#a855f7] to-[#4ecdc4] bg-clip-text text-transparent">
              textformater
            </span>
            <span className="text-gray-400 text-sm group-hover:text-[#4ecdc4] transition-colors">.online</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-[#ff6b6b] transition-colors font-medium">
              Home
            </Link>
            <Link href="/tools" className="text-gray-600 hover:text-[#a855f7] transition-colors font-medium">
              All Tools
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onBlur={() => setTimeout(() => setIsCategoriesOpen(false), 150)}
                className="flex items-center text-gray-600 hover:text-[#4ecdc4] transition-colors font-medium"
              >
                Categories
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
                  {categories.map((category, index) => {
                    const colors = ['#ff6b6b', '#4ecdc4', '#a855f7', '#fbbf24', '#ec4899'];
                    const color = colors[index % colors.length];
                    return (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="block px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors group"
                      >
                        <span
                          className="group-hover:translate-x-1 inline-block transition-transform"
                          style={{ color: 'inherit' }}
                        >
                          <span
                            className="inline-block w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: color }}
                          />
                          {category.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-600 hover:text-[#fbbf24] transition-colors font-medium">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/tools"
              className="bg-gradient-to-r from-[#ff6b6b] to-[#a855f7] text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-semibold hover:-translate-y-0.5"
            >
              Explore Tools
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#ff6b6b] hover:bg-red-50 transition-colors py-3 px-4 rounded-xl font-medium"
              >
                Home
              </Link>
              <Link
                href="/tools"
                className="text-gray-600 hover:text-[#a855f7] hover:bg-purple-50 transition-colors py-3 px-4 rounded-xl font-medium"
              >
                All Tools
              </Link>

              <div className="py-2 px-4">
                <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Categories</p>
                <div className="space-y-1">
                  {categories.map((category, index) => {
                    const colors = ['#ff6b6b', '#4ecdc4', '#a855f7', '#fbbf24', '#ec4899'];
                    const bgColors = ['bg-red-50', 'bg-teal-50', 'bg-purple-50', 'bg-yellow-50', 'bg-pink-50'];
                    const color = colors[index % colors.length];
                    const bgColor = bgColors[index % bgColors.length];
                    return (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className={`block text-gray-600 hover:${bgColor} transition-colors py-2 px-3 rounded-lg`}
                        style={{ '--hover-color': color } as React.CSSProperties}
                      >
                        <span
                          className="inline-block w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: color }}
                        />
                        {category.shortName}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/about"
                className="text-gray-600 hover:text-[#fbbf24] hover:bg-yellow-50 transition-colors py-3 px-4 rounded-xl font-medium"
              >
                About
              </Link>

              <div className="pt-4 px-4">
                <Link
                  href="/tools"
                  className="block bg-gradient-to-r from-[#ff6b6b] to-[#a855f7] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold text-center"
                >
                  Explore All Tools
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
