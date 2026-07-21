// Service Worker for GetTravel PWA

const CACHE_NAME = 'gettravel-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/tours.html',
  '/mobile-app.html',

  '/css/style.css',
  '/css/style-new.css',
  '/css/tour-detail.css',
  '/css/universal-fixes.css',

  '/js/main.js',
  '/js/booking.js',
  '/js/tours-config.js',

  '/manifest.json',

  '/images/hero-bg.jpg'
];

// ======================
// INSTALL
// ======================

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(error => {
        console.error('Cache install error:', error);
      })
  );
});

// ======================
// ACTIVATE
// ======================

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ======================
// FETCH
// ======================

self.addEventListener('fetch', event => {

  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)

          .then(networkResponse => {

            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseClone);
              });

            return networkResponse;

          })

          .catch(() => {
            return caches.match('/index.html');
          });

      })

  );

});