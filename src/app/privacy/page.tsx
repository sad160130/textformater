import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy - textformater.online',
  description: 'Privacy policy for textformater.online. Learn how we protect your privacy with browser-based text processing.',
  openGraph: {
    title: 'Privacy Policy - textformater.online',
    description: 'Learn how we protect your privacy with browser-based text processing.',
    url: 'https://textformater.online/privacy',
  },
  alternates: {
    canonical: 'https://textformater.online/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">Last updated: December 2024</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At textformater.online, we take your privacy seriously. This Privacy Policy explains how we handle
              information when you use our website and text processing tools.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Text Processing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>All text processing on textformater.online happens entirely within your web browser.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This means:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>The text you enter into our tools is never transmitted to our servers</li>
              <li>We do not store, log, or have access to any text you process</li>
              <li>Your text data remains on your device at all times</li>
              <li>Once you close the browser tab, your text is gone</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We May Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While we don&apos;t collect your text data, we may collect limited technical information to improve our service:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>
                <strong>Usage Analytics:</strong> We may use privacy-respecting analytics to understand which tools
                are most popular and how users navigate the site. This data is aggregated and anonymous.
              </li>
              <li>
                <strong>Technical Information:</strong> Standard web server logs may record your IP address,
                browser type, and pages visited. This is standard for all websites and is not linked to your identity.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use minimal cookies necessary for the website to function. These may include:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Session cookies to maintain your preferences during a visit</li>
              <li>Analytics cookies (if implemented) to understand site usage</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not use cookies for advertising or tracking across other websites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our website may use the following third-party services:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>
                <strong>Hosting Provider:</strong> Our website is hosted on Vercel, which may collect standard
                server logs.
              </li>
              <li>
                <strong>Fonts:</strong> We use Google Fonts, which may collect limited usage data.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since text processing happens in your browser:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Your text data is never at risk from server breaches</li>
              <li>We cannot be compelled to hand over data we don&apos;t have</li>
              <li>Your sensitive text remains under your control</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our tools are designed for general audiences. We do not knowingly collect personal information
              from children under 13. Since our tools don&apos;t collect text data, this is generally not a concern.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify users of any significant
              changes by updating the date at the top of this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
