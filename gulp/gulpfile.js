var gulp = require('gulp');
var min = require('gulp-clean-css');

gulp.task('min-css', function(){

    return gulp.src('src/css/*.css')
        .pipe(min())
        .pipe(gulp.dest('dist/css/'));

})

gulp.task('min-js', function(){

    return gulp.src('src/js/*.js')
        .pipe(min())
        .pipe(gulp.dest('dist/js/'));

})

gulp.task('watch', function(){
    gulp.watch(['src/css/*.css', 'src/js/*.js'],['min-css', 'min-js']);
})

gulp.task('default', ['min-css', 'min-js', 'watch']);