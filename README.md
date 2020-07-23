# multiple-service-workers

## How to test it

### Create a server to open index.html
on vs code there is Live Server
it is needed because service workers run on https or localhost.

### Generate vapid keys
    ./node_modules/web-push/src/cli.js generate-vapid-keys --json
    
### Get user subscription
- Running the application, hit the subscribe button
- When a notification appears, hit accept
- open the chrome tools console and copy the user data
- paste it at subLocal variable  
  	[pushLocal.js](https://github.com/reisneto/multiple-service-workers/blob/master/pushLocal.js#L30)  
  	[pushExternal.js](https://github.com/reisneto/multiple-service-workers/blob/master/pushExternal.js#L19)
