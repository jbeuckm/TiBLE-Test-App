

var ble = require("org.beuckman.tible");

ble.addEventListener("state", function(e){
	alert(e);
});

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
ble.startScan();

require("ble/ble").registerService();

$.index.open();



function clickRow(e) {
	alert(e.rowData);
}


