import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/checkout
 * Creates a Stripe PaymentIntent.
 * Set STRIPE_SECRET_KEY in your environment to enable real payments.
 */
export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'gbp' } = await request.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      // Return a mock response so the front-end can be developed without Stripe
      return NextResponse.json({
        clientSecret: 'pi_mock_secret_placeholder',
        message: 'Add STRIPE_SECRET_KEY to enable real payments',
      });
    }

    // Dynamic import so the server bundle only loads Stripe when the key is set
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects pence/cents
      currency,
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
