use strict;
use warnings;

sub update_file {
    my ($file, $subref) = @_;
    open my $fh, '<', $file or return;
    my $content = do { local $/; <$fh> };
    close $fh;
    
    my $new_content = $subref->($content);
    if ($new_content ne $content) {
        open my $out, '>', $file or die;
        print $out $new_content;
        close $out;
        print "Updated $file\n";
    }
}

# 1. Header.tsx
update_file('src/components/Header.tsx', sub {
    my $c = shift;
    # Persistent Solid Green background
    $c =~ s/className=\{`fixed top-0 w-full h-24 z-50 px-6 md:px-12 flex items-center justify-between transition-colors duration-500 \$\{.*?\}`\}/className="fixed top-0 w-full h-24 z-50 px-6 md:px-12 flex items-center justify-between transition-colors duration-500 bg-[#00843D] border-b border-white\/10"/s;
    
    # Remove Diamond SVG, put Text
    $c =~ s/<motion\.a[^>]*href="#\/"[^>]*className="w-8 h-8 flex items-center justify-center[^>]*>.*?<\/motion\.a>/<motion.a variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} href="#\/" className="z-50 text-white font-bold tracking-widest uppercase">GOPAL AHUJA<\/motion.a>/s;
    
    return $c;
});

# 2. Hero.tsx
update_file('src/components/Hero.tsx', sub {
    my $c = shift;
    $c =~ s/bg-gradient-to-b from-\[\#00843D\]\/90 via-\[\#00843D\]\/70 to-\[\#00843D\]\/95/bg-gradient-to-b from-[#00843D]\/95 via-[#00843D]\/85 to-[#00843D]\/95/g;
    return $c;
});

# 3. Home.tsx
update_file('src/pages/Home.tsx', sub {
    my $c = shift;
    
    # Headings to black and extrabold
    $c =~ s/text-gray-900 font-medium/text-black font-extrabold/g;
    $c =~ s/text-gray-900 mb-2/text-black mb-2/g;
    
    # Market Intelligence Cards
    if ($c =~ s/(\{\/\* E\. Market Reports.*?)(\{\/\* F\. The Inner Circle)/
        my ($e, $f) = ($1, $2);
        
        $e =~ s!className="bg-gray-50 border border-gray-200 p-10 rounded-none hover:bg-gray-100 hover:border-\[\#C8102E\]\/30 transition-all duration-500 flex flex-col justify-between h-full cursor-pointer group"!className="bg-white border border-gray-200 shadow-sm p-8 rounded-none transition-all duration-500 flex flex-col justify-between h-full cursor-pointer group hover:shadow-md hover:border-gray-300"!g;
        
        $e =~ s!<span className="font-mono text-gray-900 text-\[10px\] md:text-\[11px\] font-medium tracking-\[0.3em\] uppercase mb-6 block">Q3 2026<\/span>!<span className="text-[#C8102E] font-bold text-sm tracking-widest uppercase mb-6 block">Q3 2026<\/span>!g;
        
        $e =~ s!<h3 className="text-gray-900 text-xl md:text-2xl font-medium mb-4 tracking-\[-0.02em\] leading-\[1.1\]">!<h3 className="text-black font-bold text-2xl mt-2 mb-4 tracking-[-0.02em] leading-[1.1]">!g;
        
        $e =~ s!<span className="font-mono font-medium text-gray-500 text-\[10px\] md:text-\[11px\] tracking-\[0.25em\] uppercase border-b border-transparent pb-1 inline-block w-max group-hover:text-\[\#C8102E\] group-hover:border-\[\#C8102E\] transition-colors">Download PDF &darr;<\/span>!<span className="text-[#C8102E] font-bold text-sm uppercase inline-block w-max group-hover:text-red-700 transition-colors">DOWNLOAD PDF &darr;<\/span>!g;
        
        $e . $f;
    /es) { }

    # The Inner Circle (Black Authority Zone)
    if ($c =~ s/(\{\/\* F\. The Inner Circle.*?)<\/div>/
        my $f = $1;
        $f =~ s/bg-\[\#FFFFFF\]/bg-[#000000]/g;
        $f =~ s/bg-gray-50/bg-[#000000]/g;
        $f =~ s/text-gray-900/text-white/g;
        $f =~ s/text-gray-500/text-white\/70/g;
        
        $f =~ s/<input type="email" placeholder="ENTER SECURE EMAIL" className="flex-1 bg-transparent text-gray-900 px-6 py-4 outline-none font-mono text-\[10px\] md:text-\[11px\] font-medium tracking-\[0.3em\] uppercase placeholder:text-gray-500 rounded-none" \/>/<input type="email" placeholder="ENTER SECURE EMAIL" className="flex-1 bg-black text-white px-6 py-4 outline-none font-mono text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase placeholder:text-white\/50 rounded-none border-none" \/>/g;
        
        $f =~ s/className="flex flex-col sm:flex-row w-full max-w-lg mx-auto mt-10 bg-white border border-gray-200 p-0 rounded-none relative z-10 focus-within:border-\[\#C8102E\]\/50 transition-colors"/className="flex flex-col sm:flex-row w-full max-w-lg mx-auto mt-10 bg-black border border-gray-700 p-0 rounded-none relative z-10 focus-within:border-[#C8102E] transition-colors"/g;
        
        $f =~ s/<button className="bg-\[\#C8102E\] text-white px-10 py-4 font-mono text-\[11px\] md:text-\[12px\] font-medium uppercase tracking-\[0.2em\] hover:bg-red-700 transition-colors duration-300 rounded-none border-l border-gray-200">Subscribe<\/button>/<button className="bg-[#C8102E] text-white px-8 py-4 font-bold uppercase tracking-[0.2em] hover:bg-red-700 transition-colors duration-300 rounded-none">Subscribe<\/button>/g;
        
        $f . "      </div>";
    /es) { }
    
    return $c;
});

# 4. About.tsx
update_file('src/pages/About.tsx', sub {
    my $c = shift;
    
    # Headings to black and extrabold
    $c =~ s/text-gray-900 font-bold/text-black font-extrabold/g;
    
    # Ensure timeline nodes are bright red #C8102E
    $c =~ s/bg-zinc-600/bg-[#C8102E]/g;
    
    return $c;
});

# 5. Insights.tsx
update_file('src/pages/Insights.tsx', sub {
    my $c = shift;
    # Headings to black and extrabold
    $c =~ s/text-gray-900 font-medium/text-black font-extrabold/g;
    $c =~ s/text-gray-900 font-bold/text-black font-extrabold/g;
    return $c;
});

