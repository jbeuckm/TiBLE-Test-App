
exports.definition = {
	
	config: {
		"columns": {
			uuid: 'TEXT',
			name: 'TEXT',
			rssi: 'INTEGER',
			advertisementData: "TEXT"
		},
		"defaults": {
		},
		"adapter": {
			type: "sql",
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

            comparator : function(device) {
                var sorter = device.get('rssi');
                if (sorter == 127) sorter = -sorter;
                
                return -sorter;
            }

        }); // end extend
 
        return Collection;
    }		
};

