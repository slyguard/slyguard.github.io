importScripts('service-worker.js');
self.addEventListener('install', function(event) {
  // console.log('[Service Worker] Installing Service Worker ...', event);
  // event.waitUntil(
  //   caches.open('static').then(function(cache) {
  //     cache.addAll(['/', '/static', '/index.html', '/manifest.json']);
  //   })
  // );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = ['static'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        fetch(event.request)
          .catch(function() {
            return response;
          })
          .then(function(res) {
            return res;
          });
      } else {
        return fetch(event.request).then(function(res) {
          return caches.open('dynamic').then(function(cache) {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});
