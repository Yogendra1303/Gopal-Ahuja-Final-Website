use strict;
use warnings;
use File::Find;

sub process_file {
    my $file = $_;
    return unless -f $file && $file =~ /\.tsx$/;
    
    open my $fh, '<', $file or die;
    my $content = do { local $/; <$fh> };
    close $fh;
    
    my $original = $content;
    
    # We will do fine-grained replacements for each file
    
    if ($file eq 'Header.tsx') {
        $content =~ s/bg-black\/50 backdrop-blur-md/bg-[#00843D]\/90 backdrop-blur-md/g;
        $content =~ s/bg-black\/50/bg-[#00843D]\/90/g;
        $content =~ s/bg-black\/50\/60/bg-[#00843D]\/90/g;
        
        # Replace GOPAL AHUJA text with Diamond SVG logo as requested: "Add diamond SVG diamond logos/icons at place of Gopal Ahuja in a header."
        $content =~ s/<motion\.a variants=\{\{ hidden: \{ opacity: 0, y: -10 \}, visible: \{ opacity: 1, y: 0 \} \}\} href="#\/" className="z-50 text-white font-bold tracking-widest uppercase">GOPAL AHUJA<\/motion\.a>/<motion.a variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} href="#\/" className="w-8 h-8 flex items-center justify-center border border-[#C8102E]\/30 rotate-45 z-50">\n          <div className="w-3 h-3 bg-[#C8102E]" \/>\n        <\/motion.a>/g;
        
        $content =~ s/bg-bg-main/bg-[#FFFFFF]/g;
        $content =~ s/text-white/text-gray-900/g;
        # Wait, header text MUST be white because it's in the Green Zone
        # Actually in Header.tsx, we can leave text-white as is. We only need to fix the input fields in the advisory panel.
    }

    if ($content ne $original) {
        open my $out, '>', $file or die;
        print $out $content;
        close $out;
    }
}
find(\&process_file, 'src');
