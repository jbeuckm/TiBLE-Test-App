var args = arguments[0] || {};


$.deviceModel.set(args.model);

Alloy.Globals.ble.connectPeripheral($.deviceModel.get("uuid"));

function backButton() {
	$.win.close();
}


//$.servicesTable.add();

var ble = Alloy.Globals.ble;

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
ble.addEventListener("characteristicValue", function(e){
	alert(e);
});
