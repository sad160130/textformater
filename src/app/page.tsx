import Link from 'next/link';
import { categories, tools } from '@/lib/tools-data';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import JsonLd from '@/components/JsonLd';
import { generateWebsiteSchema, generateOrganizationSchema } from '@/lib/seo';
import HomeHero from '@/components/HomeHero';

// Popular tools to feature
const popularToolSlugs = [
  'title-case-converter',
  'remove-line-breaks',
  'word-counter',
  'json-formatter',
  'base64-encoder',
  'remove-duplicate-lines',
];

export default function HomePage() {
  const popularTools = tools.filter(tool => popularToolSlugs.includes(tool.slug));

  return (
    <>
      <JsonLd data={[generateWebsiteSchema(), generateOrganizationSchema()]} />

      {/* Hero Section */}
      <HomeHero />

      {/* Quick Tools Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#ff6b6b]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#4ecdc4]/10 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#ff6b6b]/10 text-[#ff6b6b] rounded-full text-sm font-semibold mb-4">
              Most Popular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Text Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our most-used tools for everyday text formatting and conversion tasks.
              Fast, free, and running entirely in your browser.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} showCategory />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tools"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#a855f7] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold hover:-translate-y-0.5"
            >
              View All 50+ Tools
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#4ecdc4]/10 text-[#3dbdb5] rounded-full text-sm font-semibold mb-4">
              Browse by Category
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Text Tool Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse our comprehensive collection of text tools organized by category.
              Find exactly what you need for your text formatting project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle decorative patterns */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent inline-block">
              Free Online Text Formatting Tools for Everyone
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Welcome to <strong className="text-[#ff6b6b]">textformater.online</strong>, your comprehensive destination for free online text tools.
              Whether you&apos;re a writer perfecting your content, a developer formatting code, a marketer analyzing copy,
              or a student working on assignments, our suite of 50+ browser-based tools makes text manipulation effortless.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#4ecdc4]/20 flex items-center justify-center text-[#4ecdc4]">✓</span>
              Why Choose Our Text Tools?
            </h3>

            <ul className="space-y-4 text-gray-600 mb-6 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">100% Free:</strong> All tools are completely free with no hidden costs or premium tiers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Browser-Based Privacy:</strong> All transformations happen in your browser. Your text never leaves your device.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">No Registration Required:</strong> Start using any tool immediately without creating an account.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Mobile-Friendly:</strong> Every tool works perfectly on smartphones, tablets, and desktops.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Lightning Fast:</strong> Instant results with no waiting for server processing.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">⚡</span>
              Tools for Every Text Task
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Our tools are organized into five main categories to help you find exactly what you need:
            </p>

            <h4 className="text-lg font-medium text-[#ff6b6b] mt-6 mb-3">
              Case Manipulation Tools
            </h4>
            <p className="text-gray-600 mb-4">
              Transform text case with our <Link href="/tools/title-case-converter" className="text-[#ff6b6b] hover:underline font-medium">Title Case Converter</Link>,
              <Link href="/tools/sentence-case-converter" className="text-[#ff6b6b] hover:underline font-medium"> Sentence Case Converter</Link>,
              <Link href="/tools/alternating-case-generator" className="text-[#ff6b6b] hover:underline font-medium"> Alternating Case Generator</Link>,
              and more. Perfect for headlines, social media posts, and creative text effects.
            </p>

            <h4 className="text-lg font-medium text-[#4ecdc4] mt-6 mb-3">
              Data Formatting Tools
            </h4>
            <p className="text-gray-600 mb-4">
              Clean up messy text with tools like <Link href="/tools/remove-line-breaks" className="text-[#3dbdb5] hover:underline font-medium">Remove Line Breaks</Link>,
              <Link href="/tools/remove-duplicate-lines" className="text-[#3dbdb5] hover:underline font-medium"> Remove Duplicate Lines</Link>,
              <Link href="/tools/sort-text-lines" className="text-[#3dbdb5] hover:underline font-medium"> Sort Text Lines</Link>,
              and <Link href="/tools/text-to-csv-converter" className="text-[#3dbdb5] hover:underline font-medium">Text to CSV Converter</Link>.
            </p>

            <h4 className="text-lg font-medium text-[#a855f7] mt-6 mb-3">
              Technical Tools for Developers
            </h4>
            <p className="text-gray-600 mb-4">
              Developers love our <Link href="/tools/json-formatter" className="text-[#9333ea] hover:underline font-medium">JSON Formatter</Link>,
              <Link href="/tools/base64-encoder" className="text-[#9333ea] hover:underline font-medium"> Base64 Encoder/Decoder</Link>,
              <Link href="/tools/url-encoder" className="text-[#9333ea] hover:underline font-medium"> URL Encoder</Link>,
              <Link href="/tools/md5-hash-generator" className="text-[#9333ea] hover:underline font-medium"> MD5 Hash Generator</Link>,
              and code minifiers for CSS and JavaScript.
            </p>

            <h4 className="text-lg font-medium text-[#ec4899] mt-6 mb-3">
              Creative Text Generators
            </h4>
            <p className="text-gray-600 mb-4">
              Stand out on social media with <Link href="/tools/zalgo-text-generator" className="text-[#db2777] hover:underline font-medium">Zalgo Text</Link>,
              <Link href="/tools/vaporwave-text-generator" className="text-[#db2777] hover:underline font-medium"> Vaporwave Text</Link>,
              <Link href="/tools/bubble-text-generator" className="text-[#db2777] hover:underline font-medium"> Bubble Text</Link>,
              and <Link href="/tools/text-to-ascii-art" className="text-[#db2777] hover:underline font-medium">ASCII Art generators</Link>.
            </p>

            <h4 className="text-lg font-medium text-[#f59e0b] mt-6 mb-3">
              Analysis & Utility Tools
            </h4>
            <p className="text-gray-600 mb-4">
              Analyze your content with our <Link href="/tools/word-counter" className="text-[#f59e0b] hover:underline font-medium">Word Counter</Link>,
              <Link href="/tools/readability-score-checker" className="text-[#f59e0b] hover:underline font-medium"> Readability Score Checker</Link>,
              <Link href="/tools/keyword-density-checker" className="text-[#f59e0b] hover:underline font-medium"> Keyword Density Checker</Link>,
              and <Link href="/tools/text-difference-checker" className="text-[#f59e0b] hover:underline font-medium">Text Difference Checker</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#ec4899]/20 flex items-center justify-center text-[#ec4899]">👥</span>
              Who Uses Our Text Tools?
            </h3>

            <ul className="space-y-4 text-gray-600 mb-6 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Content Writers & Bloggers:</strong> Format headlines, clean up pasted text, and analyze readability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Software Developers:</strong> Format JSON/XML, encode/decode data, generate hashes, and minify code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Digital Marketers:</strong> Analyze keyword density, check readability, and create engaging text.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Students & Researchers:</strong> Count words, format citations, and clean up copied text.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] mt-2.5 shrink-0" />
                <span><strong className="text-gray-900">Social Media Managers:</strong> Create eye-catching text with creative generators.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#fbbf24]/20 flex items-center justify-center text-[#fbbf24]">🚀</span>
              Start Transforming Your Text Today
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Ready to make text formatting effortless? Browse our <Link href="/tools" className="text-[#a855f7] hover:underline font-medium">complete tool collection</Link> or
              explore specific <Link href="/category/case-manipulation" className="text-[#ff6b6b] hover:underline font-medium">categories</Link> to find
              the perfect tool for your needs. No downloads, no installations, no registration required.
            </p>
          </article>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b6b]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4ecdc4]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Use <span className="bg-gradient-to-r from-[#ff6b6b] via-[#a855f7] to-[#4ecdc4] bg-clip-text text-transparent">textformater.online</span>?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#ff8e53] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#ff6b6b]/30 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Free</h3>
              <p className="text-gray-400">All tools free forever. No premium tiers or hidden costs.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4ecdc4] to-[#45b7d1] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#4ecdc4]/30 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Private & Secure</h3>
              <p className="text-gray-400">All processing in your browser. Your text never leaves your device.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#a855f7]/30 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Results</h3>
              <p className="text-gray-400">No waiting for servers. Get results as you type.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fbbf24] to-[#f97316] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#fbbf24]/30 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mobile-Friendly</h3>
              <p className="text-gray-400">Works perfectly on any device - phone, tablet, or desktop.</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all font-medium border border-white/20"
            >
              Learn more about us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
