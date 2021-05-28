const gulp = require('gulp');
const { src, dest, series } = gulp;
const pug = require('gulp-pug')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const { reload } = require('browser-sync');

function build_pug() {
  return src('src/*.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

function build_postcss() {
  const postcssPlugins = [autoprefixer, tailwindcss]
  return src('src/style/*.css').pipe(postcss(postcssPlugins)).pipe(dest('build/style'))
}

function build_clean() {
  return src('build/', { read: false }).pipe(clean({ force: true }))
}

const build = series(build_pug, build_postcss);

function browser_sync() {
  browserSync.init({
    server: {
      baseDir: "build",
      index: "index.html"
    },
    port: 9876
  });
  gulp.watch('src/*').on("change", series(build, reload));
}


exports.build = build;
exports.clean = build_clean;
exports.server = series(build, browser_sync);