import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: './fonts/Inter-VariableFont_slnt,wght.ttf',
})

export const metadata: Metadata = {
  title: 'Hoang Nguyen',
  description: 'Hoang Nguyen Personal Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-900 leading-relaxed text-typography-body antialiased selection:bg-sky-300 selection:text-sky-900">
        {children}
      </body>
    </html>
  )
}
