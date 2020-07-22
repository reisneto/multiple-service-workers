const push = require('web-push');

let vapidKeys = {
    publicKey: 'BB-M9Wz8OOGF_BYDy2Oi26ML6YWpwutw5EG6rcBRuE7O09s2UCyU6Q9SerFT-Rr1m0PRHeNtHdpTOAwnOTUVHU0',
    privateKey: 'AMLIFKV1aaLks5LrLX3NQ-fM3t6wTa0gQqjUqEGWL_0'
}

push.setVapidDetails('mailto:reisneto.alvaro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}

push.sendNotification(sub, 'test message');