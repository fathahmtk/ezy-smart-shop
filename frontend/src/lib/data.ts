import { Category, Order, Product } from '@/types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics' },
  { id: '2', name: 'Clothing', slug: 'clothing' },
  { id: '3', name: 'Books', slug: 'books' },
  { id: '4', name: 'Home & Garden', slug: 'home-garden' },
  { id: '5', name: 'Sports', slug: 'sports' },
  { id: '6', name: 'Beauty', slug: 'beauty' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    slug: 'wireless-noise-cancelling-headphones',
    description:
      'Experience premium audio with 30-hour battery life, adaptive noise cancellation, and foldable design. Perfect for travel, work, and everyday listening.',
    price: 149.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
    ],
    category: 'electronics',
    tags: ['audio', 'wireless', 'noise-cancelling'],
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    slug: 'smart-watch-series-x',
    description:
      'Track fitness, receive notifications, and monitor health metrics with this sleek smartwatch. Features GPS, heart-rate monitoring, and a 5-day battery.',
    price: 299.99,
    originalPrice: 399.99,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
    ],
    category: 'electronics',
    tags: ['wearable', 'fitness', 'smartwatch'],
    rating: 4.6,
    reviewCount: 1872,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Ultra HD 4K Portable Projector',
    slug: 'ultra-hd-4k-portable-projector',
    description:
      'Bring the cinema home with this compact 4K projector. Supports HDMI, USB, and wireless casting. 200" display capability and built-in speakers.',
    price: 449.99,
    images: [
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500',
    ],
    category: 'electronics',
    tags: ['projector', '4k', 'home-cinema'],
    rating: 4.5,
    reviewCount: 543,
    inStock: true,
    featured: false,
  },
  {
    id: '4',
    name: 'Classic Slim-Fit Chino Pants',
    slug: 'classic-slim-fit-chino-pants',
    description:
      'Versatile slim-fit chinos crafted from stretch cotton. Available in multiple colours — ideal for office or casual wear.',
    price: 59.99,
    originalPrice: 79.99,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500',
    ],
    category: 'clothing',
    tags: ['pants', 'casual', 'office'],
    rating: 4.4,
    reviewCount: 987,
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Premium Merino Wool Sweater',
    slug: 'premium-merino-wool-sweater',
    description:
      'Luxuriously soft 100% merino wool sweater with a ribbed collar and cuffs. Naturally temperature-regulating and odour-resistant.',
    price: 89.99,
    originalPrice: 129.99,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500',
    ],
    category: 'clothing',
    tags: ['knitwear', 'merino', 'winter'],
    rating: 4.7,
    reviewCount: 654,
    inStock: true,
    featured: true,
  },
  {
    id: '6',
    name: 'The Art of Clean Code',
    slug: 'the-art-of-clean-code',
    description:
      'A practical guide to writing readable, maintainable, and efficient code. Covers naming conventions, functions, refactoring, and software craftsmanship.',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
    ],
    category: 'books',
    tags: ['programming', 'software-engineering', 'best-practices'],
    rating: 4.9,
    reviewCount: 3210,
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Mindfulness & Meditation Handbook',
    slug: 'mindfulness-meditation-handbook',
    description:
      'A comprehensive guide to developing a daily mindfulness practice. Includes 30-day programmes, breathing exercises, and stress-reduction techniques.',
    price: 24.99,
    originalPrice: 29.99,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',
    ],
    category: 'books',
    tags: ['wellness', 'self-help', 'mindfulness'],
    rating: 4.6,
    reviewCount: 1456,
    inStock: true,
    featured: false,
  },
  {
    id: '8',
    name: 'Ergonomic Lumbar Support Chair',
    slug: 'ergonomic-lumbar-support-chair',
    description:
      'Fully adjustable office chair with 4D armrests, lumbar support, and breathable mesh back. Designed for 8+ hour workdays.',
    price: 349.99,
    originalPrice: 499.99,
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500',
    ],
    category: 'home-garden',
    tags: ['office', 'ergonomic', 'furniture'],
    rating: 4.5,
    reviewCount: 823,
    inStock: true,
    featured: true,
  },
  {
    id: '9',
    name: 'Indoor Herb Garden Kit',
    slug: 'indoor-herb-garden-kit',
    description:
      'Grow fresh basil, mint, parsley, and more on your windowsill. Includes seeds, biodegradable pots, organic soil, and a bamboo tray.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500',
    ],
    category: 'home-garden',
    tags: ['gardening', 'herbs', 'indoor'],
    rating: 4.3,
    reviewCount: 412,
    inStock: true,
    featured: false,
  },
  {
    id: '10',
    name: 'Professional Yoga Mat & Block Set',
    slug: 'professional-yoga-mat-block-set',
    description:
      '6mm thick non-slip yoga mat with alignment guides, paired with two cork yoga blocks. Suitable for all skill levels.',
    price: 74.99,
    originalPrice: 99.99,
    images: [
      'https://images.unsplash.com/photo-1601925228518-4e5be60c3938?w=500',
    ],
    category: 'sports',
    tags: ['yoga', 'fitness', 'wellness'],
    rating: 4.7,
    reviewCount: 1234,
    inStock: true,
    featured: true,
  },
  {
    id: '11',
    name: 'Luxury Vitamin C Serum',
    slug: 'luxury-vitamin-c-serum',
    description:
      '20% Vitamin C brightening serum with hyaluronic acid and vitamin E. Reduces dark spots, boosts collagen, and leaves skin radiant.',
    price: 49.99,
    originalPrice: 69.99,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    ],
    category: 'beauty',
    tags: ['skincare', 'vitamin-c', 'serum'],
    rating: 4.8,
    reviewCount: 2087,
    inStock: true,
    featured: true,
  },
  {
    id: '12',
    name: 'Hydrating Rose Face Mist',
    slug: 'hydrating-rose-face-mist',
    description:
      'Refreshing rosewater facial mist with aloe vera and glycerin. Hydrates, tones, and sets makeup throughout the day.',
    price: 22.99,
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500',
    ],
    category: 'beauty',
    tags: ['skincare', 'hydration', 'rosewater'],
    rating: 4.4,
    reviewCount: 763,
    inStock: false,
    featured: false,
  },
];

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const SAMPLE_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    userId: 'user-1',
    items: [
      { product: PRODUCTS[0], quantity: 1 },
      { product: PRODUCTS[5], quantity: 2 },
    ],
    status: 'delivered',
    total: 219.97,
    shippingAddress: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '123 Main Street',
      city: 'London',
      state: 'England',
      country: 'United Kingdom',
      zipCode: 'SW1A 1AA',
    },
    createdAt: '2024-11-15T10:30:00Z',
  },
  {
    id: 'ORD-002',
    userId: 'user-1',
    items: [
      { product: PRODUCTS[9], quantity: 1 },
      { product: PRODUCTS[10], quantity: 1 },
    ],
    status: 'shipped',
    total: 124.98,
    shippingAddress: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '123 Main Street',
      city: 'London',
      state: 'England',
      country: 'United Kingdom',
      zipCode: 'SW1A 1AA',
    },
    createdAt: '2024-12-01T14:00:00Z',
  },
  {
    id: 'ORD-003',
    userId: 'user-1',
    items: [{ product: PRODUCTS[1], quantity: 1 }],
    status: 'processing',
    total: 299.99,
    shippingAddress: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '123 Main Street',
      city: 'London',
      state: 'England',
      country: 'United Kingdom',
      zipCode: 'SW1A 1AA',
    },
    createdAt: '2024-12-10T09:00:00Z',
  },
];
