import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/data';

/** GET /api/products/[id] */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json({ product });
}

/** PUT /api/products/[id] — update product (admin only in production) */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    // TODO: validate, check admin session, update in database
    return NextResponse.json({
      message: `Product ${id} updated (placeholder)`,
      product: { id, ...body },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

/** DELETE /api/products/[id] — delete product (admin only in production) */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // TODO: check admin session, delete from database
  return NextResponse.json({
    message: `Product ${id} deleted (placeholder)`,
  });
}
