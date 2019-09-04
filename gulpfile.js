const gulp = require('gulp'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      cssnano = require('gulp-cssnano'),
      imagemin = require('gulp-imagemin'),
      sass = require('gulp-sass');

gulp.task('js',()=>{
    gulp.src('./src/js/es5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'));
})
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
        .pipe(sass({outputstyle:'expandde'}))
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'));
})
gulp.task('es6',()=>{
    gulp.src('./src/js/es6/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./arc/js/es5'));
})
gulp.task('default',()=>{
    gulp.watch('./src/js/es5/*.js',['js']);
    gulp.watch('./src/sass/*.scss',['sass']);
})
