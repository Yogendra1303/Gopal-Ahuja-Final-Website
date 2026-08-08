use strict;
use warnings;

my $file = 'src/pages/Home.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

$content =~ s/<section className="w-full max-w-4xl mx-auto py-32 px-6 text-center relative">/<section className="w-full py-32 px-6 text-center relative bg-[#000000]">/g;
$content =~ s/<h2 className="text-4xl md:text-5xl text-text-main font-medium mb-6 tracking-\[-0.02em\] leading-\[1.1\]">Get our private market intel.<\/h2>/<h2 className="text-4xl md:text-5xl text-white font-medium mb-6 tracking-[-0.02em] leading-[1.1]">Get our private market intel.<\/h2>/g;
$content =~ s/<p className="text-text-muted font-light text-base md:text-lg mb-12 tracking-\[0.02em\] max-w-2xl md:max-w-3xl mx-auto">We share off-market acquisition targets exclusively with our list once a month.<\/p>/<p className="text-white\/80 font-light text-base md:text-lg mb-12 tracking-[0.02em] max-w-2xl md:max-w-3xl mx-auto">We share off-market acquisition targets exclusively with our list once a month.<\/p>/g;

$content =~ s/bg-\[#FFFFFF\] border border-black\/10 p-0 rounded-none relative z-10 focus-within:border-\[#C8102E\]\/50 transition-colors/bg-[#000000] border border-white\/20 p-0 rounded-none relative z-10 focus-within:border-[#C8102E]\/50 transition-colors/g;

$content =~ s/className="flex-1 bg-transparent text-text-main px-6 py-4 outline-none font-mono text-\[10px\] md:text-\[11px\] font-medium tracking-\[0.3em\] uppercase placeholder:text-text-muted rounded-none"/className="flex-1 bg-transparent text-white px-6 py-4 outline-none font-mono text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase placeholder:text-white\/50 rounded-none"/g;

open my $out, '>', $file or die $!;
print $out $content;
close $out;
