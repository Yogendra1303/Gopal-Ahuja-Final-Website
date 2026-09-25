import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { createElement } from 'react'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '../index.css'
import { GlobalLeadCapture } from '@/components/GlobalLeadCapture'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gopalahuja.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Gopal Ahuja | Strategic Real Estate Advisory',
  description: 'Independent market analysis, private portfolio advisory, and capital allocation insights for high-net-worth real estate investors.',
  keywords: 'Dubai Real Estate Advisor, Real Estate Investment Dubai, Institutional Capital Deployment, Luxury Property Dubai, Land Due Diligence, Gopal Ahuja',
  authors: [{ name: 'Gopal Ahuja' }],
  openGraph: {
    title: 'Gopal Ahuja | Strategic Real Estate Advisory',
    description: 'Independent market analysis, private portfolio advisory, and capital allocation insights for high-net-worth real estate investors.',
    url: 'https://www.gopalahuja.com',
    siteName: 'Gopal Ahuja',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gopal Ahuja | Strategic Real Estate Advisory',
    description: 'Independent market analysis, private portfolio advisory, and capital allocation insights for high-net-worth real estate investors.',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%230F172A"/><text x="50" y="70" font-family="system-ui, sans-serif" font-size="55" font-weight="800" fill="%23ffffff" text-anchor="middle">GA</text><circle cx="50" cy="50" r="38" stroke="%23C8102E" stroke-width="5" fill="none"/></svg>',
  }
}

const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Gopal Ahuja',
        url: 'https://www.gopalahuja.com',
        description: 'Independent real estate advisory focused on Dubai property investment, portfolio strategy, and capital allocation.',
        areaServed: 'Dubai, United Arab Emirates',
        knowsAbout: ['Dubai real estate investment', 'Real estate portfolio advisory', 'Property due diligence', 'Capital allocation'],
        sameAs: ['https://www.gopalahuja.com'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
        const script = createElement('script', {
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(organizationSchema) },
        })
        const body = createElement(
                  'body',
              { className: 'bg-white text-gray-900 antialiased selection:bg-[#C8102E] selection:text-white' },
                  script,
                  children,
                  createElement(GlobalLeadCapture),
                  createElement(WhatsAppButton),
                )
        return createElement('html', { lang: 'en', className: 'scroll-smooth ' + inter.variable + ' ' + jakarta.variable }, body)
}
