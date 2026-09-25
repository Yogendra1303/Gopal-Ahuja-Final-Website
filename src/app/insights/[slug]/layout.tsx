import type { Metadata } from 'next'
import { articles } from '@/data/articleData'

type Props = {
    children: React.ReactNode
}

type RouteParams = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const { slug } = await params
    const article = articles.find((item) => item.slug === slug)

  if (!article) {
        return {
                title: 'Insight Not Found | Gopal Ahuja',
                description: 'Explore Dubai and UAE real estate research and investment insights from Gopal Ahuja.',
        }
  }

  return {
        title: article.title + ' | Gopal Ahuja',
        description: article.description,
        alternates: {
            canonical: `/insights/${slug}`,
        }
  }
}

export default function InsightLayout({ children }: Props) {
    return children
}
