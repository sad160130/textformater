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

export default function ToolsIndexPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'All Tools' }]} />

        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Text Tools
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Explore our complete collection of {tools.length}+ free online text tools.
            All tools run directly in your browser for instant results and complete privacy.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                {category.shortName}
              </Link>
            ))}
          </div>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category.slug);
          return (
            <div key={category.slug} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {categoryTools.length} tools
                  </p>
                </div>
                <Link
                  href={`/category/${category.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                >
                  View all
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}

        {/* SEO Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mt-12">
          <article className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Complete Text Formatting Toolkit
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              textformater.online provides {tools.length}+ free online text tools designed for writers, developers, marketers, students, and anyone who works with text. Every tool runs entirely in your browser, ensuring your data stays private and results appear instantly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our tools are organized into five categories: <Link href="/category/case-manipulation" className="text-blue-600 hover:underline">Case Manipulation</Link> for text case conversion, <Link href="/category/data-formatting" className="text-blue-600 hover:underline">Data Formatting</Link> for cleaning and organizing text, <Link href="/category/technical-tools" className="text-blue-600 hover:underline">Technical Tools</Link> for encoding and development tasks, <Link href="/category/creative-generators" className="text-blue-600 hover:underline">Creative Generators</Link> for unique text styles, and <Link href="/category/analysis-utilities" className="text-blue-600 hover:underline">Analysis Utilities</Link> for text insights.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need to convert text to title case, remove duplicate lines, format JSON, generate Zalgo text, or count words, we have the right tool for the job. Start transforming your text today – no downloads, no registration, completely free.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
