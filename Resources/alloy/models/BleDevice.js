exports.definition = {
    config: {
        columns: {
            uuid: "TEXT",
            name: "TEXT",
            rssi: "INTEGER"
        },
        defaults: {},
        adapter: {
            type: "properties",
            collection_name: "BleDevices"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            idAttribute: "uuid"
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("BleDevice", exports.definition, []);

collection = Alloy.C("BleDevice", exports.definition, model);

exports.Model = model;

exports.Collection = collection;