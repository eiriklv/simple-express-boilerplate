// dependencies
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var hbsfy = require('hbsfy');
var stylus = require('gulp-stylus');
var nodemon = require('gulp-nodemon');
var nib = require('nib');

// compile client side js
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

// compile stylesheets
gulp.task('stylus', function () {
    gulp.src('./client/stylus/*.styl')
        .pipe(stylus({
            use: ['nib'],
            import: ['nib']
        }))
        .pipe(gulp.dest('./client/public/stylesheets'));
});

// run server instance while monitoring for change
gulp.task('develop', function (){
    nodemon({ script: 'app.js', ext: 'html js handlebars', ignore: ['client/public/**', 'node_modules/**'] })
    .on('restart', ['update']);
});

gulp.task('default', ['scripts', 'stylus', 'develop']);
gulp.task('update', ['scripts', 'stylus']);