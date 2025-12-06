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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Text Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most-used tools for everyday text formatting and conversion tasks.
              Fast, free, and running entirely in your browser.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} showCategory />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tools"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Text Tool Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Free Online Text Formatting Tools for Everyone
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to <strong>textformater.online</strong>, your comprehensive destination for free online text tools.
              Whether you&apos;re a writer perfecting your content, a developer formatting code, a marketer analyzing copy,
              or a student working on assignments, our suite of 50+ browser-based tools makes text manipulation effortless.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Why Choose Our Text Tools?
            </h3>

            <ul className="space-y-3 text-gray-600 mb-6">
              <li>
                <strong>100% Free:</strong> All tools are completely free with no hidden costs or premium tiers.
              </li>
              <li>
                <strong>Browser-Based Privacy:</strong> All transformations happen in your browser. Your text never leaves your device.
              </li>
              <li>
                <strong>No Registration Required:</strong> Start using any tool immediately without creating an account.
              </li>
              <li>
                <strong>Mobile-Friendly:</strong> Every tool works perfectly on smartphones, tablets, and desktops.
              </li>
              <li>
                <strong>Lightning Fast:</strong> Instant results with no waiting for server processing.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Tools for Every Text Task
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our tools are organized into five main categories to help you find exactly what you need:
            </p>

            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              Case Manipulation Tools
            </h4>
            <p className="text-gray-600 mb-4">
              Transform text case with our <Link href="/tools/title-case-converter" className="text-blue-600 hover:underline">Title Case Converter</Link>,
              <Link href="/tools/sentence-case-converter" className="text-blue-600 hover:underline"> Sentence Case Converter</Link>,
              <Link href="/tools/alternating-case-generator" className="text-blue-600 hover:underline"> Alternating Case Generator</Link>,
              and more. Perfect for headlines, social media posts, and creative text effects.
            </p>

            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              Data Formatting Tools
            </h4>
            <p className="text-gray-600 mb-4">
              Clean up messy text with tools like <Link href="/tools/remove-line-breaks" className="text-blue-600 hover:underline">Remove Line Breaks</Link>,
              <Link href="/tools/remove-duplicate-lines" className="text-blue-600 hover:underline"> Remove Duplicate Lines</Link>,
              <Link href="/tools/sort-text-lines" className="text-blue-600 hover:underline"> Sort Text Lines</Link>,
              and <Link href="/tools/text-to-csv-converter" className="text-blue-600 hover:underline">Text to CSV Converter</Link>.
            </p>

            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              Technical Tools for Developers
            </h4>
            <p className="text-gray-600 mb-4">
              Developers love our <Link href="/tools/json-formatter" className="text-blue-600 hover:underline">JSON Formatter</Link>,
              <Link href="/tools/base64-encoder" className="text-blue-600 hover:underline"> Base64 Encoder/Decoder</Link>,
              <Link href="/tools/url-encoder" className="text-blue-600 hover:underline"> URL Encoder</Link>,
              <Link href="/tools/md5-hash-generator" className="text-blue-600 hover:underline"> MD5 Hash Generator</Link>,
              and code minifiers for CSS and JavaScript.
            </p>

            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              Creative Text Generators
            </h4>
            <p className="text-gray-600 mb-4">
              Stand out on social media with <Link href="/tools/zalgo-text-generator" className="text-blue-600 hover:underline">Zalgo Text</Link>,
              <Link href="/tools/vaporwave-text-generator" className="text-blue-600 hover:underline"> Vaporwave Text</Link>,
              <Link href="/tools/bubble-text-generator" className="text-blue-600 hover:underline"> Bubble Text</Link>,
              and <Link href="/tools/text-to-ascii-art" className="text-blue-600 hover:underline">ASCII Art generators</Link>.
            </p>

            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              Analysis & Utility Tools
            </h4>
            <p className="text-gray-600 mb-4">
              Analyze your content with our <Link href="/tools/word-counter" className="text-blue-600 hover:underline">Word Counter</Link>,
              <Link href="/tools/readability-score-checker" className="text-blue-600 hover:underline"> Readability Score Checker</Link>,
              <Link href="/tools/keyword-density-checker" className="text-blue-600 hover:underline"> Keyword Density Checker</Link>,
              and <Link href="/tools/text-difference-checker" className="text-blue-600 hover:underline">Text Difference Checker</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Who Uses Our Text Tools?
            </h3>

            <ul className="space-y-3 text-gray-600 mb-6">
              <li>
                <strong>Content Writers & Bloggers:</strong> Format headlines, clean up pasted text, and analyze readability.
              </li>
              <li>
                <strong>Software Developers:</strong> Format JSON/XML, encode/decode data, generate hashes, and minify code.
              </li>
              <li>
                <strong>Digital Marketers:</strong> Analyze keyword density, check readability, and create engaging text.
              </li>
              <li>
                <strong>Students & Researchers:</strong> Count words, format citations, and clean up copied text.
              </li>
              <li>
                <strong>Social Media Managers:</strong> Create eye-catching text with creative generators.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Start Transforming Your Text Today
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Ready to make text formatting effortless? Browse our <Link href="/tools" className="text-blue-600 hover:underline">complete tool collection</Link> or
              explore specific <Link href="/category/case-manipulation" className="text-blue-600 hover:underline">categories</Link> to find
              the perfect tool for your needs. No downloads, no installations, no registration required.
            </p>
          </article>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Use textformater.online?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">100% Free</h3>
              <p className="text-blue-100">All tools free forever. No premium tiers or hidden costs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Private & Secure</h3>
              <p className="text-blue-100">All processing in your browser. Your text never leaves your device.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-blue-100">No waiting for servers. Get results as you type.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile-Friendly</h3>
              <p className="text-blue-100">Works perfectly on any device - phone, tablet, or desktop.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center text-white hover:text-blue-100 transition-colors"
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
