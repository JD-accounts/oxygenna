'use strict';

var path = require('path');
var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();


gulp.task('bower', ['clean'], function () {
    gulp.start('bower:build');
});

gulp.task('bower:build', ['bower:scripts', 'bower:styles'], function() {

});

gulp.task('bower:scripts', ['bower:partials'], function() {
  return gulp.src([
    path.join(paths.src, '/app/triangular/**/*.js'),
    path.join(paths.tmp, 'partials', 'templateCacheHtml.js')
  ])
    .pipe($.angularFilesort())
    .pipe($.ngAnnotate())
    .pipe($.concat('triangular.js'))
    .pipe(gulp.dest(paths.dist + '/'));
});

var sassOptions = {
  style: 'expanded',
  includePaths: [
    'bower_components'
  ]
};

gulp.task('bower:styles', function() {
  return gulp.src(path.join(paths.src, '/app/triangular/triangular.scss'))
    .pipe($.debug({title:'script'}))
    .pipe($.sass(sassOptions))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']}))
      .on('error', function handleError(err) {
        console.error(err.toString());
        this.emit('end');
      })
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('bower:partials', function () {
  return gulp.src([
    paths.src + '/app/triangular/**/*.html'
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'triangular',
      root: 'app/triangular'
    }))
    .pipe(gulp.dest(paths.tmp + '/partials/'));
});