

var ble = require("org.beuckman.tible");


ble.addEventListener("state", function(e) {
	updateState(e.state);
});

function updateState(state) {
	$.status.text = "bluetooth is "+state;
	switch (state) {
		case "on":
			$.status.backgroundColor = "#7d7";
			break;
		case "off":
		default:
			$.status.backgroundColor = "#f99";
			break;
	}
}

ble.addEventListener("discover", function(e){

	var d = Alloy.Collections.BleDevice.get(e.uuid);
	
	if (d) {
		d.set("rssi", e.rssi);
	}
	else {
		var d = Alloy.createModel("BleDevice", e);
		Alloy.Collections.BleDevice.add(d);
	}

});
ble.addEventListener("connect", function(e){
	alert(e);
});
ble.addEventListener("connectFail", function(e){
	alert(e);
});
ble.addEventListener("disconnect", function(e){
	alert(e);
});

ble.addEventListener("services", function(e){
//	alert(e);
});
ble.addEventListener("characteristics", function(e){
	alert(e);
});
ble.addEventListener("value", function(e){
	alert(e);
});



updateState(ble.state);
ble.startScan();



backgroundService = Ti.App.iOS.registerBackgroundService({
    url: "ble/backgroundService.js"
});


$.index.open();




/*
Ti.App.addEventListener("pause", function(){
        ble.stopScan();
});
Ti.App.addEventListener("paused", function(){
	backgroundService = Ti.App.iOS.registerBackgroundService({
        url: "ble/backgroundService.js"
    });
});


Ti.App.addEventListener('resumed',function(e){

    if (backgroundService != null){
        backgroundService.stop();
        backgroundService.unregister();
    }

    ble.startScan();
});

*/

