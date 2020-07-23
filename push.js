const push = require('web-push');

let vapidKeys = {
    publicKey: 'BB-M9Wz8OOGF_BYDy2Oi26ML6YWpwutw5EG6rcBRuE7O09s2UCyU6Q9SerFT-Rr1m0PRHeNtHdpTOAwnOTUVHU0',
    privateKey: 'AMLIFKV1aaLks5LrLX3NQ-fM3t6wTa0gQqjUqEGWL_0'
}

push.setVapidDetails('mailto:reisneto.alvaro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);


// foi refeita a inscrição e mesmo assim os dados são os mesmos da primeira vez (subChro me)
let subChrome2 = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cD2bux3w4ts:APA91bEiXcfMvbc8hiYiX0k7gGaLjcik3oQVormtiA-YGnXLdGKkYjDSlOUswSaDh5rmvdvheKjuke6AV7XqQldmaSA-44Oj05pUST8P1g0oanNO4K4V8NaEbZcRYIm3e2dd9kFBBFOV",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEnaw4i6Av_fjj6rFB5qwjOjr1K-ulY9vgkAY18oObLyUKps0NN_FaI08PRfB0esX-kJEb5tT2DVugrHUpBhQy0",
        "auth": "zhNmUkqAxcK4Hsag0UFn-Q"
    }
};

let subChrome = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cD2bux3w4ts:APA91bEiXcfMvbc8hiYiX0k7gGaLjcik3oQVormtiA-YGnXLdGKkYjDSlOUswSaDh5rmvdvheKjuke6AV7XqQldmaSA-44Oj05pUST8P1g0oanNO4K4V8NaEbZcRYIm3e2dd9kFBBFOV",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEnaw4i6Av_fjj6rFB5qwjOjr1K-ulY9vgkAY18oObLyUKps0NN_FaI08PRfB0esX-kJEb5tT2DVugrHUpBhQy0",
        "auth": "zhNmUkqAxcK4Hsag0UFn-Q"
    }
};

let subFirefox = {
    "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABfG…2jFNUVR-JCHoHkDdRuTpepfqEjJIvab-0TwMroQNzRy4sFxlMh2PJ4qfUzYc",
    "keys": {
        "auth": "v7ieRCsgQS4yyT5H9bFryQ",
        "p256dh": "BNgkvvc4QXihBDCiviTGREklDWOxupVhmozZU6qqkRIOVe4YR-2Qv6PuORyDIQfXskUuogABjknBK4XZCul_zQg"
    }
};

push.sendNotification(subChrome, 'test message');