const gulp = require('gulp');
const convertEncoding = require('gulp-convert-encoding');
const replace = require('gulp-replace');

// Define a function for the 'convert' task
function convertTask() {
  return gulp.src('dest/css/*.css')
    .pipe(replace('UTF-8', 'Shift_JIS'))
    // .pipe(convertEncoding({to: "shift_jis"}))
    .pipe(gulp.dest('sjis/css/'));
}

// Register the 'convert' task using the function
exports.convert = convertTask;
