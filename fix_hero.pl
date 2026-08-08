use strict;
use warnings;

my $file = 'src/components/Hero.tsx';
open my $fh, '<', $file or die;
my $content = do { local $/; <$fh> };
close $fh;

$content =~ s/bg-bg-main/bg-[#00843D]/g;
$content =~ s/bg-gradient-to-t from-black via-black\/70 to-black\/40/bg-gradient-to-b from-[#00843D]\/90 via-[#00843D]\/70 to-[#00843D]\/95/g;
$content =~ s/text-text-main/text-white/g;
$content =~ s/text-text-muted/text-white\/90/g;
$content =~ s/bg-\[\#C8102E\] text-bg-main/bg-[#C8102E] text-white/g;
$content =~ s/hover:bg-text-main hover:text-bg-main/hover:bg-red-700 hover:text-white/g;

open my $out, '>', $file or die;
print $out $content;
close $out;
