//  Chartboost.js
//
//  Copyright 2015 Heyzap, Inc. All Rights Reserved
//
//  Permission is hereby granted, free of charge, to any person
//  obtaining a copy of this software and associated documentation
//  files (the "Software"), to deal in the Software without
//  restriction, including without limitation the rights to use,
//  copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following
//  conditions:
//
//  The above copyright notice and this permission notice shall be
//  included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//  OTHER DEALINGS IN THE SOFTWARE.

(function() {
  "use strict";

  var SERVICE = "Chartboost";
  var Common = cordova.require("heyzap-cordova.Common");

  /**
   * Object responsible for handling Chartboost interstitial Ads
   * @type {Object}
   *
   * @memberOf HeyzapAds
   */
  var Chartboost = {
    /**
     * Fetch a Chartboost Ad
     * 
     * @param  {string} location Location
     * 
     * @return {Promise} An ES-6 style promise if the native call succeeded for failed.
     */
    fetch: function fetch(location) {
      if (typeof(location) !== 'undefined' && typeof(location) !== 'string') {
        throw new TypeError('"location" must be undefined or of type "string".');
      }

      return Common.exec(SERVICE, 'fetch', location);
    },

    /**
     * Show a Chartboost Ad
     * 
     * @param  {string} location Location
     * 
     * @return {Promise} An ES-6 style promise if the native call succeeded for failed.
     */
    show: function show(location) {
      if (typeof(location) !== 'undefined' && typeof(location) !== 'string') {
        throw new TypeError('"location" must be undefined or of type "string".');
      }

      return Common.exec(SERVICE, 'show', location);
    },

    /**
     * Determine if Chartboost Ad is available for a location
     * 
     * @param  {string} location Location
     * 
     * @return {Promise} An ES-6 style promise if the native call succeeded for failed.
     * The success callback will have a boolean as the first parameter which indicates
     * if a Chartboost ad is available
     */
    isAvailable: function isAvailable(location) {
      if (typeof(location) !== 'undefined' && typeof(location) !== 'string') {
        throw new TypeError('"location" must be undefined or of type "string".');
      }

      return Common.exec(SERVICE, 'isAvailable', location);
    }
  };

  module.exports = Chartboost;
})();
