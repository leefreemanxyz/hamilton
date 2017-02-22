// require gulp
var gulp = require('gulp');

// require other packages
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

// styles task
gulp.task('styles', function() {
  return gulp.src(['./assets/stylesheets/style.scss'])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'))
});

// styles task
gulp.task('scripts', function() {
  return gulp.src(['./assets/js/**/*.js', '!./assets/js/customizer.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'))
});


// watch task
gulp.task('watch', function() {
  gulp.watch('./assets/stylesheets/**/*.scss', ['styles']);
  gulp.watch('./assets/js/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
