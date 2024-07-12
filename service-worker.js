const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
 
  '/',
  '/assets/libraries/bootstrap.min.css',
  '/assets/css/main.css',
  '/assets/images/contract-work.webp',
  '/assets/images/hammer.webp',
  '/assets/images/justice-statue.webp',
  '/assets/images/statue.webp'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', event => {
  if (event.request.url.includes('maps.googleapis.com')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(
            response => {
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              let responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              return response;
            }
          );
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});
