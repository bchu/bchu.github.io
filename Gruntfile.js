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
    // copy: {
    //   static: {
    //     files:[{
    //       expand:true,
    //       flatten:true,
    //       src: ['sass/custom/*.scss'],
    //       dest:'public/stylesheets/custom/'
    //     }]
    //   }
    // },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      static: ['watch:staticsass', 'watch:static']
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
    watch: {
      dev: {
        files: ['**/*{.js,.html,.yml,.md,.markdown,.css,.sass,.scss,.xml}', '!public/**', '!_deploy/**', '!node_modules/**'],
        tasks:['exec:generate'],
        options: {
          livereload: LIVERELOAD_PORT
        }
      },
      staticsass:{
        files: ['sass/**'],
        tasks: ['sass:static']
      },
      static: {
        files: ['public/**'],
        options: {
          livereload: LIVERELOAD_PORT
        }
      }
    }
  });

  //re-build entire project upon changes in source
  grunt.registerTask('default', [
    'exec:generate',
    'connect:livereload',
    'open',
    'watch:dev'
  ]);

  //only watch public folder and sass stylesheets (preview mode)
  grunt.registerTask('static', [
    'exec:generate',
    'connect:livereload',
    'open',
    'concurrent'
  ]);
};
