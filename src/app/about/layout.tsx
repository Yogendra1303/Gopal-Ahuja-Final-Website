import type { Metadata } from 'next'

export const metadata: Metadata = {
    alternates: {
        canonical: '/about',
    },
    title: 'About Gopal Ahuja | Dubai Real Estate Strategy Advisor',
    description: 'Explore Gopal Ahuja’s advisory approach for Dubai real estate, including investment analysis, developer evaluation, due diligence, and strategic execution.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children
}
