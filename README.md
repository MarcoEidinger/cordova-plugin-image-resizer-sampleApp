## Installation
 This Cordova sample app makes use of plugin [cordova-plugin-image-resizer](https://github.com/wymsee/cordova-imageResizer) (version 1.0.0).
 
 - App allows to select a local file and this file will be resized by factor 0.1.
 - The resized image will be displayed
 
The Cordova app does not yet have the plugin installed. Please add via
 
 ```
cordova plugin add cordova-plugin-image-resizer
```

Also you have to add desired platforms, e.g

 ```
cordova platform add ios
```

After you build the app

 ```
cordova build
```

you are able to run the app. 