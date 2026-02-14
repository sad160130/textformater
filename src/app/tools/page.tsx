import { Metadata } from 'next';
import Link from 'next/link';
import { categories, tools, getToolsByCategory } from '@/lib/tools-data';
import ToolCard from '@/components/ToolCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'All Text Tools - 50+ Free Online Text Formatters & Converters',
  description: 'Browse our complete collection of 50+ free online text tools. Case converters, data formatters, encoders, creative generators, and analysis utilities. All browser-based.',
  openGraph: {
    title: 'All Text Tools - 50+ Free Online Tools | textformater.online',
    description: 'Browse 50+ free online text tools for formatting, conversion, and analysis.',
    url: 'https://textformater.online/tools',
  },
  alternates: {
    canonical: 'https://textformater.online/tools',
  },
};

const categoryColorMap: Record<string, { bg: string; text: string; accent: string }> = {
  'case-manipulation': { bg: 'bg-[#ff6b6b]/10', text: 'text-[#ff6b6b]', accent: '#ff6b6b' },
  'data-formatting': { bg: 'bg-[#4ecdc4]/10', text: 'text-[#3dbdb5]', accent: '#4ecdc4' },
  'technical-tools': { bg: 'bg-[#a855f7]/10', text: 'text-[#9333ea]', accent: '#a855f7' },
  'creative-generators': { bg: 'bg-[#ec4899]/10', text: 'text-[#db2777]', accent: '#ec4899' },
  'analysis-utilities': { bg: 'bg-[#fbbf24]/10', text: 'text-[#f59e0b]', accent: '#fbbf24' },
};

export default function ToolsIndexPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'All Tools' }]} />

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-10 relative overflow-hidden shadow-sm">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff6b6b]/10 via-[#a855f7]/10 to-[#4ecdc4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#ff6b6b]/10 to-[#a855f7]/10 rounded-full text-sm font-semibold text-[#a855f7] mb-4">
              {tools.length}+ Free Tools
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Text Tools
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Explore our complete collection of {tools.length}+ free online text tools.
              All tools run directly in your browser for instant results and complete privacy.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => {
                const colors = categoryColorMap[category.slug] || categoryColorMap['case-manipulation'];
                return (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full hover:opacity-80 transition-all text-sm font-medium`}
                  >
                    {category.shortName}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category.slug);
          const colors = categoryColorMap[category.slug] || categoryColorMap['case-manipulation'];
          return (
            <div key={category.slug} className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-10 rounded-full"
                    style={{ backgroundColor: colors.accent }}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.name}
                    </h2>
                    <p className="text-gray-500 mt-0.5">
                      {categoryTools.length} tools available
                    </p>
                  </div>
                </div>
                <Link
                  href={`/category/${category.slug}`}
                  className={`${colors.text} hover:opacity-80 font-medium text-sm flex items-center gap-1 px-4 py-2 ${colors.bg} rounded-full transition-all`}
                >
                  View all
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}

        {/* SEO Content */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mt-14 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b6b]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4ecdc4]/20 rounded-full blur-3xl" />

          <article className="relative prose max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Complete Text Formatting Toolkit
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              textformater.online provides {tools.length}+ free online text tools designed for writers, developers, marketers, students, and anyone who works with text. Every tool runs entirely in your browser, ensuring your data stays private and results appear instantly.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our tools are organized into five categories: <Link href="/category/case-manipulation" className="text-[#ff6b6b] hover:underline">Case Manipulation</Link> for text case conversion, <Link href="/category/data-formatting" className="text-[#4ecdc4] hover:underline">Data Formatting</Link> for cleaning and organizing text, <Link href="/category/technical-tools" className="text-[#a855f7] hover:underline">Technical Tools</Link> for encoding and development tasks, <Link href="/category/creative-generators" className="text-[#ec4899] hover:underline">Creative Generators</Link> for unique text styles, and <Link href="/category/analysis-utilities" className="text-[#fbbf24] hover:underline">Analysis Utilities</Link> for text insights.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you need to convert text to title case, remove duplicate lines, format JSON, generate Zalgo text, or count words, we have the right tool for the job. Start transforming your text today – no downloads, no registration, completely free.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
