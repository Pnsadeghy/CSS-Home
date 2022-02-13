const mix = require('laravel-mix');

mix.sass('files/style.scss', 'assets/app.css').options({
    processCssUrls: false
});
mix.disableSuccessNotifications();
if (mix.config.inProduction) {
    mix.version();
}
