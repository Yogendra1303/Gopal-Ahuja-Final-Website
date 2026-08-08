use strict;
use warnings;

my $file = 'src/components/Footer.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

$content =~ s!bg-bg-main!bg-[#000000]!g;
$content =~ s!text-text-main!text-white!g;
$content =~ s!text-text-muted!text-white/80!g;
$content =~ s!border-border-subtle!border-white/20!g;

$content =~ s!<div className="flex items-center gap-3 mb-6">.*?<\/div>!<div className="flex items-center gap-3 mb-6"><span className="font-mono text-white text-xs tracking-[0.2em] font-bold uppercase">GOPAL AHUJA</span></div>!s;

open my $out, '>', $file or die;
print $out $content;
close $out;
