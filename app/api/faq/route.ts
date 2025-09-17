import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const popular = searchParams.get('popular');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    
    // Calculate offset for pagination
    const skip = (page - 1) * limit;
    
    // Build where clause
    const whereClause = {
      published: true,
      ...(category && { category }),
      ...(popular === 'true' && { popular: true })
    };
    
    // Get total count for pagination info
    const totalCount = await prisma.fAQ.count({
      where: whereClause
    });
    
    const faqs = await prisma.fAQ.findMany({
      where: whereClause,
      select: {
        id: true,
        question: true,
        answer: true,
        category: true,
        popular: true,
        order: true,
        createdAt: true
      },
      orderBy: [
        { order: 'asc' },
        { popular: 'desc' },
        { createdAt: 'desc' }
      ],
      skip,
      take: limit
    });

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      faqs,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage,
        hasPrevPage,
        limit
      }
    });

  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}