import ConnectionStatus from '@/components/client/ConnectionStatus';
import DatabaseInfo from '@/components/server/DatabaseInfo';
import React from 'react'

const Dashoard: React.FC = () => {
    return (
        <main className="p-8 space-y-8">
            <h1 className="text-3xl font-bold">Astra DB Next.js Demo</h1>

            {/* Client Component for real-time status */}
            <ConnectionStatus />

            {/* Server Component for detailed info */}
            <DatabaseInfo />
        </main>
    );
}

export default Dashoard