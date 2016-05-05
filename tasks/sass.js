var config = require('../config')
var autoprefixer = require('gulp-autoprefixer')
var gulp = require('gulp')
var notify = require('gulp-notify')
var path = require('path')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function () {
  gulp.src(path.join(config.src, 'sass/*.sass'))
    .pipe(sourcemaps.init())
      .pipe(sass({
        errLogToConsole: false,
        indentedSyntax: true,
        outputStyle: 'compressed'
      }))
        .on('error', function (err) {
          return notify().write(err)
        })
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
})
