import { NextRequest, NextResponse } from 'next/server';
import { SAMPLE_ORDERS } from '@/lib/data';

/** GET /api/orders/[id] */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const order = SAMPLE_ORDERS.find((o) => o.id === id);
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }
  return NextResponse.json({ order });
}

/** PUT /api/orders/[id] — update order status */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    // TODO: validate admin session, update in database
    return NextResponse.json({
      message: `Order ${id} updated`,
      order: { id, ...body },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

/** DELETE /api/orders/[id] */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ message: `Order ${id} cancelled (placeholder)` });
}
