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
        //{src: 'bower_components/fontawesome/fonts/*.*', dest: 'dist/fonts/'}
    ];
    return copy2(paths);
});
/*---------------------------------------------------------------------------------*/
/*------------------------------ -- CONCAT JS -------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('concatJs', function() {
    return gulp.src(['bower_components/folder/pluginOneJS',
				 'bower_components/owl-carousel2/dist/owl.carousel.min.js'])
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
