use strict;
use warnings;

my $file = 'src/components/Footer.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

# Background
$content =~ s/bg-bg-main\/90 backdrop-blur-2xl/bg-[#000000]/g;
$content =~ s/bg-bg-card\/50/bg-[#000000]/g;

# Text Colors
$content =~ s/text-text-main/text-white/g;
$content =~ s/text-text-muted/text-white\/80/g;

# Accents -> Crimson Red
$content =~ s/text-accent/text-[#C8102E]/g;
$content =~ s/border-accent/border-[#C8102E]/g;
$content =~ s/hover:text-accent/hover:text-[#C8102E]/g;
$content =~ s/hover:bg-accent/hover:bg-[#C8102E]/g;

# Logo replacement
$content =~ s/<div className="w-5 h-5 border border-\[#C8102E\] rotate-45 flex items-center justify-center">\s*<div className="w-2 h-2 bg-\[#C8102E\]" \/>\s*<\/div>\s*<span className="font-mono text-white text-xs tracking-\[0.2em\] font-bold uppercase">\s*Gopal Ahuja Consulting\s*<\/span>/<span className="font-mono text-white text-xs tracking-\[0.2em\] font-bold uppercase">\nGOPAL AHUJA\n<\/span>/s;

# Button text hover
$content =~ s/hover:text-bg-main/hover:text-white/g;

open my $out, '>', $file or die $!;
print $out $content;
close $out;
