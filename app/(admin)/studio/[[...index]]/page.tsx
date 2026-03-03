'use client'

import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'
import { useEffect, useState } from 'react'

const NextStudio = dynamic(
    () => import('next-sanity/studio').then((mod) => mod.NextStudio),
    { ssr: false }
)

export default function StudioPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return <NextStudio config={config} />
}
