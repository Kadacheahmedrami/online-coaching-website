import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    
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
      ...(limit && { take: parseInt(limit) })
    });

    return NextResponse.json(stories);

  } catch (error) {
    console.error('Error fetching success stories:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}