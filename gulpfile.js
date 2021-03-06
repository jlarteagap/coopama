const gulp = require('gulp')
const browserSync = require('browser-sync')

// style = () => {
//     return gulp.src([

//         ], { allowEmpty: true })
//     .pipe(gulp.dest('./src/css'))
//     .pipe(browserSync.stream());
// };

js = () => {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/popper.js/dist/popper.min.js',
        'node_modules/jquery/dist/jquery.min.js'
        ], { allowEmpty: true })
    .pipe(gulp.dest('./src/js'))
    .pipe(browserSync.stream());
}

watch = () =>{
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('/src/css/style.css').on('change', browserSync.reload);
    gulp.watch('/*.html').on('change', browserSync.reload);
};

gulp.task('build', 
     gulp.parallel(js))
 gulp.task('default',
     gulp.series('build', watch))