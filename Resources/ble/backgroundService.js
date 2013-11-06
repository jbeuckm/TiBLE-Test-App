function notify(msg, delay, sound) {
    Ti.App.iOS.scheduleLocalNotification({
        alertBody: msg,
        alertAction: "OK",
        userInfo: {
            hello: "world"
        },
        sound: sound || "magic.mp3",
        date: new Date(new Date().getTime() + (delay || 1))
    });
}

var ble = require("org.beuckman.tible");

ble.addEventListener("state", function() {});

ble.addEventListener("discover", function(e) {
    notify("You have a " + e.name + " nearby!");
});

ble.addEventListener("connect", function() {});

ble.addEventListener("connectFail", function() {});

ble.addEventListener("disconnect", function() {});

ble.addEventListener("services", function() {});

ble.addEventListener("characteristics", function() {});

ble.addEventListener("value", function() {});

ble.startScan();