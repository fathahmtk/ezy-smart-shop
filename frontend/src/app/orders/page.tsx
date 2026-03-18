import Link from 'next/link';
import Image from 'next/image';
import { Package, Clock, Truck, CheckCircle, XCircle } from 'lucide-react';
import { SAMPLE_ORDERS } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { Order } from '@/types';

const STATUS_CONFIG: Record<
  Order['status'],
  { label: string; color: string; Icon: React.ElementType }
> = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-700', Icon: Clock },
  processing: { label: 'Processing', color: 'bg-blue-100 text-blue-700', Icon: Package },
  shipped: { label: 'Shipped', color: 'bg-purple-100 text-purple-700', Icon: Truck },
  delivered: { label: 'Delivered', color: 'bg-green-100 text-green-700', Icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-600', Icon: XCircle },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

      {SAMPLE_ORDERS.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Package className="w-12 h-12 mx-auto mb-3" />
          <p className="font-medium">No orders yet</p>
          <Link href="/products" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {SAMPLE_ORDERS.map((order) => {
            const { label, color, Icon } = STATUS_CONFIG[order.status];
            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* Order header */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 font-mono">{order.id}</p>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Placed on {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${color}`}
                    >
                      <Icon className="w-3.5 h-3.5" /> {label}
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </div>

                {/* Order items */}
                <div className="px-5 py-4 space-y-3">
                  {order.items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${product.slug}`}
                          className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-1"
                        >
                          {product.name}
                        </Link>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Qty: {quantity} · {formatPrice(product.price)} each
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-gray-700 flex-shrink-0">
                        {formatPrice(product.price * quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Shipping info */}
                <div className="px-5 pb-4 text-xs text-gray-400">
                  Shipped to: {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                  {order.shippingAddress.country}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
