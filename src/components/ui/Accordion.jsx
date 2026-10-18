import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`border rounded-xl transition-all duration-300 ${
              isOpen ? 'border-water-200 bg-water-50/30 shadow-sm' : 'border-slate-200 bg-white'
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
              aria-expanded={isOpen}
              id={`faq-trigger-${i}`}
              aria-controls={`faq-panel-${i}`}
            >
              <span
                className={`font-heading font-semibold text-[0.95rem] leading-snug pr-4 transition-colors ${
                  isOpen ? 'text-navy-900' : 'text-navy-800 group-hover:text-navy-900'
                }`}
              >
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-water-600' : ''
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
