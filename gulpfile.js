var gulp = require('gulp');
// Requires the sass plugin
var sass = require('gulp-sass');

gulp.task('sass',function(){
  return gulp.src('app/scss/**/*.scss')
     .pipe(sass()) //Using gulp-sass
     .pipe(gulp.dest('app/css'))
});

// Update CSS files
gulp.task('styles',function(){
  return gulp.src('app/css/*.css')
      .pipe(gulp.dest('dist/styles'))
});

// Test Hello World
gulp.task('hello',function(){
  console.log('Hello World');
});

// Gulp watch syntax
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});
