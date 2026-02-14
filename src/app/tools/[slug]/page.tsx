import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, getRelatedTools, getCategoryBySlug, getAllToolSlugs, Tool } from '@/lib/tools-data';
import { generateToolMetadata, generateToolBreadcrumbs, generateFAQSchema, generateSoftwareApplicationSchema, generateHowToSchema, FAQ } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolCard from '@/components/ToolCard';
import JsonLd from '@/components/JsonLd';
import ToolClient from './ToolClient';
import { toolContent, ContentSection, ToolContentData } from '@/lib/tool-content';

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

// Render a single section as its own card
function renderSection(
  section: ContentSection,
  index: number,
  tool: Tool,
  content: ToolContentData | undefined
) {
  const key = `section-${index}`;

  switch (section.type) {
    case 'intro':
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          <div
            className="text-gray-700 leading-relaxed text-lg [&_p]:mb-4 [&_p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'prose':
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          {section.heading && (
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
          )}
          <div
            className="text-gray-600 leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'table':
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          {section.heading && (
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
          )}
          <div
            className="overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_th]:bg-gray-100 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:border [&_th]:border-gray-200 [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-gray-200 [&_td]:text-gray-600 [&_tr:hover]:bg-gray-50 [&_p]:mt-4 [&_p]:text-gray-600"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'tips':
      return (
        <div key={key} className="bg-emerald-50 rounded-xl border-l-4 border-emerald-500 p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {section.heading}
            </h2>
          )}
          <div
            className="text-emerald-800 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-emerald-700 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:text-emerald-900"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'warning':
      return (
        <div key={key} className="bg-amber-50 rounded-xl border-l-4 border-amber-500 p-8 mt-8">
          <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {section.heading || 'Heads Up'}
          </h2>
          <div
            className="text-amber-800 [&_strong]:text-amber-900 [&_p]:mb-3 [&_p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'history':
      return (
        <div key={key} className="bg-indigo-50 rounded-xl border border-indigo-200 p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {section.heading}
            </h2>
          )}
          <div
            className="text-indigo-800 leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'comparison':
      return (
        <div key={key} className="bg-slate-100 rounded-xl border border-slate-200 p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h2>
          )}
          <div
            className="text-slate-700 [&_ul]:space-y-2 [&_ul]:list-none [&_li]:flex [&_li]:items-start [&_strong]:text-slate-900 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_table]:w-full [&_table]:border-collapse [&_th]:bg-slate-200 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_td]:px-4 [&_td]:py-2 [&_td]:border-t [&_td]:border-slate-200"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'how-to':
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.heading || `How to Use`}
          </h2>
          <ol className="space-y-4">
            {section.steps?.map((step, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'faq-inline':
      return (
        <div key={key} className="bg-blue-50 rounded-xl border border-blue-200 p-8 mt-8">
          <div
            className="text-blue-900 [&_strong]:text-blue-900 [&_p]:mb-2 [&_p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'blockquote':
      return (
        <div key={key} className="mt-8">
          <div
            className="[&_blockquote]:bg-gray-50 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-400 [&_blockquote]:rounded-r-xl [&_blockquote]:p-6 [&_blockquote]:italic [&_blockquote]:text-gray-700 [&_blockquote]:text-lg"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'checklist':
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h2>
          )}
          <div
            className="[&_ul]:space-y-3 [&_li]:flex [&_li]:items-start [&_li]:text-gray-700 [&_li]:before:content-['✓'] [&_li]:before:text-green-500 [&_li]:before:font-bold [&_li]:before:mr-3 [&_li]:before:text-lg"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'code-example':
      return (
        <div key={key} className="bg-gray-900 rounded-xl p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
          )}
          <div
            className="[&_pre]:bg-gray-800 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:font-mono [&_p]:text-gray-300 [&_p]:mb-3"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'use-case-story':
      return (
        <div key={key} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {section.heading}
            </h2>
          )}
          <div
            className="text-purple-900 leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:text-purple-950"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'technical':
      return (
        <div key={key} className="bg-gray-900 rounded-xl p-8 mt-8">
          {section.heading && (
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {section.heading}
            </h2>
          )}
          <div
            className="text-gray-300 leading-relaxed [&_code]:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-emerald-400 [&_code]:font-mono [&_strong]:text-white [&_p]:mb-3 [&_p:last-child]:mb-0 [&_table]:w-full [&_table]:mt-4 [&_th]:text-left [&_th]:text-gray-400 [&_th]:pb-2 [&_td]:py-2 [&_td]:text-gray-300"
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    case 'examples':
      if (!content?.examples || content.examples.length === 0) return null;
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Examples</h2>
          <div className="space-y-6">
            {content.examples.map((example, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{example.title}</h3>
                {example.description && (
                  <p className="text-gray-600 text-sm mb-3">{example.description}</p>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Input:</p>
                    <pre className="bg-white p-3 rounded-lg border text-sm overflow-x-auto whitespace-pre-wrap font-mono">{example.input}</pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Output:</p>
                    <pre className="bg-white p-3 rounded-lg border text-sm overflow-x-auto whitespace-pre-wrap font-mono">{example.output}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'faqs':
      if (!content?.faqs || content.faqs.length === 0) return null;
      return (
        <div key={key} className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-5">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
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

  // FAQs for schema
  const faqs: FAQ[] = content?.faqs || [
    { question: `What is the ${tool.name}?`, answer: tool.shortDescription },
    { question: 'Is this tool free to use?', answer: 'Yes, all tools on textformater.online are completely free.' },
  ];

  // How-to steps for schema
  const howToSteps = ['Paste or type your text', 'View the converted result', 'Copy to clipboard'];

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

          {/* Dynamic Sections - each one is its own card */}
          {content?.sections.map((section, index) =>
            renderSection(section, index, tool, content)
          )}

          {/* Fallback for tools without custom content */}
          {!content?.sections && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the {tool.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The {tool.name} is a free online tool that helps you {tool.shortDescription.toLowerCase()}.
                Part of our {category?.name || 'text tools'} collection, this utility provides instant results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All processing happens in your browser. Your text is never sent to any server.
              </p>
            </div>
          )}

          {/* Related Tools */}
          {!content?.hideRelatedTools && relatedTools.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h2>
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
        </div>
      </div>
    </>
  );
}
