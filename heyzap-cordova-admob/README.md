AdMob Cordova Plugin for Heyzap
==================================

This is a custom Apache Cordova plugin for AdMob/Google Mobile Ads to be used with the [Heyzap Cordova Plugin](github.com/Heyzap/heyzap-cordova). The plugin simply adds the AdMob sdk to both the iOS and Android platform projects in your Cordova project, along with the appropriate dependencies and permissions.

SDK Verisons
------------
- iOS: 7.5.1
- Android: Latest Google Play Services

Installing:
```
cordova plugin add https://github.com/Heyzap/heyzap-cordova-extras.git#:heyzap-cordova-admob
```

Additional Steps:
You may need to disable bitcode in your Xcode project settings before building the app.
In the Xcode project explorer click on your app project, Go to the 'Build Settings' tab and change 'Enable Bitcode' to 'No' for all the dropdowns that aren't disabled.

Supported Platforms
-------------------
- iOS (cordova-ios engine 3.8.0 and later)
- Android (cordova-android engine 4.0.0 and later)

Documentation
-------------
Please visit our [documentation page](https://github.com/Heyzap/heyzap-cordova/blob/master/docs/setup_and_requirements.md) for guides on how to integrate heyzap with your Cordova app.
