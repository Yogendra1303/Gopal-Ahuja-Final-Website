use strict;
use warnings;
use File::Find;

sub process_file {
    my $file = $_;
    return unless -f $file && $file =~ /\.tsx$/;
    open my $fh, '<', $file or return;
    my $content = do { local $/; <$fh> };
    close $fh;
    my $original = $content;

    # Global Accent replacements to Red
    $content =~ s/text-accent/text-[#C8102E]/g;
    $content =~ s/bg-accent/bg-[#C8102E]/g;
    $content =~ s/border-accent/border-[#C8102E]/g;
    $content =~ s/hover:bg-accent/hover:bg-[#C8102E]/g;
    $content =~ s/hover:text-accent/hover:text-red-700/g;
    $content =~ s/hover:border-accent/hover:border-[#C8102E]/g;
    $content =~ s/group-hover:text-accent/group-hover:text-red-700/g;
    $content =~ s/group-hover:border-accent/group-hover:border-[#C8102E]/g;
    $content =~ s/focus-within:border-accent\/50/focus-within:border-[#C8102E]\/50/g;

    # Hero / Header (Green Zone) - manual fixes for Header.tsx and Home.tsx later
    # Bottom Tier / Footer (Black Zone) - manual fixes later

    # Primary buttons global
    $content =~ s/bg-accent text-text-main(.*?)hover:bg-text-main hover:text-bg-main/bg-[#C8102E] text-white$1hover:bg-red-700 hover:text-white/g;
    $content =~ s/bg-accent text-bg-main(.*?)hover:bg-text-main hover:text-bg-main/bg-[#C8102E] text-white$1hover:bg-red-700 hover:text-white/g;

    if ($content ne $original) {
        open my $out, '>', $file or die $!;
        print $out $content;
        close $out;
    }
}
find(\&process_file, 'src');
