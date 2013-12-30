module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    
    /* LESS */
    less: {
      production: {
        options: {
          paths: ["../css"],
          cleancss: true
        },
        files: {
          "../css/app.css": "../css/app.less"
        }
      }
    },
    
    /* COFFEE */
    coffee: {
      compile: {
        files: {
          '../js/app.js': '../js/dev/app.coffee',
          '../js/start.js': '../js/dev/start.coffee' 
        }
      }
    },
    
    /* JADE TO PHP */
    jadephp: {
      compile: {
        expand: true,
        cwd: '../jade',
        src: ['**/*.jade'],
        dest: '../views/',
        ext: '.phtml'
      }
    },
    
    /* PRETTIFY PHP */
    prettify: {
      options: {
        prettifyrc: '.prettifyrc',
        indent: 2,
        indent_char: ' '
      },
      all: {
        expand: true,
        cwd: '../views',
        ext: '.phtml',
        src: ['**/*.phtml'],
        dest: '../views/'
      }
    },
    
    /* WATCH */
    watch : {
      jadephp : {
        files: '../jade/**/*.jade',
        tasks: ['jadephp']
      },
      prettify : {
        files: '../views/**/*.phtml',
        tasks: ['prettify']
      },
      coffee : {
        files: ['../js/dev/app.coffee','../js/dev/start.coffee'],
        tasks: ['coffee']
      },
      less : {
        files: '../css/app.less',
        tasks: ['less']
      }
    }

  });

  grunt.loadNpmTasks('grunt-jade-php');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less','jadephp','prettify','coffee']);

};