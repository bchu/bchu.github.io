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
      static: ['watch:staticsass', 'watch:static']
    },
    exec: {
      preview: {
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
    open: {
      dev: {
        path: 'http://localhost:<%= connect.options.port%>'
      }
    },
    watch: {
      dev: {
        files: ['**/*{.js,.html,.yml,.md,.markdown,.css,.sass,.scss,.xml}', '!public/**', '!_deploy/**', '!node_modules/**'],
        tasks:['exec:preview'],
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

  grunt.registerTask('default', [
    'exec:preview',
    'connect:livereload',
    'open',
    'watch:dev'
  ]);

  grunt.registerTask('static', [
    'exec:preview',
    'connect:livereload',
    'open',
    'concurrent'
  ]);
};
