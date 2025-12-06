import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Us - textformater.online',
  description: 'Get in touch with the textformater.online team. We welcome feedback, suggestions, and questions about our text tools.',
  openGraph: {
    title: 'Contact Us - textformater.online',
    description: 'Get in touch with the textformater.online team.',
    url: 'https://textformater.online/contact',
  },
  alternates: {
    canonical: 'https://textformater.online/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We&apos;d love to hear from you! Whether you have feedback, suggestions for new tools,
              bug reports, or just want to say hello, feel free to reach out.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Email</h2>
                <p className="text-gray-600 mb-2">
                  For general inquiries and support:
                </p>
                <a href="mailto:hello@textformater.online" className="text-blue-600 hover:underline">
                  hello@textformater.online
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Feature Requests</h2>
                <p className="text-gray-600">
                  Have an idea for a new tool or feature? We&apos;re always looking to expand our toolkit
                  based on user suggestions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is textformater.online really free?</h3>
                <p className="text-gray-600">
                  Yes! All our tools are 100% free to use with no registration, no premium tiers, and no usage limits.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is my text data safe?</h3>
                <p className="text-gray-600">
                  Absolutely. All text processing happens in your browser. We never see, store, or transmit your text.
                  Read our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I use these tools for commercial purposes?</h3>
                <p className="text-gray-600">
                  Yes, you can use our tools for any purpose, including commercial work. The transformed text is yours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">I found a bug. How do I report it?</h3>
                <p className="text-gray-600">
                  Please email us with details about the bug, including which tool, what you were trying to do,
                  and what happened. Screenshots are helpful!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Response Time</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to respond to all inquiries within 1-2 business days. For urgent matters,
              please indicate so in your subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
