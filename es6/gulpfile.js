const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', () => {
    gulp.watch('src/app.js', (cb) => {
        gulp.series(['js'])(cb);
    });
});