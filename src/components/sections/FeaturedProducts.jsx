import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import { products } from '../../data/products'

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-slate-50/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Meet the PUROTECH Collection"
          subtitle="Explore water solutions designed to complement your home and lifestyle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
