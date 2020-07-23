self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push - great!',
      icon: './images/yaymeme.jpeg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'more', title: 'Learn more',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification(`SW external`, options)
    );
  });