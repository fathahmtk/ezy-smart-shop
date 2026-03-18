import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import AIFeatures from '@/components/AIFeatures';
import NewsletterForm from '@/components/NewsletterForm';
import { getFeaturedProducts, CATEGORIES } from '@/lib/data';

// Category emoji map for visual interest
const CATEGORY_ICONS: Record<string, string> = {
  electronics: '💻',
  clothing: '👕',
  books: '📚',
  'home-garden': '🏡',
  sports: '⚽',
  beauty: '✨',
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              🚀 AI-Powered Shopping
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Shop Smarter,<br />
              <span className="text-blue-200">Not Harder</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
              Discover curated products tailored to your taste. Powered by AI
              recommendations, seamless checkout, and lightning-fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Get Started Free
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm w-full">
            {[
              { value: '12,000+', label: 'Products' },
              { value: '50,000+', label: 'Happy Customers' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '24/7', label: 'AI Support' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-sm text-blue-200 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { Icon: Truck, title: 'Free Shipping', desc: 'On orders over £50' },
              { Icon: RotateCcw, title: '30-Day Returns', desc: 'Hassle-free returns' },
              { Icon: ShieldCheck, title: 'Secure Checkout', desc: 'SSL encrypted payments' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-500 text-sm mt-1">Hand-picked by our team</p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
            <p className="text-gray-500 text-sm mt-1">Explore our wide range of collections</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {CATEGORY_ICONS[cat.slug] || '🛍️'}
                </span>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <AIFeatures />

      {/* Testimonials */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                review: 'The AI recommendations are spot on! Found exactly what I was looking for in seconds.',
                rating: 5,
              },
              {
                name: 'James T.',
                review: 'Super fast delivery and the product quality exceeded my expectations. Will shop again!',
                rating: 5,
              },
              {
                name: 'Priya K.',
                review: "Seamless checkout experience and hassle-free returns. Best online shop I've used.",
                rating: 5,
              },
            ].map(({ name, review, rating }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3">
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{review}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-blue-600 px-4">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Stay in the Loop</h2>
          <p className="text-blue-100 text-sm">
            Get exclusive deals, new arrivals, and AI-curated picks straight to your inbox.
          </p>
          <NewsletterForm />
          <p className="text-xs text-blue-200">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </div>
  );
}
