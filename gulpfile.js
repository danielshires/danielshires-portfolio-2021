'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))
var sourceMaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var imagemin = require('gulp-imagemin')
var webp = require('imagemin-webp')
var extReplace = require('gulp-ext-replace');

gulp.task('sass', function () {
    // place code for your default task here
    return gulp.src('./static/css/styles.scss')
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./static/css/.'))
})

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
        .pipe(gulp.dest("./static/img-min"));
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
        .pipe(gulp.dest("./content/img-min"));
});


gulp.task('watch', function () {
    gulp.watch('./static/css/styles.scss', gulp.series('sass'))
    //   gulp.watch('./static/images/**/**/*', gulp.series('images'))
    gulp.watch('./static/images/**/*', gulp.series('imageswebp'))
    gulp.watch('./content/work/**/*', gulp.series('imageswebpContent'))
})

gulp.task('default', gulp.series('sass', 'watch'))