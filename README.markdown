## brianchu.com

Based on Octopress.

## Instructions

0. Follow Octopress setup: <http://octopress.org/docs/setup/>
    * Make sure `sass` gem is installed, run `bundle install`
    * Syntax highlighting (via pygments) requires Python 2.7+ to be installed and bound to the `python` global name. This can be accomplished by creating a symbolic link in the root directory of the project.
2. Set up github pages deploy: <http://octopress.org/docs/deploying/github/>
    * run `./setup_github_pages.sh` to set up a clone of the repo in `/_deploy`.
    * this creates another repo in /_deploy, which tracks the master branch of the repo. For that reason, do not do anything under the master branch (except through Octopress's scripts) if you're sharing the same repo. Also make sure to run the above command if you're setting up a github pages repo that already exists.
3. `./deploy.sh` to install the theme and deploy.
4. `grunt static` to generate the website and have livereload watch the sass and public folders (for editing the static website directly)
5. `grunt` to generate the website and have livereload do the same watches as `grunt static`, but also regenerate the entire website when non-style/js/public source files change.

###Todo

1. color scheme, colorify headers
2. make contact form gradient consistent with search, remove jquery duplication
3. cleanup CSS, simplify and consolidate responsive features
4. add images for projects
5. show additional list of categories and recent posts when you scroll down a certain amount.
6. mixpanel, quantcast, google analytics goals/click tracking
7. github slideout
8. upgrade font awesome
9. fix personal page dynamic 404s, with search interference fixed
10. *convert homepage to a summary of all and about and blog*
11. convert png profile to jpg
12. cleanup stylesheet mess

## Prerequisites

Please check that you have a recent version of [compass](http://compass-style.org/) installed in octopress' bundle
(see Gemfile.lock in your octopress directory and run bundle update if necessary), otherwise, you might get errors
similar to those reported in issue #7. Compass version 0.12.1 is known to work.

Currently, version of sass least 3.2 is needed due to requirements of [twitter-bootstrap-sass](https://github.com/jlong/sass-twitter-bootstrap):

     $ gem list| grep sass
     sass (3.2.4)

To update, run ````bundle update sass```` in your octopress directory. Make sure to *remove the older versions of sass*,
as compass might pick one of those up and site generation would fail.

     $ bundle update sass
     $ gem remove sass -v3.1.20


## Code snippet colors

Theme utilizes the solarized color scheme for code snippets. By default, the
bootstrap variant is selected, but light/dark colors can be used by setting
the $solarized variable in sass/syntax/\_higlight.scss.


## Acknowledgements and License

This site uses Octopress. See [LICENSE](https://github.com/bchu/bchu.github.io/blob/brian/LICENSE).
