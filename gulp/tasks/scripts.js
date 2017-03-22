var gulp = require('gulp'),
webpack = require('webpack'),
gutil = require('gulp-util');



gulp.task('scripts', function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        // gutil.log("Hello rom the world!");
        if (err) {
            console.log(err.toString());
            // gutil.log(err.toString());
        }
        console.log(stats.toString());
        // gutil.log(stats.toString());
        callback();
    });
});