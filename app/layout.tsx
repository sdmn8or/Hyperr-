import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hyperr',
  description: 'Im The best',
  generator: 'sadmaan.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
