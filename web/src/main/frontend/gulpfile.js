var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var datetimepicker =require('react-bootstrap-datetimepicker');
var environments = require('gulp-environments');
var gulpif = require('gulp-if');

process.env.NODE_ENV ='development';

gulp.task('build', function () {
  return browserify({
    entries: 'main.js',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('src.js'))
  .pipe(gulp.dest('../webapp/resources/js/'));
});

gulp.task('compress', function() {
    return gulp.src('../webapp/resources/js/src.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulpif(process.env.NODE_ENV === 'production',gulp.dest('../webapp/resources/js/')));
});

gulp.task('default', function(cb) {
  runSequence('build', 'compress', cb);
});

gulp.task('watch', function () {
  gulp.watch("./*.js", ['default']);
  gulp.watch("./components/*.jsx", ['default']);
  gulp.watch("./dispatcher/*.js", ['default']);
  gulp.watch("./stores/*.js", ['default']);
});
