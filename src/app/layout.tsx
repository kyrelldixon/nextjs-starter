import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nextjs Starter',
  description:
    'A starter for Next.js with TypeScript, Tailwind CSS, and ESLint.',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
