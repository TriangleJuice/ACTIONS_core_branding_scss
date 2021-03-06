// -------------------------------------------------------------------
// :: WATCH
// -------------------------------------------------------------------
// - https://www.npmjs.org/package/gulp-watch
// - https://www.npmjs.com/package/browser-sync

var gulp = require('gulp');

var watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: ['.tmp', 'src'],
        },
        port: 9000
    });
    gulp.watch('src/icons/*.*', gulp.series('icon-font'));
        gulp.watch('src/styles/**/*.scss', gulp.series('sass', 'render-templates', 'sass-lint'));
        gulp.watch('src/**/*.njk', gulp.series('render-templates'));
        gulp.watch([
            '.tmp/**/*.css',
            '.tmp/**/*.html'
        ]).on('change', browserSync.reload);
});
