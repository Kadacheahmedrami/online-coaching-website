import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    const story = await prisma.successStory.findUnique({
      where: {
        id,
        published: true
      }
    });

    if (!story) {
      return NextResponse.json(
        { error: 'Success story not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(story);

  } catch (error) {
    console.error('Error fetching success story:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}