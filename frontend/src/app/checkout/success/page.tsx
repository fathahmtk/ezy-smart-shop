import Link from 'next/link';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams.orderId || 'ORD-UNKNOWN';

  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-green-100 rounded-full">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
      <p className="text-gray-500 mb-6">
        Thank you for your purchase. We&apos;ll send you a confirmation email shortly.
      </p>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <Package className="w-5 h-5 text-blue-600" />
          <span className="font-semibold">Order Details</span>
        </div>
        <div className="text-sm text-gray-600 space-y-1 ml-7">
          <p>
            <span className="font-medium">Order ID:</span>{' '}
            <span className="font-mono">{orderId}</span>
          </p>
          <p>
            <span className="font-medium">Status:</span>{' '}
            <span className="text-yellow-600 font-medium">Processing</span>
          </p>
          <p>
            <span className="font-medium">Estimated Delivery:</span>{' '}
            3–5 business days
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/orders"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          View My Orders
        </Link>
        <Link
          href="/products"
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Continue Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
