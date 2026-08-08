use strict;
use warnings;

my $file = 'src/components/Header.tsx';
open my $fh, '<', $file or die;
my $content = do { local $/; <$fh> };
close $fh;

$content =~ s/<motion\.a variants=\{\{ hidden: \{ opacity: 0, y: -10 \}, visible: \{ opacity: 1, y: 0 \} \}\} href="#\/" className="z-50 text-white font-bold tracking-widest uppercase">GOPAL AHUJA<\/motion\.a>/<motion.a variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} href="#\/" className="w-8 h-8 flex items-center justify-center border border-[#C8102E]\/30 rotate-45 z-50">\n          <div className="w-3 h-3 bg-[#C8102E]" \/>\n        <\/motion.a>/g;

$content =~ s/bg-black\/50\/60/bg-[#00843D]\/90/g;
$content =~ s/bg-black\/50/bg-[#00843D]\/90/g;

# Fix the advisory inputs
$content =~ s/bg-bg-main border border-white\/20 p-4 text-white placeholder:text-white\/80/bg-white border border-gray-200 p-4 text-gray-900 placeholder:text-gray-500/g;

open my $out, '>', $file or die;
print $out $content;
close $out;
