import { Geist, Geist_Mono } from 'next/font/google'

import { ThemeProvider } from '../_providers/theme'
import { TooltipProvider } from '@/shared/ui/tooltip'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col">
        <ThemeProvider>
          <TooltipProvider delay={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
