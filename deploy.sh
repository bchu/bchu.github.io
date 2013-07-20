cd _deploy
git pull origin master
cd ..
bundle exec rake generate
bundle exec rake deploy