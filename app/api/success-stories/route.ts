import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '3');
    const page = parseInt(searchParams.get('page') || '1');
    
    // Calculate offset for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination info
    const totalCount = await prisma.successStory.count({
      where: {
        published: true,
        ...(featured === 'true' && { featured: true })
      }
    });
    
    const stories = await prisma.successStory.findMany({
      where: {
        published: true,
        ...(featured === 'true' && { featured: true })
      },
      select: {
        id: true,
        name: true,
        achievement: true,
        age: true,
        height: true,
        duration: true,
        program: true,
        beforeImage: true,
        afterImage: true,
        startWeight: true,
        endWeight: true,
        stats: true,
        testimonial: true,
        featured: true,
        createdAt: true
      },
      orderBy: [
        { featured: 'desc' },
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
      stories,
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
    console.error('Error fetching success stories:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}