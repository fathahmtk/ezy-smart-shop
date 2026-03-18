'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, CreditCard, Package, MapPin, CheckCircle } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice, generateOrderId } from '@/lib/utils';
import { ShippingAddress } from '@/types';

type Step = 'shipping' | 'payment' | 'review';

const STEPS: { key: Step; label: string; Icon: React.ElementType }[] = [
  { key: 'shipping', label: 'Shipping', Icon: MapPin },
  { key: 'payment', label: 'Payment', Icon: CreditCard },
  { key: 'review', label: 'Review', Icon: Package },
];

const EMPTY_ADDRESS: ShippingAddress = {
  name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  country: 'United Kingdom',
  zipCode: '',
};

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const [step, setStep] = useState<Step>('shipping');
  const [address, setAddress] = useState<ShippingAddress>(EMPTY_ADDRESS);
  const [errors, setErrors] = useState<Partial<ShippingAddress>>({});

  const cartTotal = total();
  const shipping = cartTotal > 50 ? 0 : 4.99;

  function validateAddress(): boolean {
    const newErrors: Partial<ShippingAddress> = {};
    if (!address.name.trim()) newErrors.name = 'Full name is required';
    if (!address.email.trim()) newErrors.email = 'Email is required';
    if (!address.address.trim()) newErrors.address = 'Address is required';
    if (!address.city.trim()) newErrors.city = 'City is required';
    if (!address.zipCode.trim()) newErrors.zipCode = 'Post code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleShippingNext() {
    if (validateAddress()) setStep('payment');
  }

  async function handlePlaceOrder() {
    const orderId = generateOrderId();
    // In production: POST to /api/orders and /api/checkout
    clearCart();
    window.location.href = `/checkout/success?orderId=${orderId}`;
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 mb-4">Your cart is empty.</p>
        <Link href="/products" className="text-blue-600 hover:underline">
          Browse Products
        </Link>
      </div>
    );
  }

  const currentStepIndex = STEPS.findIndex((s) => s.key === step);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      {/* Step indicator */}
      <div className="flex items-center mb-10">
        {STEPS.map(({ key, label, Icon }, i) => (
          <div key={key} className="flex items-center">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i <= currentStepIndex
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:block">{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-300 mx-1" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form area */}
        <div className="lg:col-span-2">
          {/* Step 1: Shipping */}
          {step === 'shipping' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" /> Shipping Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Full Name"
                  value={address.name}
                  onChange={(v) => setAddress({ ...address, name: v })}
                  error={errors.name}
                  placeholder="Jane Smith"
                />
                <Field
                  label="Email"
                  value={address.email}
                  onChange={(v) => setAddress({ ...address, email: v })}
                  error={errors.email}
                  placeholder="jane@example.com"
                  type="email"
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Street Address"
                    value={address.address}
                    onChange={(v) => setAddress({ ...address, address: v })}
                    error={errors.address}
                    placeholder="123 Main Street"
                  />
                </div>
                <Field
                  label="City"
                  value={address.city}
                  onChange={(v) => setAddress({ ...address, city: v })}
                  error={errors.city}
                  placeholder="London"
                />
                <Field
                  label="State / County"
                  value={address.state}
                  onChange={(v) => setAddress({ ...address, state: v })}
                  placeholder="England"
                />
                <Field
                  label="Country"
                  value={address.country}
                  onChange={(v) => setAddress({ ...address, country: v })}
                  placeholder="United Kingdom"
                />
                <Field
                  label="Post Code"
                  value={address.zipCode}
                  onChange={(v) => setAddress({ ...address, zipCode: v })}
                  error={errors.zipCode}
                  placeholder="SW1A 1AA"
                />
              </div>

              <button
                onClick={handleShippingNext}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 'payment' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" /> Payment Details
              </h2>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
                <p className="font-semibold">Stripe Integration Ready</p>
                <p className="mt-1 text-blue-600">
                  Add your Stripe keys to <code className="bg-blue-100 px-1 rounded">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> and{' '}
                  <code className="bg-blue-100 px-1 rounded">STRIPE_SECRET_KEY</code> to enable real payments.
                </p>
              </div>

              {/* Placeholder card fields */}
              <div className="space-y-3">
                <Field label="Card Number" value="" onChange={() => {}} placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry" value="" onChange={() => {}} placeholder="MM / YY" />
                  <Field label="CVC" value="" onChange={() => {}} placeholder="123" />
                </div>
                <Field label="Name on Card" value="" onChange={() => {}} placeholder="Jane Smith" />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep('shipping')}
                  className="flex-1 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep('review')}
                  className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 'review' && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" /> Review Your Order
              </h2>

              {/* Shipping summary */}
              <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-1">
                <p className="font-semibold text-gray-700">Shipping to:</p>
                <p className="text-gray-600">{address.name}</p>
                <p className="text-gray-600">{address.address}, {address.city}</p>
                <p className="text-gray-600">{address.country}, {address.zipCode}</p>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {product.name} × {quantity}
                    </span>
                    <span className="font-medium">{formatPrice(product.price * quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep('payment')}
                  className="flex-1 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm h-fit">
          <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between">
                <span className="text-gray-600 line-clamp-1 flex-1 pr-2">
                  {product.name} × {quantity}
                </span>
                <span className="font-medium flex-shrink-0">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>
            ))}
            <div className="border-t border-gray-100 pt-3 space-y-1">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">Free</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold text-base text-gray-900 pt-1">
                <span>Total</span>
                <span>{formatPrice(cartTotal + shipping)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Internal form field component
function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 text-sm border rounded-xl outline-none transition-colors ${
          error
            ? 'border-red-300 focus:border-red-400'
            : 'border-gray-200 focus:border-blue-400'
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
