"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <UserButton afterSignOutUrl="/"/>
  )
}
