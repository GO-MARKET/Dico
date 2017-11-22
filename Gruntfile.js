module.exports = function (grunt) {

    grunt.initConfig({
        'template': {
            options: {
                mode: 'format', //compress, format and default
                wrap: true // cmd
            },
            'build': {
                files: [{
                    expand: true,
                    cwd: 'core/View',
                    src: '*.html',
                    dest: 'core/View'
                }]
            }
        },

        watch:{
            tpl:{
                files: ['core/View/*.html'],
                tasks:['template'],
                options: {livereload:false}
            }
        }
       
    });

    grunt.loadNpmTasks('grunt-template-js');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['template']);
    grunt.registerTask('watcher',['watch']);


}