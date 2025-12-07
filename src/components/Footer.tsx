import Link from 'next/link';
import { categories, tools } from '@/lib/tools-data';

export default function Footer() {
  // Get a few popular tools for footer links
  const popularTools = tools.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-bold text-white">textformater</span>
              <span className="text-gray-500 text-sm">.online</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Free online text tools for formatting, converting, and analyzing text.
              Fast, browser-based utilities that respect your privacy.
            </p>
            <p className="text-gray-500 text-xs">
              Transform text with our{' '}
              <Link href="/tools/title-case-converter" className="text-blue-400 hover:text-blue-300">
                case converters
              </Link>
              ,{' '}
              <Link href="/tools/json-formatter" className="text-blue-400 hover:text-blue-300">
                code formatters
              </Link>
              , and{' '}
              <Link href="/tools/word-counter" className="text-blue-400 hover:text-blue-300">
                text analyzers
              </Link>
              .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-white transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              {popularTools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} textformater.online. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <a href="/sitemap.xml" className="text-gray-500 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
