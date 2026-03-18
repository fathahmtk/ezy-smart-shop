import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SAMPLE_ORDERS } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { Order } from '@/types';

const STATUS_COLORS: Record<Order['status'], string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  shipped: 'bg-purple-100 text-purple-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-600',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function AdminOrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 text-sm mt-0.5">{SAMPLE_ORDERS.length} orders total</p>
        </div>
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const).map(
          (status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded-full text-sm font-medium border capitalize transition-all ${
                status === 'all'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-100">
                <th className="text-left px-5 py-3">Order ID</th>
                <th className="text-left px-5 py-3">Customer</th>
                <th className="text-left px-5 py-3">Date</th>
                <th className="text-center px-5 py-3">Status</th>
                <th className="text-center px-5 py-3">Items</th>
                <th className="text-right px-5 py-3">Total</th>
                <th className="text-right px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {SAMPLE_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 font-mono text-gray-700">{order.id}</td>
                  <td className="px-5 py-3 text-gray-600">
                    <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
                    <p className="text-xs text-gray-400">{order.shippingAddress.email}</p>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{formatDate(order.createdAt)}</td>
                  <td className="px-5 py-3 text-center">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                        STATUS_COLORS[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-center text-gray-600">
                    {order.items.length}
                  </td>
                  <td className="px-5 py-3 text-right font-semibold text-gray-900">
                    {formatPrice(order.total)}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <select
                      defaultValue={order.status}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
