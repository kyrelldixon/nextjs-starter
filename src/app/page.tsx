'use client'

import { Counter } from '~/components/counter'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1 className="text-6xl font-bold">Next.js Starter</h1>
      <p className="text-xl">
        A starter for Next.js with TypeScript, Tailwind CSS, and ESLint.
      </p>
      <Counter />
    </main>
  )
}
