"use client"

import React, { useEffect, useState } from 'react'
import { CheckCircle2, Terminal } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import axios from 'axios'

const ConnectionStatus = () => {
    const [status, setStatus] = useState<"connected" | "error" | "loading">("loading")
    const [details, setDetails] = useState<{ dbId?: string; collections?: number; message?: string }>()

    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await axios.get("/api/db-status")
                const data = await response.data

                if (data.status === "connected") {
                    setStatus("connected")
                    setDetails(data)
                } else {
                    setStatus("error")
                    setDetails(data)
                }

            } catch (error) {
                console.error(error)
            }
        }
        checkConnection()
    }, [])
    return (
        <Alert variant={status === "connected" ? "default" : "destructive"} >
            {status === "connected" ? <CheckCircle2 className="h-4 w-4" /> : <Terminal className="h-4 w-4" />}
            {status === "connected" ? <AlertTitle>Heads up!</AlertTitle> : <AlertTitle>Oops!</AlertTitle>}
            <AlertDescription>
                {status === "connected" ?
                    (
                        <>
                            Successfully connected to database {details?.dbId}.<br />
                            Available collections: {details?.collections}
                        </>
                    )
                    : status === 'error' ?
                        (
                            details?.message || 'Unknown error occurred'
                        )
                        : (
                            'Connecting to database...'
                        )
                }
            </AlertDescription>
        </Alert >
    )
}

export default ConnectionStatus