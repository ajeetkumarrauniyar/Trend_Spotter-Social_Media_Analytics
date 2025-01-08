import { NextResponse } from "next/server"
import { getAstraDb } from "@/api/utils/dbConnect"

export async function GET() {
  try {
    const db = getAstraDb()

    // Test the connection by executing a simple query
    const collections = await db.collections()

    return NextResponse.json(
      {
        status: "connected",
        dbId: db.id,
        collections: collections.length,
      },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
