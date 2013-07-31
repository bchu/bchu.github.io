mkdir -p _deploy
cd _deploy
git init
git config user.name "Brian Chu"
git config user.email bc@brianchu.com
git remote add origin https://bchu@github.com/bchu/bchu.github.io.git
git pull -u origin master
cd ..
echo "Done!"
