var CACHE_NAME = 'all-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});

self.addEventListener('push', function (e) {
  const payload = e.data ? e.data.text() : 'none';
  
  const options = {
    body: payload,
    icon: '/images/icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'more', title: 'Learn more',
        icon: '/images/icon.png'
      },
      {
        action: 'close', title: 'Close',
        icon: 'images/xmark.png'
      },
    ]
  };
  if (payload === 'local') {
    e.waitUntil(
      self.registration.showNotification(`SW local`, options)
    );
  }
});
