import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategoryBySlug, getToolsByCategory } from '@/lib/tools-data';
import { generateCategoryMetadata, generateCategoryBreadcrumbs, generateFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolCard from '@/components/ToolCard';
import JsonLd from '@/components/JsonLd';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return generateCategoryMetadata(category);
}

// Category-specific FAQs
const categoryFaqs: Record<string, { question: string; answer: string }[]> = {
  'case-manipulation': [
    {
      question: 'What is title case?',
      answer: 'Title case is a text format where the first letter of each major word is capitalized. Minor words like "a", "an", "the", "and", "or", etc. are typically left lowercase unless they are the first word. It\'s commonly used for headlines, titles, and headings.',
    },
    {
      question: 'How do I convert text to uppercase or lowercase?',
      answer: 'You can use our case conversion tools to instantly transform text. Simply paste your text into the input field, and the tool will automatically convert it to your desired case format. Results are generated in real-time as you type.',
    },
    {
      question: 'What is alternating case used for?',
      answer: 'Alternating case (aLtErNaTiNg CaSe) is primarily used in memes and social media for conveying sarcasm or mockery. It\'s associated with the SpongeBob "Mocking SpongeBob" meme format and is used to indicate a mocking tone.',
    },
  ],
  'data-formatting': [
    {
      question: 'How do I remove duplicate lines from text?',
      answer: 'Our Remove Duplicate Lines tool automatically identifies and removes repeated lines from your text. Simply paste your text, and the tool will keep only unique lines while maintaining the original order. You can also choose case-sensitive or case-insensitive comparison.',
    },
    {
      question: 'What\'s the difference between removing line breaks and removing empty lines?',
      answer: 'Remove Line Breaks joins all lines into a single continuous text, replacing newline characters with spaces or your chosen separator. Remove Empty Lines keeps the line structure but removes blank lines (lines with no content or only whitespace).',
    },
    {
      question: 'How can I sort text lines alphabetically?',
      answer: 'Use our Sort Text Lines tool to organize your text. You can sort alphabetically (A-Z or Z-A), numerically, or by line length. The tool supports both ascending and descending order.',
    },
  ],
  'technical-tools': [
    {
      question: 'What is URL encoding and why is it needed?',
      answer: 'URL encoding converts special characters into a format that can be safely transmitted in URLs. Characters like spaces, ampersands, and non-ASCII characters are replaced with percent-encoded equivalents (e.g., space becomes %20). This is essential for query strings and API parameters.',
    },
    {
      question: 'What\'s the difference between MD5 and SHA-256?',
      answer: 'Both are hash functions that create fixed-length fingerprints of data. MD5 produces a 128-bit hash and is faster but considered cryptographically broken. SHA-256 produces a 256-bit hash and is currently secure for cryptographic purposes. For security-critical applications, always use SHA-256.',
    },
    {
      question: 'How do I format minified JSON?',
      answer: 'Paste your minified JSON into our JSON Formatter tool. It will automatically parse and pretty-print the JSON with proper indentation. The tool also validates your JSON and highlights any syntax errors.',
    },
  ],
  'creative-generators': [
    {
      question: 'What is Zalgo text and how is it created?',
      answer: 'Zalgo text is text that appears corrupted or glitchy with characters extending above and below the normal text line. It\'s created by adding multiple Unicode combining characters (diacritical marks) to each letter. Our generator lets you control the intensity of the effect.',
    },
    {
      question: 'Will Unicode fancy text work on all platforms?',
      answer: 'Most Unicode text styles work on major platforms including Twitter, Facebook, Instagram, Discord, and WhatsApp. However, some older systems or specific fonts may not display all characters correctly. The text will still be copyable but might appear as boxes or question marks on unsupported systems.',
    },
    {
      question: 'What is vaporwave aesthetic text?',
      answer: 'Vaporwave text uses fullwidth Unicode characters that are wider than normal letters, creating a spaced-out, aesthetic appearance. It\'s associated with the vaporwave music and art movement from the early 2010s and is popular for creating retro-futuristic visuals.',
    },
  ],
  'analysis-utilities': [
    {
      question: 'How accurate is the word counter?',
      answer: 'Our word counter accurately counts words by splitting text on whitespace and filtering empty results. It handles multiple spaces, tabs, and newlines correctly. The tool also provides character count (with and without spaces), sentence count, paragraph count, and estimated reading time.',
    },
    {
      question: 'What is keyword density and why does it matter for SEO?',
      answer: 'Keyword density is the percentage of times a keyword appears compared to the total word count. While there\'s no perfect percentage, extremely high density (keyword stuffing) can harm SEO. Our tool helps you analyze your content to maintain natural keyword usage.',
    },
    {
      question: 'How does the readability score checker work?',
      answer: 'Our readability checker uses established formulas like Flesch-Kincaid and Flesch Reading Ease to analyze text complexity. It considers factors like sentence length, word length, and syllable count to estimate the reading level required to understand the text.',
    },
  ],
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(category.slug);
  const faqs = categoryFaqs[category.slug] || [];

  return (
    <>
      <JsonLd data={[generateCategoryBreadcrumbs(category), generateFAQSchema(faqs)]} />

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { label: 'Categories', href: '/tools' },
              { label: category.name },
            ]}
          />

          {/* Category Header */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {category.description}
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {tools.length} tools available
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All {category.shortName} Tools
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
            <article className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About {category.name}
              </h2>

              {category.slug === 'case-manipulation' && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Text case manipulation is essential for creating professional, consistent content. Whether you&apos;re formatting headlines for articles, standardizing data imports, or creating eye-catching social media posts, our case tools make the process instant and effortless.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our collection includes standard converters like <Link href="/tools/title-case-converter" className="text-blue-600 hover:underline">Title Case</Link> and <Link href="/tools/sentence-case-converter" className="text-blue-600 hover:underline">Sentence Case</Link> for everyday formatting needs. For creative projects, explore our <Link href="/tools/alternating-case-generator" className="text-blue-600 hover:underline">Alternating Case Generator</Link>, <Link href="/tools/upside-down-text-generator" className="text-blue-600 hover:underline">Upside Down Text</Link>, and Unicode text generators that create <Link href="/tools/bold-text-generator-unicode" className="text-blue-600 hover:underline">bold</Link> and <Link href="/tools/italic-text-generator-unicode" className="text-blue-600 hover:underline">italic</Link> text that works anywhere.
                  </p>
                </>
              )}

              {category.slug === 'data-formatting' && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Clean, well-formatted data is crucial for productivity. Our data formatting tools help you quickly clean up text copied from various sources, remove unwanted formatting, and prepare data for import into other applications.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Common tasks like <Link href="/tools/remove-line-breaks" className="text-blue-600 hover:underline">removing line breaks</Link> from PDF text, <Link href="/tools/remove-duplicate-lines" className="text-blue-600 hover:underline">deduplicating lists</Link>, and <Link href="/tools/sort-text-lines" className="text-blue-600 hover:underline">sorting data alphabetically</Link> take just seconds. For developers, tools like <Link href="/tools/remove-html-tags" className="text-blue-600 hover:underline">Remove HTML Tags</Link> and <Link href="/tools/text-to-csv-converter" className="text-blue-600 hover:underline">Text to CSV Converter</Link> streamline data processing workflows.
                  </p>
                </>
              )}

              {category.slug === 'technical-tools' && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Developers and technical professionals rely on encoding, decoding, hashing, and formatting tools daily. Our technical toolkit provides browser-based utilities that keep your data private while delivering instant results.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Essential tools include <Link href="/tools/json-formatter" className="text-blue-600 hover:underline">JSON Formatter</Link> for debugging API responses, <Link href="/tools/base64-encoder" className="text-blue-600 hover:underline">Base64 Encoder/Decoder</Link> for data transfer, and <Link href="/tools/url-encoder" className="text-blue-600 hover:underline">URL Encoder/Decoder</Link> for handling query parameters. Security-focused tools like our <Link href="/tools/sha256-hash-generator" className="text-blue-600 hover:underline">SHA-256 Hash Generator</Link> help with verification and authentication workflows.
                  </p>
                </>
              )}

              {category.slug === 'creative-generators' && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Stand out on social media with unique text styles that capture attention. Our creative generators transform ordinary text into eye-catching formats using Unicode characters that work across most platforms.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Popular choices include <Link href="/tools/zalgo-text-generator" className="text-blue-600 hover:underline">Zalgo Text</Link> for creepy effects, <Link href="/tools/vaporwave-text-generator" className="text-blue-600 hover:underline">Vaporwave Text</Link> for aesthetic vibes, and <Link href="/tools/bubble-text-generator" className="text-blue-600 hover:underline">Bubble Text</Link> for a playful look. The <Link href="/tools/text-to-ascii-art" className="text-blue-600 hover:underline">ASCII Art Generator</Link> creates text banners perfect for code comments and forum signatures.
                  </p>
                </>
              )}

              {category.slug === 'analysis-utilities' && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Understanding your text is just as important as formatting it. Our analysis tools provide insights into word count, readability, keyword usage, and more to help you create better content.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Writers use our <Link href="/tools/word-counter" className="text-blue-600 hover:underline">Word Counter</Link> for tracking article length and <Link href="/tools/readability-score-checker" className="text-blue-600 hover:underline">Readability Score Checker</Link> for ensuring accessible content. SEO professionals rely on the <Link href="/tools/keyword-density-checker" className="text-blue-600 hover:underline">Keyword Density Checker</Link> for optimization. The <Link href="/tools/text-difference-checker" className="text-blue-600 hover:underline">Text Difference Checker</Link> helps compare versions and track changes.
                  </p>
                </>
              )}
            </article>
          </div>

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Categories */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Explore Other Categories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories
                .filter((cat) => cat.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{cat.shortName}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{cat.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
