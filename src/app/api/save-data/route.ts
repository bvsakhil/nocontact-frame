import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';
import { z } from 'zod';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Validate request body schema
const requestSchema = z.object({
  field: z.string(),
  value: z.union([z.string(), z.number()]),
  fid: z.number()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { field, value, fid } = requestSchema.parse(body);

    // Update the specified field for the user
    const { data, error } = await supabase
      .from('users')
      .update({ [field]: value })
      .eq('fid', fid)
      .select();

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
