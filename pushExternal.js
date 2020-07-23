const push = require('web-push');

let vapidKeys = {
    publicKey: 'BDZHrTd8TWN29vFf77EwLfKIyfQTkh1aUYSFoGZx7KhRJQc96t_dH0QpqY8TfBPMFpGrgI7JHHRMjNf4AqG2Arw',
    privateKey: 'FJOQa0RtIS7GU0l7ifvDA6f8yUX2cv4hTIrms8YQkFo'
}

push.setVapidDetails('mailto:reisneto.alvaro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let subChrome = {};

push.sendNotification(subChrome, 'test message: push external');