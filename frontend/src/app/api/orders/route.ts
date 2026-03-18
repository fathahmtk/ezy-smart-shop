import { NextRequest, NextResponse } from 'next/server';
import { SAMPLE_ORDERS } from '@/lib/data';
import { generateOrderId } from '@/lib/utils';

/** GET /api/orders */
export async function GET() {
  // TODO: filter by authenticated user in production
  return NextResponse.json({ orders: SAMPLE_ORDERS });
}

/** POST /api/orders — create a new order */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newOrder = {
      id: generateOrderId(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...body,
    };
    // TODO: persist to database
    return NextResponse.json({ order: newOrder }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
