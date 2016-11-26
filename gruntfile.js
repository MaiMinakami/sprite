module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['main.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
  
  concat:{
    dist:{
      src:['styles/variables.scss','styles/style.scss'],
      dest:'styles/main.scss'
    }
  },    

  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['**/*.scss'],
      tasks: ['concat','sass'],
    },
  }
  });
  

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['sass'],['watch'],['concat']);

};