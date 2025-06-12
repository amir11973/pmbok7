// A name for our cache
const CACHE_NAME = 'my-pwa-cache-v1';

// The files we want to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  // Add any other files like images, fonts, or other JS files
  '/icon-512.png'
];

// 1. Installation: Open a cache and add the core files to it
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Fetching: Intercept network requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If the request is in the cache, return it
        if (response) {
          return response;
        }
        // Otherwise, fetch it from the network
        return fetch(event.request);
      }
    )
  );
});