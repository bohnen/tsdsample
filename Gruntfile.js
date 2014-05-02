module.exports = function (grunt) {

    var bower_root = "bower_components";

    // config
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        bower:{
            install: {
                options: {
                    targetDir: 'dist/lib',
                    install: true,
                    verbose: true,
                    cleanTargetDir: true,
                    cleanBowerDir: false
                }
            }
        },
        tsd: {
        	refresh: {
        		options: {
        			command: 'reinstall',
        			latest: true,
        			config: 'tsd.json'
        		}
        	}
        }
    });
    // plugin
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-tsd');
    // tasks

    grunt.registerTask('default', ['bower', 'tsd']);

}