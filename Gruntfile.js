module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            'index.min.js': 'index.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};