use strict;
use warnings;

my $file = 'src/pages/Insights.tsx';
open my $fh, '<', $file or die;
my $content = do { local $/; <$fh> };
close $fh;

# Replace colors
$content =~ s/bg-bg-main/bg-white/g;
$content =~ s/bg-bg-card/bg-white/g;
$content =~ s/bg-bg-subtle/bg-gray-50/g;
$content =~ s/bg-bg-subtle-hover/bg-gray-100/g;
$content =~ s/text-text-main/text-gray-900/g;
$content =~ s/text-text-muted/text-gray-500/g;
$content =~ s/border-border-subtle\/50/border-gray-200/g;
$content =~ s/border-border-subtle/border-gray-200/g;
# The hero part of Insights (if it has bg-black etc.)
# We should probably change all files to remove text-text-main and bg-bg-main
open my $out, '>', $file or die;
print $out $content;
close $out;
