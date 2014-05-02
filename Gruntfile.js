module.exports = function (grunt) {

    var bower_root = "bower_components";
    var ts_src  = "src/ts";
    var ts_dest = "dist/app";

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
        },
        typescript: {
            tsc: {
                src: [ts_src + "**/*.ts"],
                dest: ts_dest,
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourcemap: false,
                    declaration: false,
                    basePath: ts_src
                }
            }
        }
    });
    // plugin
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-tsd');
    // tasks

    grunt.registerTask('default', ['bower', 'tsd']);

}