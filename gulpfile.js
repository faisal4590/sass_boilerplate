const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

/****** For better understanding, I have added necessary comments */

// Compile SCSS to CSS
function compileSCSS() {
  // Step 01: Where is my SCSS file located
  return (
    gulp
      .src(['src/scss/*.scss'])
      // Step 02: Pass the SCSS file through SASS Compiler
      .pipe(sass())
      // Step 03: Where will I save my compiled CSS?
      .pipe(gulp.dest('src/css'))
      //   Step 04: Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

// Watch Sass & Serve
function watch() {
  browserSync.init({
    server: './src',
  });
  gulp.watch('src/scss/*.scss', compileSCSS); // compile SCSS to CSS when SCSS code updates
  gulp.watch('src/*.html').on('change', browserSync.reload); // reload when html code updates
  gulp.watch('src/js/*.js').on('change', browserSync.reload); // reload when js code updates
}

exports.compile_scss = compileSCSS;
exports.watch = watch;
