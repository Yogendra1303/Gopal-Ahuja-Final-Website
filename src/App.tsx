/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Insights } from './pages/Insights';
import { ArticlePage } from './pages/ArticlePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { getArticleBySlug, getCaseStudyBySlug } from './data/articleData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (currentPath === '#/about') {
    return <About />;
  }

  // Match article routes: #/insights/{slug}
  const articleMatch = currentPath.match(/^#\/insights\/(.+)$/);
  if (articleMatch) {
    const slug = articleMatch[1];
    const article = getArticleBySlug(slug);
    if (article) {
      return <ArticlePage article={article} />;
    }
  }

  // Match case study routes: #/case-study/{slug}
  const caseStudyMatch = currentPath.match(/^#\/case-study\/(.+)$/);
  if (caseStudyMatch) {
    const slug = caseStudyMatch[1];
    const study = getCaseStudyBySlug(slug);
    if (study) {
      return <CaseStudyPage caseStudy={study} />;
    }
  }

  if (currentPath === '#/insights') {
    return <Insights />;
  }

  return <Home />;
}
