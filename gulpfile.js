'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const del = require('del');
const imagemin = require('imagemin');

     
gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
  
  gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', ['sass']);
  });
  
  gulp.task('browser-sync', function () {
     var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
     ];
  
     browserSync.init(files, {
        server: {
           baseDir: "./"
        }
     });
  
  });
  
  // Default task  -- low version syn
//   gulp.task('default', ['browser-sync'], function() {
//       gulp.start('sass:watch');
//   });
  
  gulp.task('default', gulp.series(['browser-sync','sass:watch']));


  //----dist file
 
// gulp.task('clean', function() {
//     return del(['dist']);
// });

 // Clean
gulp.task('clean',gulp.series( async function(){
    return del(['dist']);
}));


// gulp.task('copyfonts', function() {
//    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
//    .pipe(gulp.dest('./dist/fonts'));
// });

gulp.task('copyfonts',gulp.series( async function(){
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
}));

// Images
// gulp.task('imagemin', function() {
//     return gulp.src('img/*.{png,jpg,gif}')
//       .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
//       .pipe(gulp.dest('dist/img'));
//   });

gulp.task('imagemin',gulp.series( async function(){
    return gulp.src('img/*.{png,jpg,gif}')
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('dist/img'));
}));

gulp.task('build',gulp.series(['clean','copyfonts','imagemin']));