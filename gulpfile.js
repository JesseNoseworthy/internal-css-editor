var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var jshint = require('gulp-jshint');

gulp.task('styles', function() {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 version', 'firefox 46', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles/'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('watch', function(){
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./dev/scripts/script.js', ['scripts']);
	gulp.watch('.dev/index.html', reload);
});

gulp.task('scripts', function(){
	return gulp.src('./dev/scripts/script.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/scripts/'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: './public'
	})
});

gulp.task('default', ['browser-sync', 'styles','scripts','watch']);