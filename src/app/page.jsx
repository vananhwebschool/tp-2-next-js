'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
      <button className="btn btn-info" onClick={() => router.push('/games')}>
        Games Dashboard
      </button>
  )
}