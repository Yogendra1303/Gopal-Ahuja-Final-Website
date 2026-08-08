use strict;
use warnings;

my $file = 'src/components/Header.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

# Replace logo with pure text "GOPAL AHUJA"
$content =~ s/<motion\.a variants=\{\{ hidden:[^\}]+\}, visible: [^\}]+\}\} href="#\/" className="w-8 h-8 flex items-center justify-center border border-accent\/30 rotate-45 z-50">\s*<div className="w-3 h-3 bg-accent" \/>\s*<\/motion\.a>/<a href="#\/" className="text-white font-sans text-xs tracking-\[0.2em\] font-bold uppercase z-50">GOPAL AHUJA<\/a>/s;

# Update background to Solid Deep Green
$content =~ s/bg-bg-main\/90/bg-[#00843D]/g;

# Update texts
$content =~ s/text-text-main/text-white/g;
$content =~ s/text-text-muted/text-white\/80/g;

# Update hovers to UAE Crimson Red
$content =~ s/hover:text-accent/hover:text-[#C8102E]/g;
$content =~ s/hover:text-white/hover:text-[#C8102E]/g;
$content =~ s/border-accent/border-[#C8102E]/g;

# Replace remaining accent colors in advisory form with #C8102E
$content =~ s/bg-accent/bg-[#C8102E]/g;
$content =~ s/text-accent/text-[#C8102E]/g;

# Fix advisory button hover
$content =~ s/hover:bg-text-main hover:text-bg-main/hover:bg-red-700 hover:text-white/g;

# Make sure the mobile menu also gets correct colors
$content =~ s/bg-bg-main/bg-[#00843D]/g;

open my $out, '>', $file or die $!;
print $out $content;
close $out;
