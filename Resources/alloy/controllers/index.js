function Controller() {
    function __alloyId11() {
        __alloyId11.opts || {};
        var models = __alloyId10.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId7);
            clickRow ? __alloyId7.addEventListener("click", clickRow) : __defers["__alloyId7!click!clickRow"] = true;
            var __alloyId8 = Ti.UI.createLabel({
                left: 5,
                text: "undefined" != typeof __alloyId6.__transform["name"] ? __alloyId6.__transform["name"] : __alloyId6.get("name")
            });
            __alloyId7.add(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
                right: 5,
                text: "undefined" != typeof __alloyId6.__transform["rssi"] ? __alloyId6.__transform["rssi"] : __alloyId6.get("rssi")
            });
            __alloyId7.add(__alloyId9);
        }
        $.__views.__alloyId4.setData(rows);
    }
    function clickRow(e) {
        alert(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("BleDevice");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId4 = Ti.UI.createTableView({
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    var __alloyId10 = Alloy.Collections["BleDevice"] || BleDevice;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    exports.destroy = function() {
        __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
    };
    _.extend($, $.__views);
    var ble = require("org.beuckman.tible");
    ble.addEventListener("state", function(e) {
        alert(e);
    });
    ble.addEventListener("discover", function(e) {
        var d = Alloy.Collections.BleDevice.get(e.uuid);
        if (d) d.set("rssi", e.rssi); else {
            var d = Alloy.createModel("BleDevice", e);
            Alloy.Collections.BleDevice.add(d);
        }
    });
    ble.addEventListener("connect", function(e) {
        alert(e);
    });
    ble.addEventListener("connectFail", function(e) {
        alert(e);
    });
    ble.addEventListener("disconnect", function(e) {
        alert(e);
    });
    ble.addEventListener("services", function() {});
    ble.addEventListener("characteristics", function(e) {
        alert(e);
    });
    ble.addEventListener("value", function(e) {
        alert(e);
    });
    ble.startScan();
    require("ble/ble").registerService();
    $.index.open();
    __defers["__alloyId7!click!clickRow"] && __alloyId7.addEventListener("click", clickRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;