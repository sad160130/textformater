import Link from 'next/link';
import { categories, tools } from '@/lib/tools-data';

export default function Footer() {
  const popularTools = tools.slice(0, 6);
  const categoryColors = ['#ff6b6b', '#4ecdc4', '#a855f7', '#fbbf24', '#ec4899'];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b6b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4ecdc4]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#a855f7] to-[#4ecdc4] bg-clip-text text-transparent">
                textformater
              </span>
              <span className="text-gray-500 text-sm">.online</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Free online text tools for formatting, converting, and analyzing text.
              Fast, browser-based utilities that respect your privacy.
            </p>
            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#ff6b6b]" />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#4ecdc4]/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#4ecdc4]" />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#a855f7]/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#ff6b6b] mr-3 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-[#4ecdc4] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#4ecdc4] mr-3 transition-colors" />
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#a855f7] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#a855f7] mr-3 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#fbbf24] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#fbbf24] mr-3 transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mr-3 transition-all group-hover:scale-150"
                      style={{ backgroundColor: categoryColors[index] }}
                    />
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Popular Tools</h3>
            <ul className="space-y-3">
              {popularTools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-gray-400 hover:text-[#4ecdc4] transition-colors text-sm"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} textformater.online. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-[#ff6b6b] text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#4ecdc4] text-sm transition-colors">
                Terms
              </Link>
              <a href="/sitemap.xml" className="text-gray-500 hover:text-[#a855f7] text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
