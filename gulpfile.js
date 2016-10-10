"use strict";
var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var b = browserify({
   entries: ["./example/js/app.js"],
   transform: ["babelify"],
   cache: {},
   packageCache: {},
   plugin: [watchify]
})
    .on('update', bundle)
    .on('log', gutil.log);

function bundle() {
   return b.bundle()
       .on("error", gutil.log.bind(gutil, "Browserify Error"))
       .pipe(source("bundle.js"))
       .pipe(buffer())
       .pipe(sourcemaps.init({loadMaps: true}))
       .pipe(sourcemaps.write("./"))
       .pipe(gulp.dest("./example/js"));
}

gulp.task("build", function () {
   return gulp.src("./index.js")
       .pipe(babel())
       .pipe(uglify())
       .pipe(gulp.dest("dist"))
});

gulp.task("example", bundle);