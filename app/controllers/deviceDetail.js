var args = arguments[0] || {};

$.deviceModel.set(args.model);

$.activityIndicator.show();

Alloy.Globals.ble.connectPeripheral($.deviceModel.get("uuid"));


var ble = Alloy.Globals.ble;

ble.addEventListener("connect", connect);
ble.addEventListener("connectFail", connectFail);
ble.addEventListener("disconnect", disconnect);
ble.addEventListener("services", services);
ble.addEventListener("characteristics", characteristics);
ble.addEventListener("characteristicValue", characteristicValue);


function connect(e) {
    $.activityIndicator.hide();
}
function connectFail(e) {
    alert(e);
}
function disconnect(e) {
    
}

var sections = [];
function services(e) {
    for (var i in e.services) {
        var s = e.services[i];
        var section = Ti.UI.createTableViewSection({headerTitle:s.uuid});
        $.servicesTable.appendSection(section);
        
        sections[s.uuid] = section;
    }
}

var characteristicRows = [];
function characteristics(e) {
    var serviceUUID = e.service.uuid;
    var section = sections[serviceUUID];
    
    for (var i in e.characteristics) {
        var c = e.characteristics[i];
        
        var row = Ti.UI.createTableViewRow({ title: c.uuid });
        characteristicRows[c.uuid] = row;
        section.add(row);
    }
}
function characteristicValue(e) {
    
}


function backButton() {
    ble.removeEventListener("connect", connect);
    ble.removeEventListener("connectFail", connectFail);
    ble.removeEventListener("disconnect", disconnect);
    ble.removeEventListener("services", services);
    ble.removeEventListener("characteristics", characteristics);
    ble.removeEventListener("characteristicValue", characteristicValue);
    
    sections = null;
    characteristics = null;

    $.win.close();
}
