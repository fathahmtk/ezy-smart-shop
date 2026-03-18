import { NextResponse } from 'next/server';

// Sample users — replace with database query (admin-protected) in production
const USERS = [
  { id: 'u1', name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
  { id: 'u2', name: 'James Taylor', email: 'james@example.com', role: 'user' },
];

/** GET /api/users — list users (admin only in production) */
export async function GET() {
  // TODO: verify admin session before returning user list
  return NextResponse.json({ users: USERS });
}
