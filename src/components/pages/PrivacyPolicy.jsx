import { ArrowLeft, Shield, Mail, MapPin, Lock, Eye, CheckCircle } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'

export default function PrivacyPolicy({ onBack }) {
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
              <Shield size={14} />
              Legal & Privacy
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-navy-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              At PUROTECH, we value your privacy and are committed to protecting the personal information you share with us.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-navy-300">
              <span>Last updated: October 2026</span>
              <span>•</span>
              <span>Applicable to purotech.in & PUROTECH services</span>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-water-50 text-water-600 flex items-center justify-center shrink-0">
              <Eye size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-navy-900 mb-1">Zero Data Selling</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never sell, rent, or trade your personal details to third-party advertisers.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-water-50 text-water-600 flex items-center justify-center shrink-0">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-navy-900 mb-1">Secure Handling</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your enquiry data is processed securely to answer questions and fulfill requests.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-water-50 text-water-600 flex items-center justify-center shrink-0">
              <CheckCircle size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-navy-900 mb-1">You Are in Control</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                You can request access, corrections, or deletion of your data at any time.
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
              Introduction
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              PUROTECH ("we", "our", or "us") operates this website to provide information about our water purification systems, alkaline water ionizers, and related water solutions. This Privacy Policy outlines the types of information we may collect from you or that you may provide when visiting our website, as well as our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            <p className="text-sm leading-relaxed">
              By accessing or using our website, you agree to this Privacy Policy. If you do not agree with our policies and practices, your choice is not to use our website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">2</span>
              Information We Collect
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              We collect information from and about users of our website in the following ways:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
              <li>
                <strong>Personal Information Provided Directly by You:</strong> When you submit an enquiry, request pricing, or contact our customer team, we may collect your name, email address (<span className="text-navy-900 font-medium">Purotech235@gmail.com</span> recipient), city/location, product of interest, and any message or details you provide in your enquiry.
              </li>
              <li>
                <strong>Automated Device & Usage Information:</strong> When you browse our website, we may collect standard technical details, including your internet protocol (IP) address, browser type, operating system, pages viewed, and referral sources to ensure website functionality and improve usability.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">3</span>
              How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              We use information collected about you or provided by you for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5">
              <li>To respond promptly to your enquiries regarding water purifiers and alkaline water ionizers.</li>
              <li>To provide product specifications, guidance, and pricing quotations.</li>
              <li>To coordinate potential product demonstrations, installation guidance, or support services.</li>
              <li>To maintain, optimize, and improve the user experience and performance of our website.</li>
              <li>To comply with legal obligations and protect against fraudulent or unauthorized activity.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">4</span>
              Disclosure of Your Information
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              We do not sell, rent, trade, or transfer your personal information to outside third parties for their marketing purposes. We may share information only under these limited circumstances:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5">
              <li>
                <strong>Service Providers:</strong> With trusted contractors and service providers who assist us in operating our website, hosting services, or managing customer correspondence, under strict confidentiality agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> To comply with any court order, law, or legal process, or to protect the rights, property, or safety of PUROTECH, our customers, or the public.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">5</span>
              Cookies and Analytics
            </h2>
            <p className="text-sm leading-relaxed">
              Our website may use standard cookies or similar technologies to retain user preferences and analyze general traffic flow. You may set your browser to refuse all or some cookies; however, some parts of the site may become inaccessible or not function properly if cookies are disabled.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">6</span>
              Data Security & Retention
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              We implement reasonable administrative and technical security measures designed to secure your personal information from accidental loss and unauthorized access, alteration, and disclosure.
            </p>
            <p className="text-sm leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying customer service requests and legal compliance requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">7</span>
              Your Rights and Choices
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5">
              <li>Request details on the personal data we hold about you.</li>
              <li>Request corrections or updates to inaccurate information.</li>
              <li>Request deletion of your enquiry records where applicable.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              To exercise any of these rights, please write to us at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-water-600 underline font-medium hover:text-water-700">
                {siteConfig.contact.email}
              </a>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-t border-slate-100 pt-8">
            <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-water-100 text-water-700 text-xs flex items-center justify-center font-bold">8</span>
              Contact Information
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out to us:
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
