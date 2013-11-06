exports.registerService = function() {
    Ti.App.iOS.registerBackgroundService({
        url: "ble/backgroundService.js"
    });
};