// require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch: {
        html: { files: ['public/*.html'],                            tasks: ['htmlhint'] },
        js:   { files: ['app/assets/javascripts/uglify_tester.js'],  tasks: ['uglify']   }
      },

      uglify: {
        build: {
          files: {
            'app/assets/javascripts/uglify_tester.min.js': ['app/assets/javascripts/uglify_tester.js']
          }
        }
      },

      htmlhint: {
        build: {
          options: {
            'tag-pair': true,
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'spec-char-escape': true,
            'id-unique': true,
            'head-script-disabled': true,
            'style-disabled': true
          },
          src: ['public/index.html']
        }
      }
  });

  grunt.registerTask('default', []);
};