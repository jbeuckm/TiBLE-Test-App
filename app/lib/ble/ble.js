exports.registerService = function() {
    
    var service = Ti.App.iOS.registerBackgroundService({
        url: "ble/backgroundService.js"
    });
    
};
