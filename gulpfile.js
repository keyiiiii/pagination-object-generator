var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");

gulp.task("build", function () {
   return gulp.src("./index.js")
       .pipe(babel())
       .pipe(uglify())
       .pipe(gulp.dest("dist"))
});