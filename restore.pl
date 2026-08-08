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

    # Revert Hero
    $content =~ s/from-\[\#00843D\]\/90 to-\[\#00843D\]\/70/from-black via-black\/70 to-black\/40/g;
    
    # Hero button hover
    $content =~ s/hover:bg-red-700/hover:bg-text-main hover:text-bg-main/g;
    
    # Red background and text to accent
    $content =~ s/bg-\[\#C8102E\]/bg-accent/g;
    $content =~ s/text-\[\#C8102E\]/text-accent/g;
    $content =~ s/border-\[\#C8102E\]/border-accent/g;
    $content =~ s/hover:border-\[\#C8102E\]/hover:border-accent/g;
    
    # White background back to black theme
    $content =~ s/bg-\[\#FFFFFF\]/bg-bg-main/g;
    
    # Background black back to bg-main or inputs
    # Let's just restore bg-bg-main where bg-[#000000] was used
    $content =~ s/bg-\[\#000000\]/bg-bg-main/g;
    
    # Navbar and general text replacements
    $content =~ s/bg-\[\#00843D\]/bg-black\/50 backdrop-blur-md/g;
    
    # We replaced text-black with text-text-main
    $content =~ s/text-black\/70/text-text-muted/g;
    $content =~ s/text-black/text-text-main/g;
    
    # In some places we replaced text-white with text-text-main or text-accent, wait. 
    # Let's fix text colors specifically for Hero and global.
    $content =~ s/text-white\/90/text-text-muted/g;
    $content =~ s/text-white\/80/text-text-muted/g;
    $content =~ s/text-white\/70/text-text-muted/g;
    $content =~ s/text-white\/50/text-text-muted/g;
    # text-white was used heavily, but it should be text-text-main
    $content =~ s/text-white/text-text-main/g;

    # specific string replacements
    $content =~ s/text-text-main(.*?)Launch Your Next Development/text-text-main$1Launch Your Next Development/s; 

    # Borders
    $content =~ s/border-black\/10/border-border-subtle/g;
    $content =~ s/border-white\/20/border-border-subtle/g;
    
    # Backgrounds
    $content =~ s/bg-gray-50/bg-bg-subtle/g;
    
    if ($content ne $original) {
        open my $out, '>', $file or die "Cannot open $file for write: $!";
        print $out $content;
        close $out;
        print "Restored $file\n";
    }
}

find(\&process_file, 'src');
