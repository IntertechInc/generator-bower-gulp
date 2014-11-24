(function() {
  'use strict';
  var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

  var src = {
    js: 'src/**/*.js',
    tests: 'tests/**/*.js'
  };

  gulp.task('mocha', function() {
    return gulp.src(src.tests, {
        read: false
      })
      .pipe(mocha({
        reporter: 'nyan'
      }));
  });

  gulp.task('jshint', function() {
    return gulp.src(src.js).pipe(jshint());
  });

  gulp.task('dist', ['jshint'], function() {
    return gulp.src(src.js)
      .pipe(concat('<%= packageName %>.js'))
      .pipe(gulp.dest('dist'))
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('default', ['mocha', 'dist']);
})();