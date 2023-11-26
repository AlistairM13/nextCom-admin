"use client"

import { useState, useEffect } from "react"

import { StoreModal } from "@/components/modals/store-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        // If SSR - dont render anything - to prevent hydration error
        return null
    }

    return(
        <StoreModal/>
    )
}