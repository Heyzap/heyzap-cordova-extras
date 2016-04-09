Chartboost Cordova Plugin for Heyzap
==================================

This is a custom Apache Cordova plugin for Chartboost to be used with the [Heyzap Cordova Plugin](github.com/Heyzap/heyzap-cordova). The plugin simply adds the Chartboost sdk to both the iOS and Android platform projects in your Cordova project, along with the appropriate dependencies and permissions.

SDK Verisons
------------
- iOS: 6.0.0
- Android: 5.5.3

Installing:
```
cordova plugin add https://github.com/Heyzap/heyzap-cordova-extras.git#:heyzap-cordova-chartboost
```

Supported Platforms
-------------------
- iOS (cordova-ios engine 3.8.0 and later)
- Android (cordova-android engine 4.0.0 and later)

Documentation
-------------

####Calling Chartboost Manually:

- Fetch Ad: `HeyzapAds.Chartboost.fetch(location)`
	- `location` (string) - Chartboost location, pass in your cross-promo location here.
    - returns: `Promise` - An ES-6 style promise if the native call succeeded for failed.
        - **Note:** A success callback simply indicates that the native call to fetch an Ad succeeded. It _does not_ necessarily mean that the ad is ready to display. Call `isAvailable` to determine if the ad is ready to display.
    - example:

        ```javascript
        HeyzapAds.Chartboost.fetch("Default").then(function() {
            // Native call succeeded
            // Note: This *does not* necessarily mean that the Ad is available for display.

        }, function(err) {
            // Native call failed
        });
        ```

- Check if Ad is Available: `HeyzapAds.Chartboost.isAvailable(location)`
    - `location` (string) - Chartboost location, pass in your cross-promo location here.
    - returns: `Promise` - An ES-6 style promise if the native call succeeded for failed. The success callback wil have a `boolean` as its first parameter that will indicate if the Ad is available or not.
    - example:

        ```javascript
        HeyzapAds.Chartboost.isAvailable("Default").then(function(available) {
            if (available) {
                return HeyzapAds.Chartboost.show("Default");
            }

        }).then(...);
        ```

- Show Ad: `HeyzapAds.Chartboost.show(location)`
    - `location` (string) - Chartboost location, pass in your cross-promo location here.
    - returns: `Promise` - An ES-6 style promise if the native call succeeded for failed.
    - example:

        ```javascript
        HeyzapAds.Chartboost.show("Default").then(function() {
            // Native call succeeded, Ad is being displayed

        }, function(err) {
            // Native call failed
        });
        ```

Please visit our [documentation page](https://github.com/Heyzap/heyzap-cordova/blob/master/docs/setup_and_requirements.md) for guides on how to integrate heyzap with your Cordova app.
