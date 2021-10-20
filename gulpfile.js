'use strict';

var gulp = require('gulp')
// CSS
// var sass = require('gulp-sass')(require('sass'))
var sourceMaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var postcss = require('gulp-postcss')
// Images
var imagemin = require('gulp-imagemin')
var webp = require('imagemin-webp')
// Replace Filenames
var extReplace = require('gulp-ext-replace');
// Concat
var concat = require('gulp-concat');
// Webpack
var webpack = require('webpack-stream')


// compile js using webpack
// watch and make changes
// make defaul task (gulp)
gulp.task('css', function () {
    // place code for your default task here
    return gulp.src([
            './static/css/typography.css',
            './static/css/reset.css',
            './static/css/normalize.css',
            './static/css/root.css',
            './static/css/styles.css',
        ])
        .pipe(sourceMaps.init())
        .pipe(
            postcss([
                require("autoprefixer"),
                require("postcss-preset-env")({
                    stage: 1,
                    browsers: ["IE 11", "last 2 versions"]
                }),
            ]))
        .pipe(concat('app.css'))
        .pipe(cleanCSS())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./static/css'))
})

gulp.task("imageswebp", function () {
    return gulp.src("./static/images/**/*")
        .pipe(
            imagemin({
                verbose: true,
                plugins: webp({
                    quality: 70
                })
            })
        )
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest("./static/img"));
});

gulp.task("js", function () {
    gulp.src('./static/js/index.js')
        .pipe(webpack({
            mode: 'development',
            devtool: 'source-map',
            output: {
                filename: "app.js",
            },
        
        }))
        .pipe(gulp.dest('./static/js/'));
})

gulp.task("imageswebpContent", function () {
    return gulp.src("./content/work/**/*")
        .pipe(
            imagemin({
                verbose: true,
                plugins: webp({
                    quality: 70
                })
            })
        )
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest("./content/img"));
});

gulp.task('watch', function () {
    gulp.watch('./static/css/typography.css', gulp.series('css'))
    gulp.watch('./static/css/styles.css', gulp.series('css'))
    gulp.watch('./static/css/root.css', gulp.series('css'))
    gulp.watch('./static/images/**/*', gulp.series('imageswebp'))
    gulp.watch('./content/work/**/*', gulp.series('imageswebpContent'))
    gulp.watch('./static/js/*', gulp.series('js'))
})

gulp.task('default', gulp.series('css', 'watch'))