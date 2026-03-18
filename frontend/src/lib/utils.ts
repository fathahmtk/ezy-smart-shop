/**
 * Shared utility functions.
 * Add further helpers here as the project grows.
 */

/** Format a number as a GBP price string, e.g. 149.99 → "£149.99" */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
}

/** Generate a short unique order ID, e.g. "ORD-4F2A9C" */
export function generateOrderId(): string {
  return `ORD-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;
}

/**
 * Merge Tailwind class strings, filtering out falsy values.
 * Usage: cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
