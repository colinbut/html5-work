#!/bin/bash

echo "Start building"


xampp="/c/xampp/htdocs/projects/"
project="HTML5Demo"
target="$xampp/$project"
mkdir -v $target 

cd $target 

mkdir -v css js images audios videos

cd -

mv -v ../src/*.html $target/
mv -v ../install/css/* $target/css/
mv -v ../install/js/* $target/js/
mv -v ../install/images/* $target/images/

mv -v ../install/audios/mp3s.tar.gz $target/audios/
tar -xvf $target/audios/mp3s.tar.gz

mv -v ../install/videos/videos.tar.gz $target/videos/
tar -xvf $target/videos/videos.tar.gz

echo "Finished building"
echo "source code deployed"
date
echo "[Build Completed]"



