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
    fileinclude = require('gulp-file-include');  // File Include

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
/*------------------------------ -- CONCAT JS -------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('concatJs', function() {
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
/*-------------------------------- COMPRESS JS ------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('compressJs', function() {
    gulp.src('src/js/*.*')
        .pipe(include())
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('dist/js/'));
});
/*---------------------------------------------------------------------------------*/
/*------------------------------ COMPRESS IMAGES ----------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('compressImages', () =>
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);
/*---------------------------------------------------------------------------------*/
/*----------------------------- CSS PREPROCESSORS ---------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('cssPreprocessor', function() {
    return gulp.src(['src/less/style.less',
				 'src/less/bootstrap.less',
                     'src/less/plugins.less'])
        .pipe(less())
        .pipe(autoprefixer({browsers: ['last 4 versions']}))
        .pipe(csso())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('dist/css'))
});
/*---------------------------------------------------------------------------------*/
/*------------------------------- HTML INCLUDES -----------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task("includes", function() {
    gulp.src('src/*.html')
        .pipe(include())
        .pipe(gulp.dest("dist/"))
});
/*---------------------------------------------------------------------------------*/
/*------------------------------- FILE INCLUDES -----------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('fileinclude', function() {
    gulp.src(['src/**/*.html'])
        .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
        .pipe(gulp.dest('dist/'));
});
/*---------------------------------------------------------------------------------*/
/*---------------------------------- DEFAULT --------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('default', function(){
    gulp.run('copy', 'concatJs', 'compressJs', 'compressImages', 'cssPreprocessor', 'includes', 'fileinclude');

    // Watch
    gulp.watch("src/**/*", function(event){
        gulp.run('copy', 'concatJs', 'compressJs', 'compressImages', 'cssPreprocessor', 'includes', 'fileinclude');
    });
});
