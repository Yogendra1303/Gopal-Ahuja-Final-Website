use strict;
use warnings;
use File::Find;

my @files = ();
sub wanted {
    if (-f $_ && $_ =~ /\.tsx$/) {
        push @files, $File::Find::name;
    }
}
find(\&wanted, 'src');

foreach my $file (@files) {
    # Skip Header and Footer as they are already done or different rules apply
    # Header was manually fixed. Footer should be Black Zone.
    next if $file =~ /Header\.tsx$/;
    next if $file =~ /Footer\.tsx$/;
    next if $file =~ /Hero\.tsx$/;
    
    open my $fh, '<', $file or die;
    my $content = do { local $/; <$fh> };
    close $fh;
    
    my $original = $content;
    
    $content =~ s/bg-bg-main/bg-white/g;
    $content =~ s/bg-bg-card/bg-white/g;
    $content =~ s/bg-bg-subtle-hover/bg-gray-100/g;
    $content =~ s/bg-bg-subtle/bg-gray-50/g;
    $content =~ s/text-text-main/text-gray-900/g;
    $content =~ s/text-text-muted/text-gray-500/g;
    $content =~ s/border-border-subtle\/50/border-gray-200/g;
    $content =~ s/border-border-subtle/border-gray-200/g;
    
    # We shouldn't have bg-[#000000] anywhere else, but let's check.
    $content =~ s/bg-\[\#000000\]/bg-white/g;
    
    if ($content ne $original) {
        open my $out, '>', $file or die;
        print $out $content;
        close $out;
    }
}
