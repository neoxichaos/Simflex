// Requis
var gulp = require('gulp');
// var css = require('gulp-mini-css');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var cssbeaut = require('gulp-cssbeautify');
var autoprefix = require('gulp-autoprefixer');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer

// Tache pour 
gulp.task('css-scss', () => {
    return gulp.src(source + '/assets/css/styles.scss')
        .pipe(sass())
        .pipe(csscomb())
        .pipe(cssbeaut())
        .pipe(autoprefix())
        .pipe(gulp.dest(destination + '/assets/css/'));
});
gulp.task('simflex', () => {
    return gulp.src(source + '/assets/simflex/simflex.scss')
        .pipe(sass())
        .pipe(csscomb())
        .pipe(cssbeaut())
        .pipe(autoprefix())
        .pipe(gulp.dest(destination + '/assets/simflex/'));
});

gulp.task('scss', function() {
    gulp.watch(source + '/assets/css/*.scss', ['css-scss'])
    gulp.watch(source + '/assets/simflex/*.scss', ['simflex'])
});

//gulp.watch('minify-css', function() {
//    gulp.src(destination + '/assets/css/styles.css')
//        .pipe(css({ ext: '-min.css' }))
//        .pipe(gulp.dest(destination + '/assets/css/'));
//});
//
//// Tâche "build"
//gulp.task('build', ['css']);
//
//// Tâche "prod" = Build + minify
//gulp.task('prod', ['build', 'minify-css']);