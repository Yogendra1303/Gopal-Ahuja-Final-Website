use strict;
use warnings;

my $file = 'src/pages/Home.tsx';
open my $fh, '<', $file or die;
my $content = do { local $/; <$fh> };
close $fh;

my $start_str = '{/* F. The Inner Circle (Newsletter) */}';
my $idx = index($content, $start_str);
if ($idx != -1) {
    my $before = substr($content, 0, $idx);
    my $after = substr($content, $idx);
    $after =~ s/bg-\[\#000000\]/bg-[#FFFFFF]/g;
    $after =~ s/text-white\/80/text-gray-500/g;
    $after =~ s/text-white/text-gray-900/g;
    $after =~ s/border-white\/20/border-gray-200/g;
    
    # but wait, there is the <button className="bg-[#C8102E] text-white
    # It will become text-gray-900 if I blindly replace text-white. Let's fix that.
    $after =~ s/bg-\[\#C8102E\] text-gray-900/bg-[#C8102E] text-white/g;
    
    open my $out, '>', $file or die;
    print $out $before . $after;
    close $out;
}
