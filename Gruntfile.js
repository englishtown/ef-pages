// Generated on 2015-06-09 using generator-bootstrap-less 3.2.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var config = {
    app: '.',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: config,
    watch: {
      less: {
        files: ['<%= yeoman.app %>/less/{,*/}*.less'],
        tasks: ['less']
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    less: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/less',
            src: [
              'gudstrap.less',
              'e1*.less'
            ],
            dest: 'css',
            ext: '.css'
          }
        ],
        options: {
          sourceMap: true,
          sourceMapBasepath: '<%= yeoman.app %>/less',
          sourceMapRootpath: '/'
        }
      }
    },
    processhtml: {
      dist: {
        files: [
          {
            expand: true,
            src: '*.html',
            dest: 'dist'
          }
        ]
      }
    }
  });

  grunt.registerTask('build', function (target) {
    grunt.task.run([
      'less',
      'processhtml'
    ]);
  });

  grunt.registerTask('default', ['less']);
};
