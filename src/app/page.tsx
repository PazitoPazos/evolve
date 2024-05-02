'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { session } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.refresh()
    }
  }, [])

  return (
    <div>
      <Header />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="py-8 text-white">
      <div className="container mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Evolve Hosting</h1>
        <p className="mb-6 text-lg">
          Evolve Hosting provides top-notch hosting solutions for your Minecraft
          server. Whether you&apos;re a casual player or running a large-scale
          server, we have the tools and expertise to ensure your server runs
          smoothly and reliably.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-white transition duration-300 ease-in-out"
          >
            Get Started
          </a>
          <a
            href="#"
            className="rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-white transition duration-300 ease-in-out hover:border-gray-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  )
}

function Features() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Features</h2>
        {/* Add feature cards or description here */}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Pricing</h2>
        {/* Add pricing plans or tables here */}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-4 text-white">
      <div className="container mx-auto">
        {/* Add footer content such as navigation links or contact information */}
      </div>
    </footer>
  )
}
