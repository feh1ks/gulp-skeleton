var gulp = require('gulp'),                      // Gulp JS
    concat = require('gulp-concat'),             // Concat filse
    imagemin = require('gulp-imagemin'),         // Minify images
    uglify = require('gulp-uglify'),             // Minify JS
    include = require('gulp-include'),           // HTML Templates
    csso = require('gulp-csso'),                 // Minify CSS
    autoprefixer = require('gulp-autoprefixer'), // Gulp autoprefixer
    copy2 = require('gulp-copy2'),               // Copy files
    less = require('gulp-less'),                 // Less compiler
    path = require('path'),                      // Array of paths to be used for @import directives
    rename = require("gulp-rename"),             // Rename files
    pug = require('gulp-pug'),                   // HTML Preprocessor
    htmlmin = require('gulp-htmlmin'),           // HTML Minification
    tinypng = require('gulp-tinypng-compress'),  // Minify images using tinypng API
		prettify = require('gulp-html-prettify');    // Beautify HTML

/*---------------------------------------------------------------------------------*/
/*----------------------------------- COPY ----------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('copy', function () {
    var paths = [
        {src: 'bower_components/jquery/dist/jquery.min.js', dest: 'dist/js/'},
        {src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'dist/js/'},
        {src: 'bower_components/bootstrap/dist/fonts/*.*', dest: 'dist/fonts/'},
        {src: 'src/fonts/**/*.*', dest: 'dist/fonts/'},
        {src: 'src/*.ico', dest: 'dist/'}
        //{src: 'bower_components/fontawesome/fonts/*.*', dest: 'dist/fonts/'},
        //{src: 'bower_components/slick-carousel/slick/fonts/*.*', dest: 'dist/css/fonts/'},
        //{src: 'bower_components/slick-carousel/slick/ajax-loader.gif', dest: 'dist/css/'},
    ];
    return copy2(paths);
});
/*---------------------------------------------------------------------------------*/
/*------------------------------- -- PLUGINS --------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('plugins', function() {
    return gulp.src([//'bower_components/owl-carousel2/dist/owl.carousel.min.js',
                     //'bower_components/jquery-circle-progress/dist/circle-progress.min.js',
                     //'src/libs/appear-js/jquery.appear.js',
                     //'bower_components/slick-carousel/slick/slick.min.js',
                     //'bower_components/jquery.easing/js/jquery.easing.min.js',
                     //'bower_components/parallax.js/parallax.min.js',
                     //'bower_components/wow/dist/wow.min.js',
                     //'bower_components/jQuery-Mask-Plugin/dist/jquery.mask.min.js',
                     //'bower_components/fotorama/fotorama.js',
                     //'bower_components/isotope/dist/isotope.pkgd.min.js',
                     //'bower_components/fancybox/source/jquery.fancybox.js',
                     //'bower_components/fancybox/source/jquery.fancybox.pack.js'
                    ])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('src/js/'));
});
/*---------------------------------------------------------------------------------*/
/*-------------------------------- JAVASCRIPT -------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('js', function() {
    gulp.src('src/js/*.*')
        .pipe(include())
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('dist/js/'));
});
/*---------------------------------------------------------------------------------*/
/*---------------------------------- TINYPNG --------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('tinypng', function () {
    gulp.src('src/img/**/*')
        .pipe(tinypng({ key: 'XBaIWfM_p-EYP6ScygZiX7SDW22BaRTl' }))
        .pipe(gulp.dest('dist/img'));
});
/*---------------------------------------------------------------------------------*/
/*---------------------------------- IMAGES ---------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('img', () =>
	gulp.src('src/img/**/*.{jpg,jpeg,png}')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);
/*---------------------------------------------------------------------------------*/
/*------------------------------------ CSS ----------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('css', function() {
    return gulp.src(['src/less/style.less',
										 'src/less/bootstrap.less',
                     'src/less/plugins.less'])
        .pipe(less())
        .pipe(autoprefixer({browsers: ['last 6 versions']}))
        .pipe(csso())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('dist/css'))
});
/*---------------------------------------------------------------------------------*/
/*----------------------------------- HTML ----------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('html', function buildHTML() {
    return gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(prettify())
        .pipe(gulp.dest('dist/'))
});
/*---------------------------------------------------------------------------------*/
/*---------------------------------- DEFAULT --------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('default', function(){
    gulp.run('copy', 'html', 'css', 'plugins', 'js', 'img');

    // Watch
    gulp.watch("src/**/*", function(event){
        gulp.run('copy', 'html', 'css', 'plugins', 'js');
    });
});
