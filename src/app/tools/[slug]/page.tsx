import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, getRelatedTools, getCategoryBySlug, getAllToolSlugs } from '@/lib/tools-data';
import { generateToolMetadata, generateToolBreadcrumbs, generateFAQSchema, generateSoftwareApplicationSchema, generateHowToSchema, FAQ } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolCard from '@/components/ToolCard';
import JsonLd from '@/components/JsonLd';
import ToolClient from './ToolClient';
import { toolContent, ContentSection } from '@/lib/tool-content';

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

// Section renderer for dynamic content types
function renderSection(section: ContentSection, index: number) {
  const key = `section-${index}`;

  switch (section.type) {
    case 'prose':
      return (
        <div key={key} className="mb-6">
          {section.heading && (
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.heading}</h3>
          )}
          <div
            className="text-gray-600 leading-relaxed prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'table':
      return (
        <div key={key} className="mb-6">
          {section.heading && (
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.heading}</h3>
          )}
          <div
            className="overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_th]:bg-gray-100 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:border [&_th]:border-gray-200 [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-gray-200 [&_td]:text-gray-600 [&_tr:hover]:bg-gray-50"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'tips':
      return (
        <div key={key} className="mb-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-5">
          {section.heading && (
            <h3 className="text-lg font-semibold text-emerald-800 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {section.heading}
            </h3>
          )}
          <div
            className="text-emerald-700 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-emerald-700"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'warning':
      return (
        <div key={key} className="mb-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5">
          {section.heading && (
            <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {section.heading || 'Warning'}
            </h3>
          )}
          <div
            className="text-amber-700 [&_strong]:text-amber-800"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'history':
      return (
        <div key={key} className="mb-6 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          {section.heading && (
            <h3 className="text-xl font-semibold text-indigo-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {section.heading}
            </h3>
          )}
          <div
            className="text-indigo-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'comparison':
      return (
        <div key={key} className="mb-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
          {section.heading && (
            <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.heading}</h3>
          )}
          <div
            className="text-slate-600 [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_strong]:text-slate-800 [&_strong]:mr-2"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'steps':
      return (
        <div key={key} className="mb-6">
          {section.heading && (
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.heading}</h3>
          )}
          <div
            className="text-gray-600 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-3 [&_li]:pl-2"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'faq-inline':
      return (
        <div key={key} className="mb-6 bg-blue-50 rounded-lg p-5 border border-blue-100">
          {section.heading && (
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{section.heading}</h3>
          )}
          <div
            className="text-blue-800 [&_strong]:text-blue-900"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'blockquote':
      return (
        <div key={key} className="mb-6">
          <div
            className="[&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-gray-50 [&_blockquote]:rounded-r-lg [&_blockquote]:pr-4"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'checklist':
      return (
        <div key={key} className="mb-6">
          {section.heading && (
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.heading}</h3>
          )}
          <div
            className="[&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:before:content-['✓'] [&_li]:before:text-green-500 [&_li]:before:font-bold [&_li]:before:mr-3 text-gray-600"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'code-example':
      return (
        <div key={key} className="mb-6">
          {section.heading && (
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.heading}</h3>
          )}
          <div
            className="[&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:text-sm [&_code]:font-mono"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'use-case-story':
      return (
        <div key={key} className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
          {section.heading && (
            <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {section.heading}
            </h3>
          )}
          <div
            className="text-purple-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    case 'technical-deep-dive':
      return (
        <div key={key} className="mb-6 bg-gray-900 text-gray-100 rounded-xl p-6">
          {section.heading && (
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {section.heading}
            </h3>
          )}
          <div
            className="text-gray-300 leading-relaxed [&_code]:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-emerald-400 [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );

    default:
      return (
        <div key={key} className="mb-6">
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );
  }
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

  // FAQs for schema - use custom or defaults
  const faqs: FAQ[] = content?.faqs || [
    { question: `What is the ${tool.name}?`, answer: tool.shortDescription },
    { question: 'Is this tool free to use?', answer: 'Yes, all tools on textformater.online are completely free to use with no registration required.' },
    { question: 'Is my text data safe?', answer: 'Absolutely. All text processing happens directly in your browser. Your text is never sent to any server, ensuring complete privacy.' },
  ];

  // How-to steps for schema
  const howToSteps = content?.howToUse?.steps?.map(s => s.title) || [
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

          {/* Custom How to Use Section (only if defined and not null) */}
          {content?.howToUse && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {content.howToUse.heading || `How to Use the ${tool.name}`}
              </h2>
              <ol className="space-y-4">
                {content.howToUse.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Dynamic Content Sections */}
          {content?.sections && content.sections.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About the {tool.name}
              </h2>
              {content.sections.map((section, index) => renderSection(section, index))}
            </div>
          )}

          {/* Examples Section (only if examples exist) */}
          {content?.examples && content.examples.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Examples
              </h2>
              <div className="space-y-6">
                {content.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{example.title}</h3>
                    {example.description && (
                      <p className="text-gray-600 text-sm mb-3">{example.description}</p>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Input:</p>
                        <pre className="bg-white p-3 rounded border text-sm overflow-x-auto whitespace-pre-wrap">{example.input}</pre>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Output:</p>
                        <pre className="bg-white p-3 rounded border text-sm overflow-x-auto whitespace-pre-wrap">{example.output}</pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section (only if FAQs exist) */}
          {content?.faqs && content.faqs.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {content.faqs.map((faq, index) => (
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

          {/* Fallback for tools without custom content */}
          {!content?.sections && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
              <article className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About the {tool.name}
                </h2>
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
              </article>
            </div>
          )}

          {/* Related Tools (unless hidden) */}
          {!content?.hideRelatedTools && relatedTools.length > 0 && (
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
          )}

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

          {/* Custom CTA (if specified) */}
          {content?.ctaText && (
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
              <p className="text-lg font-medium">{content.ctaText}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
