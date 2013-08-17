var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
var previewDir = 'public';

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        hostname: '0.0.0.0',
        port:8000
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, previewDir)
            ];
          }
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      full: ['watch:staticsass', 'watch:static', 'watch:staticjs', 'watch:full'],
      static: ['watch:staticsass', 'watch:static', 'watch:staticjs']
    },
    copy: {
      js: {
        files:[{
          expand:true,
          cwd: 'source/javascripts/',
          src:['**'],
          dest:'public/javascripts/'
        }]
      }
    },
    exec: {
      generate: {
        cmd: 'bundle exec rake generate'
      }
    },
    sass: {
      dev: {
        files: {
          'stylesheets/custom/custom.css': 'stylesheets/custom/custom.scss'
        }
      },
      static: {
        files: {
          'public/stylesheets/custom/custom.css': 'sass/custom/custom.scss'
        }
      }
    },
    // templating (conditional includes)
    targethtml: {
      public: {
        files: [{
          expand:true,
          src:['public/**/*.html']
        }]
      }
    },
    open: {
      dev: {
        path: 'http://localhost:<%= connect.options.port%>'
      }
    },
    prettify: {
      options: {
        prettifyrc:'.prettifyrc'
      },
      public: {
        expand:true,
        dest:'public/',
        cwd:'public/',
        src:['**/*.html']
      }
    },
    uglify: {
      public: {
        files: [
          {'public/javascripts/custom.js': ['public/javascripts/octopress.js','public/javascripts/custom.js']}
        ]
      }
    },
    watch: {
      static: {
        files: ['public/**'],
        options: {
          livereload: LIVERELOAD_PORT
        }
      },
      // these all trigger static, so no livereload necessary
      staticsass:{
        files: ['sass/**'],
        tasks: ['sass:static']
      },
      staticjs: {
        files: ['source/javascripts/**'],
        tasks: ['copy:js']
      },
      full: {
        files: ['source/**/*{.js,.html,.yml,.md,.markdown,.css,.sass,.scss,.xml}', '**/*{.yml,.rb,.ru}', '!source/javascripts/**','!sass/**','!public/**', '!_deploy/**', '!node_modules/**'],
        tasks:['exec:generate'],
      }
    }
  });

  // regenerate full, entire project upon changes in source files, except for sass stylesheets and js files, which are selectively rebuilt and copied over without regenerating the entire project 
  grunt.registerTask('default', [
    'exec:generate',
    'connect:livereload',
    'open',
    'concurrent:full',
  ]);

  // only watch public folder, sass stylesheets, and js files (preview mode)
  grunt.registerTask('static', [
    'exec:generate',
    'connect:livereload',
    'open',
    'concurrent:static'
  ]);
  // run build tasks after 'rake generate' but before rake deploy. This means operating on files in the public directory.
  grunt.registerTask('pre-deploy', [
    'targethtml:public',
    'prettify:public',
    'uglify:public'
  ]);
};
