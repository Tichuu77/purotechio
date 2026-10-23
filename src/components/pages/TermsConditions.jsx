import { ArrowLeft, Scale, Mail, MapPin, FileCheck, AlertTriangle, ShieldCheck } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'

export default function TermsConditions({ onBack }) {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-water-600 hover:text-water-700 transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Header Banner */}
        <div className="navy-gradient text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-aqua-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-aqua-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Scale size={14} />
              Terms of Service
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Terms & Conditions
            </h1>
            <p className="text-navy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              Please read these terms and conditions carefully before using our website or submitting product enquiries.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-navy-300">
              <span>Last updated: October 2026</span>
              <span>•</span>
              <span>PUROTECH Water Solutions</span>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-water-50 text-water-600 flex items-center justify-center shrink-0">
              <FileCheck size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-navy-900 mb-1">Clear Inquiries</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Website form submissions are inquiries for pricing and information, not direct financial charges.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-water-50 text-water-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-navy-900 mb-1">Authentic Products</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                All descriptions represent genuine PUROTECH water purifiers and alkaline water ionizers.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-water-50 text-water-600 flex items-center justify-center shrink-0">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-navy-900 mb-1">Usage Clarity</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Water ionization and purification are distinct processes; our team assists in matching your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">1</span>
              Agreement to Terms
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              These Terms and Conditions constitute a legally binding agreement between you and PUROTECH concerning your access to and use of our website. By accessing or browsing this site, you acknowledge that you have read, understood, and agreed to be bound by these terms.
            </p>
            <p className="text-sm leading-relaxed">
              If you do not agree with any part of these terms, you must discontinue the use of our website immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">2</span>
              Product Descriptions & Technical Clarifications
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              PUROTECH showcases premium water purification systems and alkaline water ionizers. We strive to present all product specifications, images, and capabilities with the utmost accuracy.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
              <li>
                <strong>Ionization vs. Purification:</strong> Water ionization (electrolysis) adjusts water pH and oxidation-reduction potential (ORP), but is distinct from purification (filtration). Water purification is required as a separate or integrated pre-stage depending on your input water source.
              </li>
              <li>
                <strong>Specifications & Imagery:</strong> Product images and visual mockups are displayed for illustrative purposes. Final production models, finishes, dimensions, and technical specifications may be updated or refined.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">3</span>
              Enquiries, Pricing & Orders
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Submitting an enquiry via our website does not constitute a legally binding purchase contract or order confirmation.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5">
              <li>All pricing quotes provided by our sales team are indicative and subject to written confirmation.</li>
              <li>Product availability, delivery timelines, and installation eligibility depend on geographic area and local site conditions.</li>
              <li>Final terms of sale, warranty, and installation agreements will be provided separately upon order finalization.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">4</span>
              Intellectual Property Rights
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              The website and its entire contents, features, and functionality (including but not limited to brand names, logos, text, displays, images, product photos, graphics, and interface designs) are owned by PUROTECH and are protected by applicable intellectual property laws.
            </p>
            <p className="text-sm leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any material from our website without prior written permission from PUROTECH.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">5</span>
              User Conduct & Prohibited Uses
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              You agree to use the website only for lawful purposes. You agree not to:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5">
              <li>Provide false, inaccurate, or misleading information in the enquiry form.</li>
              <li>Attempt to gain unauthorized access to any portion or feature of the website, servers, or networks.</li>
              <li>Transmit any viruses, worms, malware, or destructive code.</li>
              <li>Use any robot, spider, or automated device to extract data without authorization.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">6</span>
              Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
            </p>
            <p className="text-sm leading-relaxed">
              In no event shall PUROTECH, its directors, employees, or agents be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of or inability to use this website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">7</span>
              Governing Law & Jurisdiction
            </h2>
            <p className="text-sm leading-relaxed">
              These terms and conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of or relating to these terms or your use of the website shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">8</span>
              Contact Information
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              For questions, clarifications, or feedback regarding these Terms & Conditions, please contact us:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-water-600 shrink-0" />
                <span className="text-sm text-navy-900 font-medium">
                  Email:{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-water-600 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-water-600 shrink-0 mt-0.5" />
                <span className="text-sm text-navy-900">
                  <strong className="font-medium">Office Address:</strong> {siteConfig.contact.address}
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="md" onClick={onBack}>
            <ArrowLeft size={16} />
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}
