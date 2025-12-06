import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tools, getToolBySlug, getRelatedTools, getCategoryBySlug, getAllToolSlugs } from '@/lib/tools-data';
import { generateToolMetadata, generateToolBreadcrumbs, generateFAQSchema, generateSoftwareApplicationSchema, generateHowToSchema, FAQ } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolCard from '@/components/ToolCard';
import JsonLd from '@/components/JsonLd';
import ToolClient from './ToolClient';
import { toolContent } from '@/lib/tool-content';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return generateToolMetadata(tool);
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getRelatedTools(tool.slug, 6);
  const content = toolContent[slug];

  const faqs: FAQ[] = content?.faqs || [
    { question: `What is the ${tool.name}?`, answer: tool.shortDescription },
    { question: 'Is this tool free to use?', answer: 'Yes, all tools on textformater.online are completely free to use with no registration required.' },
    { question: 'Is my text data safe?', answer: 'Absolutely. All text processing happens directly in your browser. Your text is never sent to any server, ensuring complete privacy.' },
  ];

  const howToSteps = [
    'Paste or type your text in the input field',
    'Configure any options if available',
    'View the converted result in real-time',
    'Click "Copy Result" to copy to clipboard',
  ];

  return (
    <>
      <JsonLd
        data={[
          generateToolBreadcrumbs(tool),
          generateFAQSchema(faqs),
          generateSoftwareApplicationSchema(tool),
          generateHowToSchema(tool, howToSteps),
        ]}
      />

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { label: category?.shortName || 'Tools', href: `/category/${tool.category}` },
              { label: tool.name },
            ]}
          />

          {/* Tool Interface */}
          <ToolClient tool={tool} />

          {/* How to Use Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Use the {tool.name}
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">Paste or Type Your Text</h3>
                  <p className="text-gray-600 mt-1">
                    Enter the text you want to transform in the input field. You can type directly or paste text from any source.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">Configure Options (If Available)</h3>
                  <p className="text-gray-600 mt-1">
                    Some tools offer additional options to customize the transformation. Adjust these settings as needed.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">View Results in Real-Time</h3>
                  <p className="text-gray-600 mt-1">
                    The converted text appears instantly in the output field. Results update automatically as you type.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  4
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">Copy the Result</h3>
                  <p className="text-gray-600 mt-1">
                    Click the &quot;Copy Result&quot; button to copy the transformed text to your clipboard, ready to paste anywhere.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Examples & Use Cases */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Examples & Use Cases
            </h2>

            {content?.examples ? (
              <div className="space-y-6">
                {content.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">{example.title}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Input:</p>
                        <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">{example.input}</pre>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Output:</p>
                        <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">{example.output}</pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600">
                  The {tool.name} is useful in many scenarios:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Content Writers:</strong> {content?.useCases?.writers || 'Format text for articles, blog posts, and social media content.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Developers:</strong> {content?.useCases?.developers || 'Process and format text data for applications and scripts.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Students:</strong> {content?.useCases?.students || 'Prepare assignments, format citations, and clean up research notes.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Marketers:</strong> {content?.useCases?.marketers || 'Create compelling copy and optimize content for engagement.'}</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* SEO Content */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
            <article className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the {tool.name}
              </h2>
              {content?.longDescription ? (
                <div dangerouslySetInnerHTML={{ __html: content.longDescription }} className="text-gray-600 space-y-4" />
              ) : (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The {tool.name} is a free online tool that helps you {tool.shortDescription.toLowerCase()}.
                    Part of our {category?.name || 'text tools'} collection, this utility provides instant results
                    with a simple, intuitive interface.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Unlike desktop software or complex applications, our {tool.name.toLowerCase()} runs entirely
                    in your web browser. This means your text data never leaves your device – we don&apos;t store,
                    transmit, or have access to any text you process. Your privacy is guaranteed.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The tool works on any device with a modern web browser, including smartphones, tablets,
                    laptops, and desktop computers. No installation required – just visit the page and start
                    converting your text immediately.
                  </p>
                </>
              )}
            </article>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
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

          {/* Related Tools */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((relatedTool) => (
                <ToolCard key={relatedTool.slug} tool={relatedTool} showCategory />
              ))}
            </div>
          </div>

          {/* Back to Category */}
          <div className="mt-8 text-center">
            <Link
              href={`/category/${tool.category}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {category?.name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
