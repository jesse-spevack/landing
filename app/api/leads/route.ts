import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data)

  try {
    const lead = await prisma.lead.create({
      data: {
        email: data.email,
      },
    })

    console.log("lead: ", lead)

    return NextResponse.json(lead)
  } catch (error) {
    return NextResponse.error()
  }

}