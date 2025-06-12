/// <reference lib="webworker" />

// service-worker.ts

// Use a specific type for self if needed, or cast to any for skipWaiting/clients.claim
// declare var self: ServiceWorkerGlobalScope; // Removed this line

const CACHE_NAME = 'pmp-quiz-cache-v1.2'; // Increment to update cache (v1.1 -> v1.2)

// URLs to pre-cache. Critical assets for the app shell.
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/index.tsx', // Main JS entry point loaded by index.html
  '/manifest.json', // Added manifest.json for PWA essentials
  '/offline.html',  // Added offline fallback page
  // Key CDN dependencies
  'https://cdn.tailwindcss.com',
  'https://esm.sh/react@^19.1.0',
  'https://esm.sh/react-dom@^19.1.0/client',
  'https://esm.sh/react@^19.1.0/jsx-runtime', // Often used by React 17+
  'https://esm.sh/@heroicons/react@^2.2.0/24/solid',
  // Placeholder icons - these need to exist in an /icons/ folder at your site root
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-192x192-maskable.png',
  '/icons/icon-512x512-maskable.png',
];

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Pre-caching App Shell and critical assets');
        const cachePromises = PRECACHE_URLS.map(urlToCache => {
          const request = (urlToCache.startsWith('http')) 
            ? new Request(urlToCache, { mode: 'no-cors' }) // For CDN assets, allow opaque responses
            : urlToCache;
          return cache.add(request).catch(err => {
            console.warn(`[Service Worker] Failed to pre-cache ${urlToCache}:`, err);
          });
        });
        return Promise.all(cachePromises);
      })
      .then(() => self.skipWaiting()) // Activate new service worker immediately
      .catch(err => {
        console.error('[Service Worker] Pre-caching failed:', err);
      })
  );
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all open clients
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;

  // For navigation requests (e.g., loading the HTML page), try network first.
  // This ensures users get the latest version of the app shell if online.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(networkResponse => {
          // If fetch is successful, cache the response for offline use.
          if (networkResponse && networkResponse.ok) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fails (offline), try to serve the requested page from cache.
          return caches.match(request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse; // Serve cached version of the requested page
            }
            // If the requested page is not in cache, serve the offline.html page.
            return caches.match('/offline.html').then(offlinePageResponse => {
              return offlinePageResponse || new Response("You are offline and the offline page is not available in cache.", { status: 503, statusText: "Offline", headers: { 'Content-Type': 'text/html'}});
            });
          });
        })
    );
    return;
  }

  // For non-navigation requests (JS, CSS, images, etc.), use a cache-first strategy.
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Serve from cache if available
        }

        // If not in cache, fetch from network
        return fetch(request).then((networkResponse) => {
          // Cache the fetched response if it's valid
          // This includes successful (2xx) responses and opaque responses from CDNs
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              });
          }
          return networkResponse;
        }).catch(error => {
          console.error('[Service Worker] Fetch failed for:', request.url, error);
          // For non-navigational assets, you might not want a fallback page,
          // just let the browser show its default error for that asset.
          // Or return a specific placeholder if applicable (e.g., offline image).
          // Returning a generic error response for assets:
          return new Response(JSON.stringify({ error: "Network error fetching asset, not in cache." }), {
            headers: { 'Content-Type': 'application/json' },
            status: 404, 
            statusText: "Asset not found"
          });
        });
      })
  );
});
