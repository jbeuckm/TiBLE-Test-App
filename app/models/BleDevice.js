
exports.definition = {
	
	config: {
		"columns": {
			uuid: 'TEXT',
			name: 'TEXT',
			rssi: 'INTEGER',
		},
		"defaults": {
		},
		"adapter": {
			type: "properties",
			collection_name: "BleDevices"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			idAttribute: "uuid"
		}); // end extend
		
		return Model;
	},
	
	
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {

        }); // end extend
 
        return Collection;
    }		
};

