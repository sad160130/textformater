import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service - textformater.online',
  description: 'Terms of service for using textformater.online free online text tools.',
  openGraph: {
    title: 'Terms of Service - textformater.online',
    description: 'Terms of service for using textformater.online free online text tools.',
    url: 'https://textformater.online/terms',
  },
  alternates: {
    canonical: 'https://textformater.online/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-8">Last updated: December 2024</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing and using textformater.online (&quot;the Service&quot;), you accept and agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              textformater.online provides free online text formatting, conversion, and analysis tools.
              All text processing occurs within your web browser, and we do not store or have access to your text data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of the Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes. You shall not:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Use the Service for any illegal activity</li>
              <li>Attempt to disrupt or interfere with the Service&apos;s functionality</li>
              <li>Attempt to gain unauthorized access to the Service or its systems</li>
              <li>Use automated systems to access the Service in a manner that sends more requests than a human could reasonably produce</li>
              <li>Redistribute or resell the Service without permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by textformater.online
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You retain all rights to the text content you process through our tools. We do not claim any
              ownership of your content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either
              express or implied, including but not limited to:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy or reliability of results</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In no event shall textformater.online, its operators, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of your use of the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You acknowledge that you use the Service at your own risk and are solely responsible for any
              consequences of using the tools and their outputs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Accuracy of Results</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While we strive to provide accurate and reliable tools, we do not guarantee the accuracy,
              completeness, or suitability of any results. You should verify important transformations
              before relying on them for critical purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
              We shall not be liable to you or any third party for any modification, suspension, or
              discontinuation of the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any significant
              changes by updating the date at the top of this page. Your continued use of the Service after
              any changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without
              regard to conflicts of law principles.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
