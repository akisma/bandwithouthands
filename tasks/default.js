var config = require('../config')
var gulp = require('gulp')
var path = require('path')
// var argv = require('yargs').argv
// var browserify = require('browserify')
// var buffer = require('vinyl-buffer')
// var notify = require('gulp-notify')
// var source = require('vinyl-source-stream')
// var sourcemaps = require('gulp-sourcemaps')
// var uglify = require('gulp-uglify')
// var envify = require('envify/custom') //https://github.com/hughsk/envify/issues/32

//TODO: convert to webpack, fuck browserify

// gulp.task('browserify', function () {
//   var b = browserify({
//     debug: true,
//     entries: [
//       path.join(config.src, 'js/main.js')
//     ]
//   }).transform('babelify', {presets: ['es2015']})


//   if (argv.env && argv.env === 'prod') {
//   	console.log('production build');
//     b.transform(envify({ NODE_ENV: 'production' }))

//   	return b.bundle()
// 	    .pipe(source('main.js'))
// 	    .pipe(buffer())
// 	        .pipe(uglify())
// 	        .on('error', function (err) {
// 	          return notify().write(err)
// 	        })
// 	    .pipe(gulp.dest(path.join(config.dest, 'build')))
//   }

//   console.log('dev build')
//   b.transform(envify({ NODE_ENV: 'development' }))
//   return b.bundle()
//     .pipe(source('main.js'))
//     .pipe(buffer())
//     .pipe(gulp.dest(path.join(config.dest, 'build')))
// })


gulp.task('default', ['sass'], function () {
  gulp.watch(path.join(config.src, 'sass/**'), ['sass'])
  // gulp.watch(path.join(config.src, 'js/**'), ['browserify'])
})


