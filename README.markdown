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

### Todo

1. add images for projects
2. show additional list of categories and recent posts when you scroll down a certain amount.
3. mixpanel, quantcast, google analytics goals/click tracking
4. github slideout
5. *convert homepage to a summary of all and about and blog*
6. cleanup stylesheet mess (esp. extraneous)
7. Add blog icons
8. consider full bleed magazine like experience at header
make contact form gradient consistent with search, remove jquery duplication
search form popout shifts due to scroll bar
clickable blog index excerpt
fix firefox share box position
add tags to blog post preview byline

## Prerequisites

Please check that you have a recent version of [compass](http://compass-style.org/) installed in octopress' bundle
(see Gemfile.lock in your octopress directory and run bundle update if necessary), otherwise, you might get errors
similar to those reported in issue #7. Compass version 0.12.1 is known to work.

Currently, version of sass least 3.2 is needed.

     $ gem list| grep sass
     sass (3.2.4)

To update, run ````bundle update sass```` in your octopress directory. Make sure to *remove the older versions of sass*,
as compass might pick one of those up and site generation would fail.

     $ bundle update sass
     $ gem remove sass -v3.1.20

**Note**: Octopress requires a minimum Ruby version of `1.9.3-p0`.
A [list of 3rd party plug-ins](https://github.com/imathis/octopress/wiki/3rd-party-plugins).

## Code snippet colors

Theme utilizes the solarized color scheme for code snippets. By default, the
bootstrap variant is selected, but light/dark colors can be used by setting
the $solarized variable in sass/syntax/\_higlight.scss.

# Front-Matter Documentation

This is the metadata at the top of every markdown post.

## Required
* uuid: *string* | UUID (version 4) for tracking Disqus discussion. Auto-generated with rake (see Rakefile)
* published: *bool* | Toggle whether to publish the post
* layout: *type* | Determines which template inside '_layouts' to use. *type* can be post, page, default, category_index
* comments: *bool* | Toggles Disqus comments
* date: *date* | Specify date
* categories: *list* | Comma-separated array of categories. E.g. [1,2,3]
* title: *title* | Title - affects both the article title (h2 tag), and the website title tag.
* description: *description* | Description (meta description) - affects search engine blurb

## Optional
* sharing: false | set this to disable sharing links
* footer: false | set this to disable the pagination footer
* share_image | Set the default share thumbnail, relative to the root url, e.g. /images/blog/hi.png
* twitter_card_app: *id* | Presence sets the twitter card as an iphone app, with the app store *id*, also disables twitter:card:description and og:description
* twitter_card_app_url: *url* | Sets the twitter app card url
* html_title: *raw_html* | Use this to override the default article header (h2 tag) with html. Normally the header is just the "title" attribute. Use this for custom styling/icons/images/text
* share_title: *title* | Use this to override the title that appears in FB/Twitter shares
* alias: *relative root url* | Create a redirect url relative to root, e.g. '/blog/2013/11/01/creating-an-auto-growing-textarea/index.html'


## Acknowledgements and License

This site uses Octopress. See [LICENSE](https://github.com/bchu/bchu.github.io/blob/brian/LICENSE).
