## 1. Set-up Git

git init
git config --global user.name "Daniel Shires"
git config --global user.email "hello@danielshires.com"

git remote add origin {Git Site}
git push -u origin master

## 2. Add NPM

npp init


## 3. Install Gulp Dependency

npm install --save-dev gulp

Create gulpfile.js

## 4. Add Git ginore

Create file called 

**.gitignore

Ignores certain folders in a commit
node_modules
.DS_Store


## 5. Install Gulp Sass

npm install sass gulp-sass --save-dev

https://www.npmjs.com/package/gulp-sass

Copy in the following

<!-- 'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))
var sourceMaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var imagemin = require('gulp-imagemin')

gulp.task('sass', function () {
  return gulp.src('./static/css/styles.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./static/css/.'))
})

gulp.task('images', function () {
  return gulp.src('./static/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./static/img'))
})

gulp.task('watch', function () {
  gulp.watch('./static/css/styles.scss', gulp.series('sass'))
  gulp.watch('./static/img/*', gulp.series('images'))
})

gulp.task('default', gulp.series('sass', 'watch')) -->

# Install the Following dependencies

## Clean CSS

npm install --save-dev clean-css

# Source Maps

npm gulp-sourcemaps --save-dev

## Minimise Images

npm install --save-dev gulp-imagemin@7.1.0
npm install imagemin-webp --save-dev

## EXT Replace

## Post CSS

npm install gulp-postcss --save-dev

** Stack Overflow **
https://stackoverflow.com/questions/56941110/not-able-to-convert-images-to-webp-using-imagemin-webp

npm install --save-dev gulp-ext-replace

npm install autoprefixer@^9 --save-dev



## Concat

https://www.npmjs.com/package/gulp-concat

npm install gulp-concat --save-dev