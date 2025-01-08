import { DataAPIClient } from "@datastax/astra-db-ts"

const ASTRA_DB_APPLICATION_TOKEN = process.env.NEXT_PUBLIC_ASTRA_DB_APPLICATION_TOKEN
const ASTRA_DB_API_ENDPOINT = process.env.NEXT_PUBLIC_ASTRA_DB_API_ENDPOINT

if (!ASTRA_DB_APPLICATION_TOKEN) {
  throw new Error("ASTRA_DB_APPLICATION_TOKEN is not defined")
}
if (!ASTRA_DB_API_ENDPOINT) {
  throw new Error("ASTRA_DB_API_ENDPOINT is not defined")
}

// Type assertion after the checks ensures TypeScript knows these are strings
const applicationToken = ASTRA_DB_APPLICATION_TOKEN as string
const apiEndpoint = ASTRA_DB_API_ENDPOINT as string

// Initialize the client
let client: DataAPIClient | null = null
let db: any | null = null

export function getAstraClient() {
  if (!client) {
    client = new DataAPIClient(applicationToken)
  }
  return client
}

// Initialize the database
export function getAstraDb() {
  getAstraClient()

  if (!client) {
    throw new Error("Client is not initialized.")
  }

  if (!db) {
    db = client.db(apiEndpoint)
  }
  return db
}

// Initialize the connection
export async function initAstraDb() {
  try {
    const db = await getAstraDb()

    if (!db) {
      throw new Error("Failed to connect to Astra DB")
    } else {
      console.log(`* Successfully connected to Astra DB ${db.id}`)
    }

    const colls = await db.listCollections()
    if (!colls) {
      throw new Error("Failed to list collections")
    } else {
      console.log(`* Found ${colls.length} collections`)
    }

    return db
  } catch (error) {
    console.error("Failed to connect to Astra DB:", error)
    throw error
  }
}

// TODO: Close the connection (if required)
