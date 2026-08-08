use strict;
use warnings;

my $file = 'src/components/Hero.tsx';
open my $fh, '<', $file or die;
my $content = do { local $/; <$fh> };
close $fh;

$content =~ s/bg-gradient-to-b from-\[\#00843D\]\/95 via-\[\#00843D\]\/85 to-\[\#00843D\]\/95/bg-gradient-to-b from-[#40A05A]\/90 to-[#07632D]\/95/g;

open my $out, '>', $file or die;
print $out $content;
close $out;
