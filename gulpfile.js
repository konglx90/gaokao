"use strict";

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const spa = require('gulp-spa');
const concat = require('gulp-concat');
//const amdOptimize = require('amd-optimize');

//gulp.task("scripts:index", function () {
//
//  return gulp.src("src/*.js")
//    // Traces all modules and outputs them in the correct order.
//        .pipe(amdOptimize("main"))
//        .pipe(concat("index.js"))
//        .pipe(rev())
//        .pipe(gulp.dest("dist/scripts"));
//
//});

gulp.task('spa', function(){
    return gulp.src('index.html')
        .pipe(spa.html({
            assetsDir: './',
            pipelines:{
                lib: function(files) {
                    return files
                        .pipe(concat('lib.js'))
                        .pipe(uglify())
                        .pipe(rev())
                }
            }
        }))
        .pipe(gulp.dest('build/'))
});

gulp.task('cpy', function(){
    gulp.src('bower_components/requirejs/require.js')
        .pipe(gulp.dest('build/bower_components/requirejs/'));
    gulp.src('main.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/src'));
    gulp.src('bower_components/requirejs-json/*.js')
        .pipe(gulp.dest('build/bower_components/requirejs-json'));
    gulp.src('bower_components/requirejs-text/*.js')
        .pipe(gulp.dest('build/bower_components/requirejs-text'));
    gulp.src('web/data.json')
        .pipe(gulp.dest('build/web'));
});

gulp.task('default', ['spa', 'cpy']);