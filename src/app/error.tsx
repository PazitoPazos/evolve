'use client'

import Link from 'next/link'

export function ErrorPage() {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link href="/">Back to Home</Link>
    </>
  )
}

export default ErrorPage
