module.exports = {
  globDirectory: 'gh-pages',
  globPatterns: [
    '**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}',
  ],
  swDest: 'gh-pages/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
}
