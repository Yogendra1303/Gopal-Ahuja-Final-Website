use strict;
use warnings;
use File::Find;

sub process_file {
    my $file = $_;
    return unless -f $file && $file =~ /\.tsx$/;

    open my $fh, '<', $file or die $!;
    my $content = do { local $/; <$fh> };
    close $fh;

    # Fix accidental text-accentxl -> text-5xl
    $content =~ s/text-accentxl/text-5xl/g;

    # Middle & Bottom sections:
    if ($file =~ /About\.tsx/) {
        $content =~ s/text-accent/text-[#C8102E]/g;
        $content =~ s/bg-accent text-bg-main(.*?)hover:bg-text-main hover:text-bg-main/bg-[#C8102E] text-white$1hover:bg-red-700 hover:text-white/g;
        $content =~ s/bg-accent/bg-[#C8102E]/g;
    }
    elsif ($file =~ /Insights\.tsx/) {
        $content =~ s/text-accent/text-[#C8102E]/g;
        $content =~ s/border-accent/border-[#C8102E]/g;
        $content =~ s/bg-accent/bg-[#C8102E]/g;
        $content =~ s/hover:border-accent/hover:border-[#C8102E]/g;
        $content =~ s/bg-bg-main/bg-[#FFFFFF]/g;
        $content =~ s/text-text-main/text-black/g;
        $content =~ s/text-text-muted/text-black\/70/g;
        $content =~ s/border-border-subtle/border-black\/10/g;
        $content =~ s/bg-bg-input/bg-[#FFFFFF]/g;
        $content =~ s/hover:text-text-main/hover:text-[#C8102E]/g;
    }
    elsif ($file =~ /Inquiry\.tsx/) {
        $content =~ s/text-accent/text-[#C8102E]/g;
        $content =~ s/bg-accent/bg-[#C8102E]/g;
        $content =~ s/border-accent/border-[#C8102E]/g;
        $content =~ s/hover:border-accent/hover:border-[#C8102E]/g;
        $content =~ s/bg-bg-main/bg-[#FFFFFF]/g;
        $content =~ s/text-text-main/text-black/g;
        $content =~ s/text-text-muted/text-black\/70/g;
        $content =~ s/border-border-subtle/border-black\/10/g;
        $content =~ s/bg-bg-input/bg-[#FFFFFF]/g;
        $content =~ s/hover:bg-text-main hover:text-bg-main/hover:bg-red-700 hover:text-white/g;
        $content =~ s/text-bg-main/text-white/g;
    }
    elsif ($file =~ /Navbar\.tsx/) {
        $content =~ s/GOPAL AHUJA \| AURA ADVISORY/GOPAL AHUJA/g;
        $content =~ s/text-accent/text-[#C8102E]/g;
        $content =~ s/hover:text-accent/hover:text-[#C8102E]/g;
        # Navbar Top Tier, Deep Green bg
        $content =~ s/bg-black\/50 backdrop-blur-md/bg-[#00843D]/g;
        $content =~ s/bg-black\/95 backdrop-blur-md/bg-[#00843D]/g;
        $content =~ s/text-text-muted/text-white\/80/g;
        $content =~ s/text-[#C8102E] font-sans text-xs tracking-\[0.2em\] font-bold uppercase/text-white font-sans text-xs tracking-\[0.2em\] font-bold uppercase/g;
    }
    elsif ($file =~ /Intelligence\.tsx/) {
        $content =~ s/text-accent/text-[#C8102E]/g;
        $content =~ s/bg-bg-main/bg-[#FFFFFF]/g;
        $content =~ s/text-text-main/text-black/g;
        $content =~ s/text-text-muted/text-black\/70/g;
        $content =~ s/border-border-subtle/border-black\/10/g;
        $content =~ s/bg-bg-input/bg-[#FFFFFF]/g;
        $content =~ s/hover:text-text-main/hover:text-[#C8102E]/g;
    }
    elsif ($file =~ /Home\.tsx/) {
        # any leftovers
        $content =~ s/text-accent/text-white/g;
        $content =~ s/hover:border-accent\/30/hover:border-[#C8102E]\/30/g;
        $content =~ s/focus-within:border-accent\/50/focus-within:border-[#C8102E]\/50/g;
    }

    open my $out, '>', $file or die $!;
    print $out $content;
    close $out;
}

find(\&process_file, 'src');
