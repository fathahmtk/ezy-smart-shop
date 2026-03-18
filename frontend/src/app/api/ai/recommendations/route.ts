import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/data';

/**
 * GET /api/ai/recommendations?productId=&category=
 * Returns AI product recommendations.
 * Plug in your OpenAI API key (OPENAI_API_KEY) and replace the
 * placeholder logic with a real embeddings / completions call.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');
  const category = searchParams.get('category');

  // Placeholder: return products from same category, excluding the current product
  let recommendations = [...PRODUCTS];

  if (category) {
    recommendations = recommendations.filter((p) => p.category === category);
  }
  if (productId) {
    recommendations = recommendations.filter((p) => p.id !== productId);
  }

  // In production: rank by AI similarity score
  const top = recommendations.slice(0, 6);

  return NextResponse.json({
    recommendations: top,
    powered_by: 'placeholder — connect OpenAI to enable real recommendations',
  });
}
