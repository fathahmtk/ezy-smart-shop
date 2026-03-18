import Link from 'next/link';
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { PRODUCTS, SAMPLE_ORDERS } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export default function AdminDashboard() {
  const totalRevenue = SAMPLE_ORDERS.reduce((sum, o) => sum + o.total, 0);

  const stats = [
    { label: 'Total Products', value: PRODUCTS.length.toString(), Icon: Package, color: 'bg-blue-50 text-blue-600' },
    { label: 'Total Orders', value: SAMPLE_ORDERS.length.toString(), Icon: ShoppingCart, color: 'bg-purple-50 text-purple-600' },
    { label: 'Total Users', value: '1,248', Icon: Users, color: 'bg-green-50 text-green-600' },
    { label: 'Revenue', value: formatPrice(totalRevenue), Icon: DollarSign, color: 'bg-amber-50 text-amber-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, Admin</p>
        </div>
        <div className="flex gap-2 text-sm">
          <Link href="/admin/products" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Manage Products
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
              </div>
              <div className={`p-3 rounded-xl ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+12.5% from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { href: '/admin/products', label: 'Manage Products', Icon: Package },
          { href: '/admin/orders', label: 'View Orders', Icon: ShoppingCart },
          { href: '/admin/users', label: 'Manage Users', Icon: Users },
        ].map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800">{label}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </Link>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Recent Orders</h2>
          <Link href="/admin/orders" className="text-sm text-blue-600 hover:text-blue-700">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 uppercase">
                <th className="text-left px-5 py-3">Order ID</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Items</th>
                <th className="text-right px-5 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {SAMPLE_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-mono text-gray-700">{order.id}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                        order.status === 'delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'shipped'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{order.items.length} items</td>
                  <td className="px-5 py-3 text-right font-semibold text-gray-900">
                    {formatPrice(order.total)}
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
