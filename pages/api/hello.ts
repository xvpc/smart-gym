import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  if(req.method !== 'GET') {
      return new Response(
      JSON.stringify({ error: 'Only GET requests' }),
      {
          status: 400,
          headers: {
          'content-type': 'application/json',
          },
      },
      )
  }

  return new Response(
      JSON.stringify({ data: "hello world!" ?? null}),
      {
          status: 200,
          headers: {
              'content-type': 'application/json',
          }
      },
  )
}