import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        ...(category && { category })
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        image: true,
        category: true,
        readTime: true,
        author: true,
        publishedAt: true,
        createdAt: true
      },
      orderBy: {
        publishedAt: 'desc'
      },
      ...(limit && { take: parseInt(limit) })
    });

    return NextResponse.json(posts);

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}