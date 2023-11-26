"use client"

import { useEffect } from 'react'

import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  const isOpen = useStoreModal((state) => state.isOpen)
  const onOpen = useStoreModal((state) => state.onOpen)

  useEffect(() => {
    if (!isOpen) onOpen()
  }, [])

  return (
    <div className='p-4'>
      ayo watch this
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
