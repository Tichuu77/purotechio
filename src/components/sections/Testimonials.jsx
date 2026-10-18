import { MessageSquare } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="bg-slate-50/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="We value every customer's feedback. This section will be updated with genuine customer experiences."
        />

        {/* Placeholder — No fabricated testimonials */}
        <div className="max-w-xl mx-auto">
          <div className="text-center p-10 rounded-2xl border border-dashed border-slate-200 bg-white">
            <div className="w-14 h-14 rounded-2xl bg-water-50 flex items-center justify-center mx-auto mb-5">
              <MessageSquare size={24} className="text-water-500" />
            </div>
            <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">
              Share Your Experience
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Are you a PUROTECH customer? We'd love to hear about your experience. 
              Your feedback helps us improve and helps others make informed decisions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-water-600 hover:text-water-700 transition-colors"
            >
              Contact us to share your story
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
