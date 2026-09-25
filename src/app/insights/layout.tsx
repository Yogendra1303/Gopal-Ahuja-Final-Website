import type { Metadata } from 'next'
import { createElement } from 'react'

export const metadata: Metadata = {
            alternates: {
                            canonical: '/insights',
            },
            title: 'Dubai & UAE Real Estate Insights | Gopal Ahuja',
            description: 'Read Gopal Ahuja’s Dubai and UAE real estate insights on market yields, capital flows, infrastructure, and investment strategy.',
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
            return createElement('div', { className: 'light-theme min-h-screen bg-white text-gray-900' }, children)
}
