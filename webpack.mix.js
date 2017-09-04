const mix = require('laravel-mix');

mix.js('src/scripts/app.js', 'public/assets/js')
  .sass('src/styles/main.scss', 'public/assets/css')
  .sourceMaps(false)
  .browserSync({
    files: 'public/**/*',
    server: 'public',
    proxy: false
  });
