import {
  Compass,
  Palette,
  LayoutGrid,
  HelpCircle,
  Wrench,
  HeadphonesIcon,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const reasons = [
  {
    icon: Compass,
    title: 'Product-Focused Guidance',
    description:
      'The PUROTECH team is available to help you explore and compare products to find the right fit for your needs.',
  },
  {
    icon: Palette,
    title: 'Modern Product Design',
    description:
      'Every product features clean aesthetics, intuitive controls, and a form factor designed for contemporary spaces.',
  },
  {
    icon: LayoutGrid,
    title: 'Solutions for Everyday Use',
    description:
      'PUROTECH products are designed with daily routines in mind — simple to use and easy to maintain.',
  },
  {
    icon: HelpCircle,
    title: 'Help With Product Selection',
    description:
      'Not sure which product is right? Enquire with the team for personalized recommendations and guidance.',
  },
  {
    icon: Wrench,
    title: 'Installation Information',
    description:
      'Contact the PUROTECH team to learn about installation options and requirements for your chosen product.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Customer Support',
    description:
      'PUROTECH aims to provide responsive support throughout your product ownership experience.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why PUROTECH"
          title="Why Choose PUROTECH?"
          subtitle="Here's what you can expect when you explore PUROTECH water solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 bg-white hover:bg-water-50/30 hover:border-water-100 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-water-600 flex items-center justify-center mb-4 transition-colors duration-500 shadow-md">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
