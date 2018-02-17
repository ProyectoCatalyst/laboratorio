'uses strict';

const gulp = require('gulp');
connect = require('gulp-connect');
nodemon = require('gulp-nodemon');
browserSync = require('browser-sync');

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  });
  browserSync.init({
    server: './public'
  })
});

gulp.task('dependencies', () => {
  gulp.src([
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js'
  ])
  .pipe(gulp.dest('./public/lib/angular'))
  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/popper.min.js'
  ])
  .pipe(gulp.dest('./public/lib/bootstrap'))
  gulp.src([
    './node_modules/sweetalert/dist/sweetalert.min.js',
  ])
  .pipe(gulp.dest('./public/lib/sweetalert'))
});

gulp.task('reload', () => {
  gulp.src([
      './public/components/**/*.html',
      './public/components/**/*.css',
      './public/components/**/*.js'
    ])
    .pipe(connect.reload())
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  gulp.watch([
      './public/*.html',
      './public/components/*.html',
      './public/components/**/*.html',
      './public/components/**/**/*.html',
      './public/*.css',
      './public/components/*.css',
      './public/components/**/*.css',
      './public/components/**/**/*.css',
      './public/*.js',
      './public/components/*.js',
      './public/components/**/*.js',
      './public/components/**/**/*.js'
    ], ['reload'])
    .on('change', browserSync.reload);
});

gulp.task('default', ['connect', 'dependencies', 'reload', 'watch']);