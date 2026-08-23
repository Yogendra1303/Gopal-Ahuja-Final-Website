const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const articles = [
  {
    title: 'Historical UAE Market Yields (2018 - 2026)',
    desc: 'Tracking the compounded annual growth rate and sovereign asset yield curve across ultra-luxury and premium waterfront sectors.',
    slug: 'historical-uae-market-yields',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Global Capital Inflow to UAE Real Estate',
    desc: 'A deep dive into cross-border institutional investments shaping the next decade of Dubai\'s macro-economic expansion.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2940&auto=format&fit=crop',
    slug: 'global-capital-inflow-uae',
  },
  {
    title: 'Infrastructure Expansion 2030',
    desc: 'Projecting the compounding value resulting from major civic infrastructure developments and the new urban masterplan.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop',
    slug: 'infrastructure-expansion-2030',
  },
  {
    title: 'The Future of Ultra-Luxury Waterfront Assets in GCC',
    desc: 'An analysis of how institutional capital is shifting towards branded residences with direct maritime access.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop',
    slug: 'ultra-luxury-waterfront-gcc',
  },
  {
    title: 'Sovereign Wealth Fund Allocations in Dubai',
    desc: 'Understanding the structural pivot as global funds lock into high-yield commercial districts.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop',
    slug: 'sovereign-wealth-fund-dubai',
  },
  {
    title: 'Fractional Ownership in Tier 1 Assets',
    desc: 'Evaluating the regulatory frameworks enabling micro-cap equity in traditionally monolithic real estate assets.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2940&auto=format&fit=crop',
    slug: 'fractional-ownership-tier1',
  },
  {
    title: 'The Rise of Branded Residences',
    desc: 'A 5-year outlook on the operational premiums commanded by global hospitality brands in the residential space.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2800&auto=format&fit=crop',
    slug: 'rise-of-branded-residences',
  },
  {
    title: 'Sustainable Development & Green Premiums',
    desc: 'Quantifying the valuation uplift for LEED-certified super-prime properties in an energy-conscious market.',
    image: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=2800&auto=format&fit=crop',
    slug: 'sustainable-development-green-premiums',
  }
];

async function main() {
  for (const article of articles) {
    const contentHtml = `<h2>${article.title}</h2><p>${article.desc}</p><p>This is a placeholder for the full article content. You can edit this directly in the CMS.</p>`;
    
    await prisma.post.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        excerpt: article.desc,
        coverImage: article.image,
        content: contentHtml,
        published: true,
      },
      create: {
        slug: article.slug,
        title: article.title,
        excerpt: article.desc,
        coverImage: article.image,
        content: contentHtml,
        published: true,
      }
    });
    console.log('Seeded:', article.title);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
