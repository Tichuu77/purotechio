import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'

const faqItems = [
  {
    question: 'What products does PUROTECH offer?',
    answer:
      'PUROTECH offers a range of water solutions including water purifiers and alkaline water ionizers. Each product is designed with modern aesthetics, quality materials, and user-friendly operation in mind. Browse the Products section above to see the current collection.',
  },
  {
    question: 'What is an alkaline water ionizer?',
    answer:
      'An alkaline water ionizer is a device that uses electrolysis to separate water into alkaline and acidic streams, allowing users to access water with an adjusted pH level. It is important to note that ionization is a separate process from water purification. An ionizer alone does not remove contaminants — water purification is typically needed as a separate or combined step.',
  },
  {
    question: 'How do I choose the right product?',
    answer:
      'Choosing the right product depends on your water source, household needs, available space, and preferences. The PUROTECH team can help you understand the differences between products and recommend a suitable option. Use the enquiry form or contact the team for guidance.',
  },
  {
    question: 'How can I enquire about pricing?',
    answer:
      'You can enquire about pricing by using the contact form at the bottom of this page. Please include your name, city, and the product you are interested in, and the PUROTECH team will respond with pricing and availability details.',
  },
  {
    question: 'Where can I find product specifications?',
    answer:
      'Detailed product specifications are available upon request. Please contact the PUROTECH team through the enquiry form and specify which product you would like to learn more about. Technical details, dimensions, and other specifications will be shared directly.',
  },
  {
    question: 'Is installation or maintenance support available?',
    answer:
      'For information about installation options, requirements, and maintenance support, please contact the PUROTECH team directly. They can provide guidance on installation services and ongoing product care based on your location and product.',
  },
  {
    question: 'How can I contact PUROTECH?',
    answer:
      'You can reach the PUROTECH team by filling out the enquiry form on this page or by emailing us directly at Purotech235@gmail.com. Our office address is also listed in the Contact section and footer.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about PUROTECH products and services."
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
