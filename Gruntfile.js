module.exports = function(grunt) {
    // Définition de la configuration globale
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Config de chaque plugin
        cssmin:{
            app: {
                files: {
                    'dist/app.min.css': ['app.css']
                }
            }
        },
        concat: {
            app: {
                src: [
                    'app/app.js',
                    'app/*.factory.js',
                    'app/*.service.js',
                    'app/*.controller.js'
                ],
                dest: 'dist/app.js'
            }
        },
        uglify: {
            app : {
                options : {
                sourceMap: true,
                mangle: false
                },
                files: {
                    'dist/bundle.min.js': [
                    'node_modules/angular/angular.min.js',
                    'dist/app.js'
                    ]
                }
            }
        },
        watch: {
            cssSrc: {
                files: ['**/*.css', '!node_modules/**'],
                tasks: ['cssmin:app']
            },
            jsSrc: {
                files: ['**/*.js'],
                tasks: ['concat:app']
            }
        
        }
    });
    
    // Chargement des plugins.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Déclaration des taches exécutables.
    grunt.registerTask('default',['cssmin:app', 'concat:app']);
    grunt.registerTask('dev',['watch']);
}