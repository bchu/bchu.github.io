cd _deploy
git pull origin master
cd ..
bundle exec rake generate
grunt pre-deploy
bundle exec rake deploy