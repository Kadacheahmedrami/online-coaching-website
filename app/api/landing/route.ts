import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Fetch data for landing page
    const [featuredPosts, featuredStories, popularFaqs, featuredResources] = await Promise.all([
      // Featured blog posts (latest 3)
      prisma.blogPost.findMany({
        where: { published: true },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          image: true,
          category: true,
          readTime: true,
          publishedAt: true
        },
        orderBy: { publishedAt: 'desc' },
        take: 3
      }),

      // Featured success stories (latest 3)
      prisma.successStory.findMany({
        where: { 
          published: true,
          featured: true 
        },
        select: {
          id: true,
          name: true,
          achievement: true,
          beforeImage: true,
          afterImage: true,
          stats: true,
          testimonial: true
        },
        orderBy: { createdAt: 'desc' },
        take: 3
      }),

      // Popular FAQs (top 5)
      prisma.fAQ.findMany({
        where: { 
          published: true,
          popular: true 
        },
        select: {
          id: true,
          question: true,
          answer: true,
          category: true
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'desc' }
        ],
        take: 5
      }),

      // Featured free resources
      prisma.freeResource.findMany({
        where: { 
          published: true,
          featured: true 
        },
        select: {
          id: true,
          title: true,
          description: true,
          type: true,
          duration: true,
          thumbnailUrl: true,
          downloadCount: true
        },
        orderBy: [
          { order: 'asc' },
          { downloadCount: 'desc' }
        ],
        take: 4
      })
    ]);

    return NextResponse.json({
      featuredPosts,
      featuredStories,
      popularFaqs,
      featuredResources,
      stats: {
        totalPosts: await prisma.blogPost.count({ where: { published: true } }),
        totalStories: await prisma.successStory.count({ where: { published: true } }),
        totalResources: await prisma.freeResource.count({ where: { published: true } })
      }
    });

  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}