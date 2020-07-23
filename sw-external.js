self.addEventListener('push', function (e) {
  const payload = e.data ? e.data.text() : 'null';
  
  const options = {
    body: payload,
    icon: './images/yaymeme.jpeg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'more', title: 'Learn more',
        icon: 'images/checkmark.png'
      },
      {
        action: 'close', title: 'Close',
        icon: 'images/xmark.png'
      },
    ]
  };

  if (payload === 'external') {
    e.waitUntil(
      self.registration.showNotification(`SW external`, options)
    );
  }
});