import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    
    const resources = await prisma.freeResource.findMany({
      where: {
        published: true,
        ...(type && { type }),
        ...(featured === 'true' && { featured: true })
      },
      select: {
        id: true,
        title: true,
        description: true,
        type: true,
        duration: true,
        features: true,
        thumbnailUrl: true,
        downloadCount: true,
        featured: true,
        order: true
      },
      orderBy: [
        { order: 'asc' },
        { featured: 'desc' },
        { downloadCount: 'desc' }
      ]
    });

    return NextResponse.json(resources);

  } catch (error) {
    console.error('Error fetching free resources:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}