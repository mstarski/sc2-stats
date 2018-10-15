declare -A FONTS=( ["roboto"]=500,600,700,regular ) 
mkdir -p ./fonts;
for font in "${!FONTS[@]}" ; do 
    echo $font
    wget -O ${font}.zip "https://google-webfonts-helper.herokuapp.com/api/fonts/${font}?download=zip&subsets=latin-ext&variants=${FONTS[${font}]}"
    unzip -j ${font}.zip -d ./fonts 
    rm ./${font}.zip; 
done
