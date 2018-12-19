var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

const BUILD_DIR = 'build/'
const JS_BUILD_DIR = `${BUILD_DIR}js/`
const JS_DIR = 'js/'

const PLAYER_JS = 'timeline.min.js'

gulp.task('playerjs', function(){
  return gulp.src(player_scripts, {base: JS_DIR})
    .pipe(sourcemaps.init())
    .pipe(concat(PLAYER_JS))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(JS_BUILD_DIR))
});

gulp.task('clean', function() {
  return del([BUILD_DIR])
})


const scripts = []
