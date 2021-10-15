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

gulp.task('css', function () {
    // place code for your default task here
    return gulp.src([
            './static/css/typography.css',
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

// gulp.task('sass', function () {
//     // place code for your default task herein
//     return gulp.src('./static/css/styles.scss')
//         .pipe(sourceMaps.init())
//         // .pipe(sass().on('error', sass.logError))
//         .pipe(cleanCSS())
//         .pipe(sourceMaps.write())
//         .pipe(gulp.dest('./static/css/.'))
// })

// gulp.task('images', function () {
//     return gulp.src('./static/images/**/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./static/img-min'))
// })

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
    gulp.watch('./static/css/styles.css', gulp.series('css'))
    //   gulp.watch('./static/images/**/**/*', gulp.series('images'))
    gulp.watch('./static/images/**/*', gulp.series('imageswebp'))
    gulp.watch('./content/work/**/*', gulp.series('imageswebpContent'))
})

gulp.task('default', gulp.series('css', 'watch'))