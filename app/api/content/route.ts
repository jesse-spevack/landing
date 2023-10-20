import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
// Dummy data
const posts = [
  {
    title: 'Sample Post 1',
    slug: 'sample-post-1',
    content:
      'This is the content of sample post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Sample Post 2',
    slug: 'sample-post-2',
    content:
      'This is the content of sample post 2. Integer nec odio. Praesent libero.',
  },
  {
    title: 'Sample Post 3',
    slug: 'sample-post-3',
    content:
      'This is the content of sample post 3. Sed ut perspiciatis unde omnis iste natus error.',
  },
  {
    title: 'Sample Post 4',
    slug: 'sample-post-4',
    content:
      'This is the content of sample post 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
  },
  {
    title: 'Sample Post 5',
    slug: 'sample-post-5',
    content:
      'This is the content of sample post 5. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts)
}