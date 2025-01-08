import { getAstraDb } from "@/api/utils/dbConnect"

export default async function DatabaseInfo() {
    const db = getAstraDb();

    try {
        const collections = await db.collections();
        return (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Database Information</h2>
                <div>
                    <p><strong>Database ID:</strong> {db.id}</p>
                    <p><strong>Collections:</strong> {collections.length}</p>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="text-red-500">
                Failed to fetch database information: {error instanceof Error ? error.message : 'Unknown error'}
            </div>
        );
    }
}