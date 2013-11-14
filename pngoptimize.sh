help="
PNGOUT [In:{PNG,JPG,GIF,TGA,PCX,BMP}] (Out:PNG) (options...)

   -c# PNG output color: 0=Gray, 2=RGB, 3=Pal, 4=Gray+Alpha, 6=RGB+Alpha
   -f# PNG output filter: 0=none, 1=x, 2=y, 3=x&y, 4=Paeth, 5=mixed, 6=reuse
   -d# Override default bitdepth: 0(min),1,2,4,8 (valid only in /c0,/c3 modes)
   -s# Select strategy. 0:Xtreme(default), 1:Intense, 2:Longest Match,
       3:Huffman Only, 4:Uncompressed
   -b# Block split threshold (lower=more blocks, 0=1 block/file, default=256)
       Use trial&error! Suggested values to try are: 0,128,192,256,512,1024,..
   -n# Exact number of Huffman blocks (overrides /b#)
   -r  Randomized initial tables (good for many trials with same options)
   -k? 0=Remove optional chunks (default), 1=Keep all
       p=Keep palette indices, s=Keep settings for /c,f,d,b
   -k(Chunk,Chunk,..) Preserve only named chunk(s). Example: -kgAMA,bKGD,tEXt
   -v,q,l Verbose,Quiet,List mode (use '-' as filename to specify stdin/stdout)
   -y  Assume Yes at the 'overwrite file?' prompt
   -force  Write file even if bigger.
   -mincodes#  Workaround for buggy decoders. 1:Zlib 1.2.1 bug, 2:buggy mobiles

The 1st filename is the input. If you omit the output
filename, PNGOUT will use the same filename with a .PNG extension. Examples:
   $ pngout inlarge.bmp outsmall.png           <- writes outsmall.png
   $ pngout duke3d.png -c2 -f3 -b128 -kbKGD -v <- writes duke3d.png if smaller
"

if [ "$1" == "-h" ]; then
    echo "$help"
    exit
fi
if [ "$1" == "" ]; then
    set "." # sets positional parameters
fi
if [ "$2" == "" ]; then
    set $1 "-c2" # default: RGB, no alpha
fi

./pngout $@