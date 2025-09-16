import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const popular = searchParams.get('popular');
    
    const faqs = await prisma.fAQ.findMany({
      where: {
        published: true,
        ...(category && { category }),
        ...(popular === 'true' && { popular: true })
      },
      select: {
        id: true,
        question: true,
        answer: true,
        category: true,
        popular: true,
        order: true
      },
      orderBy: [
        { order: 'asc' },
        { popular: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return NextResponse.json(faqs);

  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}