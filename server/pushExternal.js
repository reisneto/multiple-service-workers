const push = require('web-push');

let vapidKeys = {
    publicKey: 'BB-M9Wz8OOGF_BYDy2Oi26ML6YWpwutw5EG6rcBRuE7O09s2UCyU6Q9SerFT-Rr1m0PRHeNtHdpTOAwnOTUVHU0',
    privateKey: 'AMLIFKV1aaLks5LrLX3NQ-fM3t6wTa0gQqjUqEGWL_0'
}

push.setVapidDetails('mailto:reisneto.alvaro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let subChrome = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cD2bux3w4ts:APA91bEiXcfMvbc8hiYiX0k7gGaLjcik3oQVormtiA-YGnXLdGKkYjDSlOUswSaDh5rmvdvheKjuke6AV7XqQldmaSA-44Oj05pUST8P1g0oanNO4K4V8NaEbZcRYIm3e2dd9kFBBFOV",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEnaw4i6Av_fjj6rFB5qwjOjr1K-ulY9vgkAY18oObLyUKps0NN_FaI08PRfB0esX-kJEb5tT2DVugrHUpBhQy0",
        "auth": "zhNmUkqAxcK4Hsag0UFn-Q"
    }
};

const subLocal = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/e7XSfR6O-w8:APA91bFYOn5HcLoAdWbBe4NsGXA7_FJd2FEPL_NdVOMwVOL383-_OVcsZMAW-eB1WUKHO4y64MvmOg1Hn2yQZ4WufF0y_HyElXxeX7SPxcWzXyK8XYqN1TQHqqADFJ5g_jErb5JhILp8",
    "expirationTime": null,
    "keys": {
        "p256dh": "BJ54_i_kAfWRdAWQNTRuOMXQ1RUJkoPALLVSb91cSsYFYbr-HAwY46i59tJO0x5MJOXuvbe0XL5hb2J4E372dRQ",
        "auth": "imdBN8oDBmTVyRnx8Grs1g"
    }
};

push.sendNotification(subLocal, 'external');