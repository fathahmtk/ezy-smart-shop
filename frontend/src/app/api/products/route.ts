import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/data';

/** GET /api/products — returns all products, or filtered by ?category= */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search')?.toLowerCase();

  let products = [...PRODUCTS];

  if (category && category !== 'all') {
    products = products.filter((p) => p.category === category);
  }
  if (search) {
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({ products, count: products.length });
}

/** POST /api/products — create a new product (admin only in production) */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: validate body, check admin session, persist to database
    return NextResponse.json(
      { message: 'Product created (placeholder)', product: body },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
