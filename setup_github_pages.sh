mkdir -p _deploy
cd _deploy
git init
git remote add origin https://bchu@github.com/bchu/bchu.github.io.git
git pull -u origin master
cd ..
echo "Done!"
