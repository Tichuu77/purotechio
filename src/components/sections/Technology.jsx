import { Filter, Zap, Coffee, Monitor } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const techFeatures = [
  {
    icon: Filter,
    title: 'Water Purification',
    description:
      'PUROTECH water purifiers are designed to filter and purify water, helping to remove common contaminants and deliver cleaner water for daily consumption.',
    image:
      'https://res.cloudinary.com/dxujnm2sl/image/upload/v1792335568/PUROTECH_Water_Purifier_on_Wood_pohyhd.png',
  },
  {
    icon: Zap,
    title: 'Alkaline Water Ionization',
    description:
      'PUROTECH alkaline water ionizers use electrolysis to adjust the pH level of water. Note: ionization is a separate process from purification and does not replace water filtration or contaminant removal.',
    image:
      'https://res.cloudinary.com/dxujnm2sl/image/upload/v1792335566/PUROTECH_Alkaline_Water_Ionizer_ayu8td.png',
  },
  {
    icon: Coffee,
    title: 'Convenient Everyday Use',
    description:
      'Designed with daily routines in mind, PUROTECH products aim to make accessing your preferred water simple, quick, and hassle-free.',
    image:
      'https://res.cloudinary.com/dxujnm2sl/image/upload/v1792335566/PUROTECH_Alkaline_Water_Ionizer_1_hbvqh0.png',
  },
  {
    icon: Monitor,
    title: 'Modern Design & Usability',
    description:
      'Every PUROTECH product is built with a focus on clean aesthetics, intuitive controls, and a form factor that complements modern living spaces.',
    image:
      'https://res.cloudinary.com/dxujnm2sl/image/upload/v1792335566/Premium_Purotech_Water_Ionizer_Studio_Shot_f1vavq.png',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="navy-gradient py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Innovation at Every Step"
          subtitle="From purification to design, each aspect of a PUROTECH product is crafted with intention and care."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {techFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-40 lg:w-48 shrink-0 bg-white/5">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-40 sm:h-full object-contain p-4"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-water-500/20 flex items-center justify-center">
                        <Icon size={20} className="text-aqua-300" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-navy-200 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
