AppLovin Cordova Plugin for Heyzap
==================================

This is a custom Apache Cordova plugin for AppLovin to be used with the [Heyzap Cordova Plugin](github.com/Heyzap/heyzap-cordova). The plugin simply adds the AppLovin sdk to both the iOS and Android platform projects in your Cordova project, along with the appropriate dependencies and permissions.

SDK Verisons
------------
- iOS: 3.1.5
- Android: 6.1.4

Installing:
```
cordova plugin add https://github.com/Heyzap/heyzap-cordova-extras.git#:heyzap-cordova-applovin  --variable APPLOVIN_ANDROID_SDK_KEY=**YOUR APPLOVIN SDK KEY HERE**
```

*Note* If you are only using iOS, the plugin will still ask you to add the APPLOVIN_ANDROID_SDK_KEY value. In this case, provide whatever value you want as it won't affect your integration.

Supported Platforms
-------------------
- iOS (cordova-ios engine 3.8.0 and later)
- Android (cordova-android engine 4.0.0 and later)

Documentation
-------------
Please visit our [documentation page](https://developers.heyzap.com/docs/cordova_sdk_setup_and_requirements#step-2-choose-your-3rdparty-sdks-optional) for guides on how to integrate heyzap with your Cordova app.
