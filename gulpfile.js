const gulp = require('gulp');
const { src, dest, series } = gulp;
const pug = require('gulp-pug')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const { reload } = require('browser-sync');

function make_pug() {
  return src('src/*.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

function make_postcss() {
  const postcssPlugins = [autoprefixer, tailwindcss]
  return src('src/style/*.css').pipe(postcss(postcssPlugins)).pipe(dest('build/style'))
}

function make_clean() {
  return src('build/', { read: false }).pipe(clean({ force: true }))
}

function make_image() {
  return src('src/image/*').pipe(dest('build/image/'));
}

const make = series(make_pug, make_postcss, make_image);

function browser_sync() {
  browserSync.init({
    server: {
      baseDir: "build",
      index: "index.html"
    },
    port: 9876
  });
  gulp.watch('src/*').on("change", series(make, reload));
}

exports.make = make;
exports.clean = make_clean;
exports.server = series(make, browser_sync);