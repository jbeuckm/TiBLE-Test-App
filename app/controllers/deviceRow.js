
var args = arguments[0] || {};

var model = args.$model;

function clickRow(e) {
    
    alert(model.get("advertisementData"));
    
	Alloy.Globals.ble.connectPeripheral(model.get("uuid"));

}