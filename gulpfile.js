const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
var webpack = require('webpack-stream');
gulp.task('webpack', function() {
  return gulp.src('./js/*.js')
    .pipe(webpack({
      output: {
        filename: 'myvue.js',
      }
    }))
    .pipe(gulp.dest('./js/packed'));
});

gulp.task('babel', () =>
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('js'))
);

gulp.task('sass', function () {
  return gulp.src('./sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () =>
  gulp.watch('src/*.js', ['babel','webpack'])
)

gulp.task('webpack:watch', () =>
  gulp.watch('js/*.js', ['webpack'])
)

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('./sass/*.sass', ['sass']);
});

gulp.task('default', ['sass','babel','webpack','watch', 'sass:watch', 'webpack:watch'])
