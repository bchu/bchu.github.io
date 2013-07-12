---
layout: post
url_title: "Grunt by Example - A Tutorial for JavaScript's Task Runner"
title: "Grunt by Example -<br>A Tutorial for JavaScript's Task Runner"
date: 2013-07-11 16:35
comments: true
categories: [JavaScript, tutorial]
---

What's Grunt used for? Automating front-end and JavaScript workflow tasks. Refreshing the browser when you change a script. Minifying and concatenating. Running tests. Think `rake` and `guard`, if you're coming from the Ruby world.

The catch - Grunt configuration files can be fairly convoluted at first glance, usually due to the fact that developers add more and more steps to their workflow over time.

Enter Grunt by Example! A blow-by-blow tutorial. Just the way I like it. Let's dive in.

<!-- more -->

Grunt is just a task runner. Every unit of functionality that you would want is usually achieved with a separate npm package (a grunt "plugin").

`npm search grunt` to view literally every grunt plugin available.

Get the command line interface: `npm install -g grunt-cli`

Add the actual grunt task runner as a development dependency to your project (--save-dev adds it to package.json):
`npm install --save-dev grunt`

Let's follow a process of gradual expansion.

Let's say that the first task we want to add to our workflow is to be able to concatenate several JavaScript files into one. Let's say those files are all in the `scripts/` sub-directory. We'd want to do this before deploying a website, for example.

Run `npm install --save-dev grunt-contrib-concat`.

Let's look at our Gruntfile configured with just this one task.

A quick preview of the result before we look at the code. After setting up our configuration object, running `grunt concat`, `grunt concat:dist`, or `grunt build` in the shell in the project root will all do the same thing: concatenate all scripts in the `scripts` sub-directory into a single script called `main.js`.
``` javascript
//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {

  // All upfront config goes in a massive nested object.
  grunt.initConfig({
  // You can set arbitrary key-value pairs.
  distFolder: 'dist'
    // You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('package.json'),
    // Grunt tasks are associated with specific properties.
    // these names generally match their npm package name.
    concat: {
      // Specify some options, usually specific to each plugin.
      options: {
        // Specifies string to be inserted between concatenated files.
        separator: ';'
      },
      // 'dist' is what is called a "target."
      // It's a way of specifying different sub-tasks or modes.
      dist: {
        // The files to concatenate:
        // Notice the wildcard, which is automatically expanded.
        src: ['scripts/*.js'],
        // The destination file:
        // Notice the angle-bracketed ERB-like templating,
        // which allows you to reference other properties.
        // This is equivalent to 'dist/main.js'.
        dest: '<%= distFolder %>/main.js'
        // You can reference any grunt config property you want.
        // Ex: '<%= concat.options.separator %>' instead of ';'
      }
    }
  }); // The end of grunt.initConfig

  // We've set up each task's configuration.
  // Now actually load the tasks.
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register our own custom task alias.
  grunt.registerTask('build', ['concat']);
};
```

You might still be confused about the notion of a "target." More on that:

Let's say there's another set of files you want to concatenate. All script files in `deploy/` should be concatenated into `deploy.js` (in the project root). Let's say we want that task to look like `grunt concat:deploy`

To achieve that, our concat task now looks like:

``` javascript
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['scripts/*.js'],
        dest: '<%= distFolder %>/main.js'
      },
      deploy: {
        // options that are specific to the 'deploy' target
        // target-level options override task-level options
        options: {
          // separator:';;;' would override the parent setting
        },
        src:['deploy/*.js'],
        dest:'deploy.js'
      }
    }
```

If you run `grunt concat:dist,` all scripts in `scripts/` will be concatenated into  `dist/main.js`. `grunt concat:dist` runs the concat task with the config settings that are specified under `dist`. `grunt concat:deploy` runs the concat task with the config settings specified under `deploy`. `grunt concat` will run concat with *both* targets, separately. The parent-level `options` setting specifies config settings that are shared by both targets. `grunt build` is an alias for `grunt concat`.

Now let's tackle a common, yet relatively complicated task.

Let's get Grunt to run certain tasks in response to changes in files. An extremely powerful and common use-case: reloading a static website when you change its HTML/CSS/JS. It's fairly complicated and it's usually something you just copy-and-paste. Here are the steps to setting this up using the `watch` and `connect` plugins, along with the `connect-livereload` (a piece of Connect middleware that is not grunt-specific). For this example, let's assume that your static website is located in the `client/` folder.

Install the three plugins:  
`npm install --save-dev grunt-contrib-watch grunt-contrib-connect connect-livereload`

Add this basic initialization code to the top of your Gruntfile:

``` javascript
// This is the default port that livereload listens on;
// change it if you configure livereload to use another port.
var LIVERELOAD_PORT = 35729;
// lrSnippet is just a function.
// It's a piece of Connect middleware that injects
// a script into the static served html.
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
// All the middleware necessary to serve static files.
var livereloadMiddleware = function (connect, options) {
  return [
    // Inject a livereloading script into static files.
    lrSnippet,
    // Serve static files.
    connect.static(options.base),
    // Make empty directories browsable.
    connect.directory(options.base)
  ];
};
```

Add to your grunt.initConfig object the following two tasks configurations:

``` javascript
// The connect task is used to serve static files with a local server.
connect: {
  client: {
    options: {
      // The server's port, and the folder to serve from:
      // Ex: 'localhost:9000' would serve up 'client/index.html'
      port: 9000,
      base:'client'
      // Custom middleware for the HTTP server:
      // The injected JavaScript reloads the page.
      middleware: livereloadMiddleware
    }
  }
}
// The watch task is used to run tasks in response to file changes
watch: {
  client: {
    // '**' is used to include all subdirectories
    // and subdirectories of subdirectories, and so on, recursively.
    files: ['client/**/*'],
    // In our case, we don't configure any additional tasks,
    // since livereload is built into the watch task.
    // Any other tasks to run (e.g. CoffeeScript) go here:
    tasks:[],
    options: {
      livereload:LIVERELOAD_PORT
    }
  }
}
```

Finally, we need to run the `connect` and `watch` tasks in sequence. To save ourselves from having to type in two shell commands, we can register a task alias:

``` javascript
grunt.registerTask('preview', ['connect:client','watch:client']);
```

Running `grunt preview` will now run both tasks.

Some more grunt plugins to be aware about (`contrib` plugins are officially maintained):

* `grunt-contrib-uglify` for minifying your JS files. It works similarly to `grunt-contrib-concat`.
* `grunt-contrib-jshint` for running JSHint.
* `grunt contrib-coffee` for compiling CoffeeScript.
* `grunt-contrib-sass` for compiling SASS.
* `grunt-concurrent` for running tasks concurrently (instead of sequentially) - useful if you want to run multiple watch tasks concurrently.
  * If you have a series of tasks, the `watch` task must be run last, since `watch` is a task that never ends until you terminate it. Thus any tasks that you specify to run after it won't run.
* `grunt-nodemon` for running nodemon with your node app. This runs your node app and reloads it when files change.
* `grunt-simplemocha` for running mocha tests.
* `grunt-open` for opening files and URLs.

Some tips:

1. If it starts getting too unwieldy, you can break up your Gruntfile by using `grunt.file.readJSON()`.
2. Tired of copying and pasting `loadNpmTasks`?  Try this:
    * `npm install --save-dev matchdep`
    * use `require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);` where you would otherwise list out all your `grunt.loadNpmTask` calls.

For more advanced concepts, [read the Grunt docs!](http://gruntjs.com/getting-started). They're pretty good.