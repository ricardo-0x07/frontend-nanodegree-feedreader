/* eslint-env node */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var ghPages = require('gulp-gh-pages');

gulp.task('default', ['styles', 'lint', 'copy-html', 'copy-images', 'scripts','copy-spec'],
  function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/index.html', ['copy-html']);
    gulp.watch('src/jasmine/spec/feedreader.js', ['copy-spec']);
    gulp.watch('dist/index.html').on('change', browserSync.reload);

    browserSync.init({
      server: './dist'
    });
  });

// Processes all files and stores the results in the distribution folder and deploys the results the gh-pages
gulp.task('dist', [
  'copy-html',
  'copy-images',
  'styles',
  'lint',
  'scripts-dist',
  'deploy'
]);

// Concatenate all js files and save the results in dist/js
gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

// Implement source maps for js files, concatenate js files, minifies the concatenated js file for distribution
gulp.task('scripts-dist', function() {
  gulp.src('src/js/*.js')
  .pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});

// Copy index.html 
gulp.task('copy-html', function() {
  gulp.src('src/index.html').pipe(gulp.dest('./dist'));
});

// Copy feedreader.js 
gulp.task('copy-spec', function() {
  gulp.src('src/jasmine/spec/feedreader.js').pipe(gulp.dest('./dist/jasmine/spec/'));
});

// Copy and optimize images
gulp.task('copy-images', function() {
  gulp.src('src/img/*').pipe(imagemin({
    progressive: true,
    use: [pngquant()]
  })).pipe(gulp.dest('./dist/img'));
});

// Process Style sheets for production
gulp.task('styles', function() {
  gulp.src('src/sass/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
  browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('lint', function() {
  return gulp.src(['src/js/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});

// 
gulp.task('tests', function() {
  gulp.src('src/jasmine/spec/feedreader.js')
   .pipe(jasmine());
});

// This task deploys the app to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
