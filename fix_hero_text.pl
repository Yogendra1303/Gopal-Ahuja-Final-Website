use strict;
use warnings;

my $file = 'src/pages/Home.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

if ($content =~ s/(<section className="relative w-full min-h-screen.*?)(?=\{\/\* C\. The Ticker)/
    my $c = $1;
    $c =~ s!text-text-main!text-white!g;
    $c =~ s!text-text-muted!text-white\/90!g;
    $c;
/es) { print "Updated Hero Text\n"; }

open my $out, '>', $file or die;
print $out $content;
close $out;
