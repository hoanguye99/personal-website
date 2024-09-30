import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: './fonts/Inter-VariableFont_slnt,wght.ttf',
})

export const metadata: Metadata = {
  title: 'Hoang Nguyen',
  description: 'Hoang Nguyen Personal Website',
  openGraph: {
    title: 'Hoang Nguyen',
    description: 'Hoang Nguyen Personal Website',
    url: 'https://hoanguye99.vercel.app/',
    siteName: 'Hoang Nguyen Personal Website',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
        secureUrl:
          'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for Hoang Nguyen',
      },
    ],
  },
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
