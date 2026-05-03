import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restaurant Menu Profit Analyzer',
  description: 'Calculate real profit margins per menu item. Track ingredient costs, portion sizes, and labor to see which dishes actually make money.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ac45ed01-5e80-44a7-9952-c8398fd7f8cc"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
