var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');

var reload = browserSync.reload;

// DEVELOPMENT TASKS --------------------------------------------

// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {
        cwd: 'app'
    }, reload);
});

// BUILD TASKS -------------------------------------------------

// 1. minify the javascript files
gulp.task('js', function () {
    return gulp.src('app/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('docs/scripts'))
});

// 2. minify the CSS files
gulp.task('css', function () {
    return gulp.src('app/styles/*.css')
        .pipe(postcss([autoprefixer()]))
        .pipe(csso())
        .pipe(gulp.dest('docs/styles'))

});

// 3. Copy the HTML
gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('docs/'));
});

// 4. Copy the assets
gulp.task('images', function () {
    return gulp.src('app/images/*')
        .pipe(gulp.dest('docs/images'));
});

// 5. Copy the CNAME file
gulp.task('CNAME', function () {
    return gulp.src('CNAME')
        .pipe(gulp.dest('docs/'));
});

// The build task runner
gulp.task('build', ['html', 'css', 'js', 'images', 'CNAME']);
