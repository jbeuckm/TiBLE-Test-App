
var args = arguments[0] || {};

var model = args.$model;

function clickRow(e) {

	Alloy.Globals.ble.connectPeripheral(model.get("uuid"));

}