// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var browserify = require('gulp-browserify');
var hbsfy = require('hbsfy');
var stylus = require('gulp-stylus');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var nib = require('nib');

// Basic usage
gulp.task('scripts', function (){
    // Single entry point to browserify
    gulp.src([
            './client/javascript/page1.js',
            './client/javascript/page2.js'
        ])
        .pipe(browserify({
            transform: [hbsfy],
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('client/public/javascript'));
});

// Get all .styl files in one folder and render
gulp.task('stylus', function () {
    gulp.src('./client/stylus/*.styl')
        .pipe(stylus({
            use: ['nib'],
            import: ['nib']
        }))
        .pipe(gulp.dest('./client/public/stylesheets'));
});

// js.lint
gulp.task('lint', function () {
    gulp.src('./**/*.js') // too many files
    .pipe(jshint());
});

// Watch Files For Changes
gulp.task('watch', function (){
    gulp.watch('./client/javascript/*.js', ['scripts']);
    gulp.watch('./client/stylus/*.styl', ['stylus']);
    gulp.watch('./client/javascript/templates/*.handlebars', ['scripts', 'stylus']);
});

// Run server instance
gulp.task('develop', function (){
    nodemon({ script: 'app.js', ext: 'html js', ignore: ['client/public/**', 'node_modules/**'] })
    .on('restart', function (){
        console.log('restarted!');
    });
});

// Default Task
gulp.task('default', ['scripts', 'stylus', 'watch', 'develop']);