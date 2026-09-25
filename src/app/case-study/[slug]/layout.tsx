import type { Metadata } from 'next'
import { getCaseStudyBySlug } from '@/data/articleData'

type Props = {
    children: React.ReactNode
}

type RouteParams = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
        return {
                title: 'Case Study Not Found | Gopal Ahuja',
                description: 'Explore Dubai real estate strategy and investment case studies from Gopal Ahuja.',
        }
  }

  return {
        title: caseStudy.title + ' | Gopal Ahuja',
        description: caseStudy.description,
        alternates: {
            canonical: `/case-study/${slug}`,
        }
  }
}

export default function CaseStudyLayout({ children }: Props) {
    return children
}
