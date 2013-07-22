cd _deploy
git pull origin master
cd ..
bundle exec rake generate
grunt targethtml:public
bundle exec rake deploy