use strict;
use warnings;

my $file = 'src/components/Header.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

$content =~ s/<button\s+className="md:hidden text-text-main z-50"/<div className="md:hidden flex items-center gap-4 z-50"><button onClick={toggleTheme} className="text-text-main hover:text-accent transition-colors">{isDarkMode ? <Sun size={20} \/> : <Moon size={20} \/>}<\/button><button className="md:hidden text-text-main z-50"/s;

$content =~ s/\{isMobileMenuOpen \? <X size=\{24\} \/> : <Menu size=\{24\} \/>\}\n\s*<\/button>/{isMobileMenuOpen ? <X size={24} \/> : <Menu size={24} \/>}\n        <\/button><\/div>/s;

open my $out, '>', $file or die $!;
print $out $content;
close $out;
