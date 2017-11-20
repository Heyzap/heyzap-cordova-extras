# November 2017 Update

This repo is now deprecated in favor of separated repos for each network; Cordova 7 no longer supports subfolders. 

Here is a list of the other repositories:

* [AdMob](https://github.com/Heyzap/heyzap-cordova-admob)
* [AdColony](https://github.com/Heyzap/heyzap-cordova-adcolony)
* [AppLovin](https://github.com/Heyzap/heyzap-cordova-applovin)
* [Chartboost](https://github.com/Heyzap/heyzap-cordova-chartboost)
* [Facebook Audience Network](https://github.com/Heyzap/heyzap-cordova-facebook_audience_network)
* [Leadbolt](https://github.com/Heyzap/heyzap-cordova-leadbolt)
* [UnityAds](https://github.com/Heyzap/heyzap-cordova-unityads)
* [Vungle](https://github.com/Heyzap/heyzap-cordova-vungle)


The rest of the repo will be left alone for users still utilizing it, but all future updates will occur on the above.


----------------

Heyzap Cordova Plugin Extras
============================

This repository contains simple wrapper plugins for third party SDKs to use with the [Heyzap Cordova Plugin](http://www.github.com/Heyzap/heyzap-cordova). The plugins in the indivdual folders simply add the third party sdks to both the iOS and Android platform projects in your Cordova project, along with the appropriate dependencies and permissions.

Installing
----------
Installation instructions can be found in the plugins' individual READMEs within each folder.

Documentation
-------------
Please visit our [documentation page](https://developers.heyzap.com/docs/cordova_sdk_setup_and_requirements) for guides on how to integrate the Heyzap SDK along with other third-party SDKs to your Cordova app.

Updating the SDKs
-----------------
Download the appropriate iOS and Android third party sdks from the Heyzap's [Android Setup Guide](https://developers.heyzap.com/docs/android_sdk_setup_and_requirements) and [iOS Setup Guide](https://developers.heyzap.com/docs/ios_sdk_setup_and_requirements). The downloaded SDKs for each platform will go into the `src/ios/` and `src/android/` folders respectively for the plugin.

### Modifying plugin.xml
Sometimes the newer versions of the SDKs might have additional dependencies or permissions that did not exist in the previous versions. To add these dependencies and permissions to your Cordova project, the plugin's `plugin.xml` file will have to be modified.

#### iOS Modifications
Additional tags regarding iOS dependencies/permissions should be inside the
```xml
<platform name="ios">
``` 
tag in `plugin.xml`. 

Third-party dependencies should be copied over to the plugin's `src/ios/` folder. These dependencies can then be added to the plugin by adding the appropriate [`source-file`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_source_file_element), [`header-file`/`resource-file`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_resource_file_and_header_file_elements) and [`framework`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_framework_element) tags. Cocoa framework dependencies can be added by adding the appropriate [`framework`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_framework_element) tags. See the [Cordova Plugin Specification](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html) for more info.

**Notes**:
- `.a` libraries can be added with `source-file` tags with the `framework` attribute set to `"true"`. i.e.

    ```xml
    <source-file src="src/ios/library.a" framework="true" />
    ```

- `.bundle` and any additional files inside `.embeddedframework/Resources/` folders can be added with the [`resource-file`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_resource_file_and_header_file_elements) tag.

####Android Modications
Additional tags regarding iOS dependencies/permissions should be inside the `<platform name="android">` tag in `plugin.xml`.

Third-party dependencies should be copied over to the plugin's `src/android/` folder. The dependencies can then be added to the plugin by adding the appropriate [`source-file`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_source_file_element) tags. Android SDK dependencies can be added by adding the appropriate [`framework`](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html#Plugin%20Specification_framework_element) tags.

Additional Android manifest permissions for the SDK and their dependencies can be added within the 
```xml
<config-file target="AndroidManifest.xml" parent="/*">
```
tag and manifest activities can be added within the

```xml
<config-file target="AndroidManifest.xml" parent="/manifest/application">
``` 
tag. See the [Cordova Plugin Specification](https://cordova.apache.org/docs/en/5.0.0/plugin_ref_spec.md.html) for more info.
