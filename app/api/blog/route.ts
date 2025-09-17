import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '5');
    const page = parseInt(searchParams.get('page') || '1');
    
    // Calculate offset for pagination
    const skip = (page - 1) * limit;
    
    // Build where clause
    const whereClause = {
      published: true,
      ...(category && { category })
    };
    
    // Get total count for pagination info
    const totalCount = await prisma.blogPost.count({
      where: whereClause
    });
    
    const posts = await prisma.blogPost.findMany({
      where: whereClause,
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
      skip,
      take: limit
    });

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      posts,
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
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}