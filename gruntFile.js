module.exports = function (grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
        '  */\n',
        src: {
            js: ['src/app/**/*.js', '!src/app/**/*test.js'],
            css: ['src/css/**/main.css','src/css/**/base.css', 'src/css/**/header.css', 'src/css/**/footer.css',
                'src/css/**/timeline.css', 'src/css/**/info-section.css', 'src/css/**/projects.css']
        },
        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['Grunfile.js', '<%= src.js %>']
        },
        clean: ['<%= distdir %>/*'],
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/less',
                        src: ['*.less'],
                        dest: 'src/css/',
                        ext: '.css'
                    }
                ]
            }
        },
        copy: {
            html: {
                cwd: 'src/app',  // set working folder / root to copy
                src: '**/*.html',      // copy all files and subfolders **with ending .html**
                dest: 'dist/app',    // destination folder
                expand: true           // required when using cwd
            },
            assets: {
                cwd: 'src/assets',  // set working folder / root to copy
                src: ['**/**'],      // copy all files and subfolders **with ending .html**
                dest: 'dist/assets',    // destination folder
                expand: true           // required when using cwd
            }
        },
        concat: {
            dist: {
                options: {
                    banner: "<%= banner %>"
                },
                src: ['<%= src.js %>'],
                dest: '<%= distdir %>/app.js'
            },
            index: {
                src: ['src/index.html'],
                dest: '<%= distdir %>/index.html',
                options: {
                    process: true
                }
            },
            vendor: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-route/angular-route.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-sanitize/angular-sanitize.js',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'],
                dest: '<%= distdir %>/vendor.js'
            },
            css: {
                src: ['<%= src.css %>'],
                dest: '<%= distdir %>/app.css'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: "<%= banner %>"
                },
                src: ['<%= src.js %>'],
                dest: '<%= distdir %>/app.js'
            },
            vendor: {
                src: ['<%= concat.vendor.src %>'],
                dest: '<%= distdir %>/vendor.js'
            }
        },
        watch: {
            styles: {
                files: ['src/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'clean', 'less', 'copy', 'concat']);

};