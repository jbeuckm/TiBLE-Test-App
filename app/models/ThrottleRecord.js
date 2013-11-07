
exports.definition = {
	
	config: {
		"columns": {
			id: "TEXT",
			lastEvent: "INTEGER"
		},
		"defaults": {
		},
		"adapter": {
			type: "sql",
			collection_name: "ThrottleRecords"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			idAttribute: "id"
		}); // end extend
		
		return Model;
	},
	
	
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {


        }); // end extend
 
        return Collection;
    }		
};

