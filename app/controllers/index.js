
var ble = require("org.beuckman.tible");
Alloy.Globals.ble = ble;


ble.addEventListener("state", function(e) {
	updateState(e.state);
});

function updateState(state) {
	$.status.text = " bluetooth is "+state;
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
            d.set("advertisementData", JSON.stringify(e.advertisementData));
            Alloy.Collections.BleDevice.add(d);
    }
    
});

var scanning = false;
ble.addEventListener("scanStart", function(e){
	$.scanButton.backgroundColor = "#f99";
	$.scanButton.title = "stop";
	scanning = true;
});
ble.addEventListener("scanStop", function(e){
	$.scanButton.backgroundColor = "#7d7";
	$.scanButton.title = "scan";
	scanning = false;
});

function scanButton() {
	if (scanning) {
		ble.stopScan();
	}
	else {
		ble.startScan();
	}
}


$.index.open();

updateState(ble.state);



var backgroundService = Ti.App.iOS.registerBackgroundService({
    url: "ble/backgroundService.js"
});


