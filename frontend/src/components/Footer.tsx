import Link from 'next/link';
import { Zap, Twitter, Instagram, Github, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-bold text-white">
                Ezy<span className="text-blue-400">Smart</span>Shop
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your smart shopping destination, powered by AI recommendations and
              a curated selection of quality products.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Github, href: '#', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/products', label: 'All Products' },
                { href: '/products?category=electronics', label: 'Electronics' },
                { href: '/products?category=clothing', label: 'Clothing' },
                { href: '/products?category=books', label: 'Books' },
                { href: '/products?category=sports', label: 'Sports' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Account
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/auth/signin', label: 'Sign In' },
                { href: '/auth/signup', label: 'Create Account' },
                { href: '/orders', label: 'My Orders' },
                { href: '/cart', label: 'Shopping Cart' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#', label: 'Help Centre' },
                { href: '#', label: 'Shipping Policy' },
                { href: '#', label: 'Returns' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms of Service' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EzySmartShop. All rights reserved.</p>
          <p>Built with Next.js · Tailwind CSS · AI-powered</p>
        </div>
      </div>
    </footer>
  );
}
