## brianchu.com

Based on Octopress.

## Instructions

0. Follow Octopress setup: <http://octopress.org/docs/setup/>
1. `git submodule init && git submodule update` to install the brianchu.com theme under /.themes/bootstrap/
2. Set up github pages deploy: <http://octopress.org/docs/deploying/github/>
    * run `./setup_github_pages.sh` to set up a clone of the repo in `/_deploy`.
    * this creates another repo in /_deploy, which tracks the master branch of the repo. For that reason, do not do anything under the master branch (except through Octopress's scripts) if you're sharing the same repo. Also make sure to run the above command if you're setting up a github pages repo that already exists.
3. `./deployfromtheme.sh` to install the theme and deploy.

###Todo

1. Update bootstrap.
2. Pull changes from octopress classic theme. (esp. JS changes);
5. after clicking on a blog, show button to return to index
7. consider different permalink schemes
8. Revamp Google search appearance, FB appearance

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


## Acknowledgements

This site uses Octopress. The Octopress license is included below:

Copyright © 2009-2013 Brandon Mathis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
