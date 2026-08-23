import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Gopal Ahuja | Premium Dubai Real Estate Investment Advisory',
  description: 'Gopal Ahuja is a Dubai-based real estate strategist advising global developers, family offices, and private investors on high-yield acquisitions, land due diligence, and capital deployment.',
  keywords: 'Dubai Real Estate Advisor, Real Estate Investment Dubai, Institutional Capital Deployment, Luxury Property Dubai, Land Due Diligence, Gopal Ahuja',
  authors: [{ name: 'Gopal Ahuja' }],
  openGraph: {
    type: 'website',
    title: 'Gopal Ahuja | Premium Dubai Real Estate Investment Advisory',
    description: 'Strategic guidance, market intelligence, and advisory for institutional investors, developers, and private wealth in Dubai.',
    images: ['/assets/photo1.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gopal Ahuja | Premium Dubai Real Estate Investment Advisory',
    description: 'Proprietary research, land acquisition frameworks, and strategic advisory across Dubai real estate.',
    images: ['/assets/photo1.jpeg'],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%230F172A"/><text x="50" y="70" font-family="system-ui, sans-serif" font-size="55" font-weight="800" fill="%23ffffff" text-anchor="middle">GA</text><circle cx="50" cy="50" r="38" stroke="%23C8102E" stroke-width="5" fill="none"/></svg>',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white text-gray-900 antialiased selection:bg-[#C8102E] selection:text-white">
        {children}
      </body>
    </html>
  )
}
