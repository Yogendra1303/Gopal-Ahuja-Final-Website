use strict;
use warnings;

my $file = 'src/pages/Home.tsx';
open my $fh, '<', $file or die;
my $content = do { local $/; <$fh> };
close $fh;

# Hero section text (Top Tier)
$content =~ s/text-text-main/text-white/g;
$content =~ s/text-text-muted/text-white\/90/g;

# Wait, this global replacement will ruin the Middle Tier and Bottom Tier.
# Let's target specific sections.

# Middle Tier: C. The Ticker
$content =~ s/\{\/\* C. The Ticker.*?\{\/\* D. Track Record/
    my $c = $&;
    $c =~ s!bg-bg-main!bg-[#FFFFFF]!g;
    $c =~ s!border-border-subtle!border-black/10!g;
    $c =~ s!text-white!text-black!g;  # Because we just blindly changed text-text-main to text-white? No wait.
    $c;
/egs;

# Let's revert back and do it properly.
