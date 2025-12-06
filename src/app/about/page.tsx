import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About textformater.online - Free Online Text Tools',
  description: 'Learn about textformater.online, our mission to provide free, browser-based text formatting tools, and how we keep your data private.',
  openGraph: {
    title: 'About textformater.online',
    description: 'Free, browser-based text formatting tools that respect your privacy.',
    url: 'https://textformater.online/about',
  },
  alternates: {
    canonical: 'https://textformater.online/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'About' }]} />

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About textformater.online
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              textformater.online is a comprehensive collection of free online text tools designed to help anyone
              who works with text. From writers and developers to students and marketers, our tools make text
              formatting, conversion, and analysis effortless.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that powerful text tools should be accessible to everyone, free of charge, and without
              compromising privacy. Our mission is to provide the best text manipulation utilities on the web,
              all running directly in your browser with zero data collection.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy First</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every tool on textformater.online processes text entirely within your web browser. This means:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Your text never leaves your device</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>We don&apos;t store, log, or have access to your content</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Results appear instantly without network delays</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Works offline once the page is loaded</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Tools</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer over 50 text tools organized into five categories:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>
                <Link href="/category/case-manipulation" className="text-blue-600 hover:underline font-medium">
                  Case Manipulation Tools
                </Link>
                {' '}- Convert text to title case, sentence case, and creative Unicode styles
              </li>
              <li>
                <Link href="/category/data-formatting" className="text-blue-600 hover:underline font-medium">
                  Data Formatting Tools
                </Link>
                {' '}- Clean up text, remove duplicates, sort lines, and format data
              </li>
              <li>
                <Link href="/category/technical-tools" className="text-blue-600 hover:underline font-medium">
                  Technical Tools
                </Link>
                {' '}- Encode/decode URLs and Base64, format JSON/XML, generate hashes
              </li>
              <li>
                <Link href="/category/creative-generators" className="text-blue-600 hover:underline font-medium">
                  Creative Generators
                </Link>
                {' '}- Create Zalgo text, vaporwave, ASCII art, and unique text styles
              </li>
              <li>
                <Link href="/category/analysis-utilities" className="text-blue-600 hover:underline font-medium">
                  Analysis Utilities
                </Link>
                {' '}- Count words, check readability, analyze keywords, and compare text
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Always Free</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All tools on textformater.online are and will always be completely free to use. No registration,
              no premium tiers, no usage limits. We believe in providing value to our users without barriers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions, suggestions, or feedback? We&apos;d love to hear from you!
              Visit our <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link> to
              get in touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
