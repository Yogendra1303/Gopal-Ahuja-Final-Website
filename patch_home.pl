use strict;
use warnings;

my $file = 'src/pages/Home.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

# Hero Section
# Remove opacity-20 on image? Yes, gradient will overlay it. Or keep it? The prompt says "translucent green gradient overlay" so I can replace the gradients.
$content =~ s/bg-gradient-to-b from-bg-main via-transparent to-bg-main/bg-gradient-to-t from-[#00843D]\/90 to-[#00843D]\/70/g;
$content =~ s/bg-gradient-to-r from-bg-main via-transparent to-bg-main//g;

# Hero Mesh Glow -> remove or change to red/green? The prompt doesn't mention removing it, but "Solid Deep Green" and "Replace all legacy gold accents". Let's remove the glow or make it red. I'll just change `bg-accent` to `bg-[#C8102E]`.
$content =~ s/bg-accent\/5/bg-[#C8102E]\/5/g;

# Hero Text:
$content =~ s/text-accent(.*?)Global Real Estate Advisory/text-white$1Global Real Estate Advisory/gs;
$content =~ s/text-text-main(.*?)Launch Your Next Development/text-white$1Launch Your Next Development/gs;
$content =~ s/text-text-muted(.*?)We provide international builders/text-white\/90$1We provide international builders/gs;

# Hero Button
$content =~ s/bg-accent text-bg-main(.*?)Plan Your Expansion/bg-[#C8102E] text-white$1Plan Your Expansion/s;
$content =~ s/hover:bg-text-main hover:text-bg-main/hover:bg-red-700 hover:text-white/g;

# Ticker Section -> Ticker is Middle Tier, so background white
$content =~ s/bg-bg-subtle backdrop-blur-sm overflow-hidden flex/bg-[#FFFFFF] overflow-hidden flex/g;
$content =~ s/border-border-subtle\/50/border-black\/10/g;
$content =~ s/text-text-muted(.*?)EMAAR/text-black$1EMAAR/s;
$content =~ s/<span>•<\/span>/<span className="text-[#C8102E]">•<\/span>/g;

# Track Record (Glass Gallery) -> Middle Tier, background white
$content =~ s/<section id="portfolio" className="w-full max-w-7xl mx-auto py-32 px-6">/<section id="portfolio" className="w-full max-w-7xl mx-auto py-32 px-6 bg-[#FFFFFF]">/g;
$content =~ s/bg-bg-card\/80 backdrop-blur-xl border border-border-subtle/bg-[#FFFFFF] border border-black\/10/g;
$content =~ s/text-text-main(.*?)Execution & Deployments/text-black$1Execution & Deployments/s;
$content =~ s/bg-bg-input border border-border-subtle/bg-[#FFFFFF] border border-black\/10/g;
$content =~ s/text-text-main(.*?)Dubai 2026: The Tactical Symphony/text-black$1Dubai 2026: The Tactical Symphony/s;
$content =~ s/text-text-main(.*?)Waterfront Sovereign Alignment/text-black$1Waterfront Sovereign Alignment/s;
$content =~ s/text-accent(.*?)Explore Metrics/text-[#C8102E]$1Explore Metrics/gs;

# Market Intelligence -> Middle Tier, background white
$content =~ s/<section id="insights" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-border-subtle\/50">/<section id="insights" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-black\/10 bg-[#FFFFFF]">/g;
$content =~ s/text-text-main(.*?)Market Intelligence/text-black$1Market Intelligence/s;
$content =~ s/bg-bg-card\/80 backdrop-blur-lg border border-border-subtle/bg-[#FFFFFF] border border-black\/10/g;
$content =~ s/hover:bg-bg-subtle hover:border-\[#C5A880\]\/30/hover:bg-gray-50 hover:border-[#C8102E]\/30/g;
$content =~ s/text-text-main(.*?)Dubai Velocity Report/text-black$1Dubai Velocity Report/s;
$content =~ s/text-text-main(.*?)Sovereign Yield Matrix/text-black$1Sovereign Yield Matrix/s;
$content =~ s/text-text-main(.*?)Zoning Arbitration/text-black$1Zoning Arbitration/s;
$content =~ s/text-text-muted(.*?)Analysis of transactional speed/text-black\/70$1Analysis of transactional speed/s;
$content =~ s/text-text-muted(.*?)Comprehensive yield mapping/text-black\/70$1Comprehensive yield mapping/s;
$content =~ s/text-text-muted(.*?)Predictive modeling/text-black\/70$1Predictive modeling/s;
$content =~ s/text-accent(.*?)Q3 2026/text-[#C8102E]$1Q3 2026/gs;
$content =~ s/group-hover:text-accent group-hover:border-accent/group-hover:text-[#C8102E] group-hover:border-[#C8102E]/g;

# Inner Circle (Subscribe) -> Bottom Tier, Pure Black bg, white text
$content =~ s/<section className="w-full py-32 px-6 border-t border-border-subtle\/50">/<section className="w-full py-32 px-6 bg-[#000000]">/g;
$content =~ s/text-accent(.*?)THE INNER CIRCLE/text-white$1THE INNER CIRCLE/s;
$content =~ s/text-text-main(.*?)Secure the allocation/text-white$1Secure the allocation/s;
$content =~ s/text-text-muted(.*?)Join a private/text-white\/80$1Join a private/s;
$content =~ s/bg-bg-input border border-border-subtle/bg-[#000000] border border-white\/20/g;
$content =~ s/text-text-main placeholder:text-text-muted/text-white placeholder:text-white\/50/g;
$content =~ s/bg-accent text-bg-main(.*?)Subscribe/bg-[#C8102E] text-white$1Subscribe/s;
$content =~ s/border-border-subtle/border-white\/20/g;

# Adjust main container background
$content =~ s/bg-bg-main/bg-[#FFFFFF]/g;

open my $out, '>', $file or die $!;
print $out $content;
close $out;
