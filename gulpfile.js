
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('connect',function(){
	connect.server();
});

gulp.task('sass',function(){
	gulp.src('./app/styles/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/'));
});

gulp.task('watch',function(){
	// sass file
	gulp.watch('./app/styles/**/*.scss',['sass'])
		.on('change',function(e){
			console.log('file ' + e.path + ' was ' + e.type + ', running tasks...');
		});
});
