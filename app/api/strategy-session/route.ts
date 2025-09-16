import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      currentState,
      primaryGoal,
      timeFrame,
      experience,
      availability,
      hasMedicalCondition,
      medicalDetails,
      motivation
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !age) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const application = await prisma.coachingApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        age: parseInt(age),
        currentState,
        primaryGoal,
        timeFrame,
        experience,
        availability,
        hasMedicalCondition,
        medicalDetails,
        motivation,
        status: 'pending'
      }
    });

    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        id: application.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating coaching application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}