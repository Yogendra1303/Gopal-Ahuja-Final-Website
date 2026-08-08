use strict;
use warnings;

my $file = 'src/pages/Home.tsx';
open my $fh, '<', $file or die $!;
my $content = do { local $/; <$fh> };
close $fh;

if ($content =~ s/(\{\/\* C\. The Ticker.*?)(\{\/\* D\. Track Record)/
    my ($c, $d) = ($1, $2);
    $c =~ s!bg-bg-main!bg-[#FFFFFF]!g;
    $c =~ s!border-border-subtle!border-black\/10!g;
    $c =~ s!text-text-main!text-black!g;
    $c . $d;
/es) { print "Updated C\n"; }

if ($content =~ s/(\{\/\* D\. Track Record.*?)(\{\/\* E\. Market Reports)/
    my ($c, $d) = ($1, $2);
    $c =~ s!bg-bg-main!bg-[#FFFFFF]!g;
    $c =~ s!border-border-subtle!border-black\/10!g;
    $c =~ s!text-text-main!text-black!g;
    $c . $d;
/es) { print "Updated D\n"; }

if ($content =~ s/(\{\/\* E\. Market Reports.*?)(\{\/\* F\. The Inner Circle)/
    my ($c, $d) = ($1, $2);
    $c =~ s!bg-bg-main!bg-[#FFFFFF]!g;
    $c =~ s!border-border-subtle!border-black\/10!g;
    $c =~ s!text-text-main!text-black!g;
    $c =~ s!text-text-muted!text-black\/70!g;
    $c =~ s!hover:bg-bg-subtle!hover:bg-stone-50!g;
    $c . $d;
/es) { print "Updated E\n"; }

if ($content =~ s/(\{\/\* F\. The Inner Circle.*?)<\/div>/
    my $c = $1;
    $c =~ s!bg-bg-main!bg-[#000000]!g;
    $c =~ s!text-text-main!text-white!g;
    $c =~ s!text-text-muted!text-white\/80!g;
    $c =~ s!border-border-subtle!border-white\/20!g;
    $c . "      <\/div>";
/es) { print "Updated F\n"; }

open my $out, '>', $file or die;
print $out $content;
close $out;
