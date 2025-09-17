import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { ContactType } from "@prisma/client" // import your enum

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const typeParam = searchParams.get("type") // optional filter (INSTAGRAM | WHATSAPP | EMAIL)

    // convert string to ContactType enum if valid
    const where = typeParam && Object.values(ContactType).includes(typeParam as ContactType)
      ? { type: typeParam as ContactType }
      : {}

    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { id: "asc" }, // consistent order
    })

    return NextResponse.json({ contacts })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, title, info, url } = body

    if (!type || !title || !url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // validate type
    if (!Object.values(ContactType).includes(type as ContactType)) {
      return NextResponse.json(
        { error: "Invalid contact type" },
        { status: 400 }
      )
    }

    const contact = await prisma.contact.create({
      data: {
        type: type as ContactType,
        title,
        info,
        url,
      },
    })

    return NextResponse.json(contact, { status: 201 })
  } catch (error) {
    console.error("Error creating contact:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
