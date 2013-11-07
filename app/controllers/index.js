

var ble = require("org.beuckman.tible");

ble.addEventListener("state", function(e){
    $.status.text = e.state;
	switch (e.state) {
        case "on": 
            $.status.color = "#0a0";
           break;
        case "off": 
            $.status.color = "#666";
           break;
      default:
          break;
	}
});

ble.addEventListener("discover", function(e){

	var d = Alloy.Collections.BleDevice.get(e.uuid);
	
	if (d) {
		d.set("rssi", e.rssi);
	}
	else {
		var newDevice = Alloy.createModel("BleDevice", e);
		Alloy.Collections.BleDevice.add(newDevice);
	}
	
	alert(e);
	
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
	alert(e);
});
ble.addEventListener("characteristics", function(e){
	alert(e);
});
ble.addEventListener("value", function(e){
	alert(e);
});


$.index.open();


// scan for all service UUIDs
ble.startScan();
var backgroundService;

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



