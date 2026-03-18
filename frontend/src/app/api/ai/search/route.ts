import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/data';

/**
 * GET /api/ai/search?q=
 * AI-powered natural language product search.
 * Connect OPENAI_API_KEY and replace the placeholder with a
 * real embeddings-based semantic search for production use.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() ?? '';

  if (!query) {
    return NextResponse.json({ results: [], query });
  }

  // Placeholder: simple keyword search (replace with semantic search)
  const results = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.includes(query)) ||
      p.category.includes(query)
  );

  return NextResponse.json({
    results,
    query,
    powered_by: 'placeholder keyword search — connect OpenAI for semantic search',
  });
}
