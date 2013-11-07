var Alloy = require("alloy");
var throttleRecords = Alloy.Collections.ThrottleRecord;


// default interval is one day
var interval = 24 * 3600 * 1000;
exports.setInterval = function(i) { interval = i; return interval; };
exports.getInterval = function() { return interval; };


/*
 * Test an event for recency
 */
exports.throttleEvent = function(e) {
	
	var note = throttleRecords.get(e.id);
	
	var throttle = false;
	
	if (note) {

		var now = new Date();
		
		if ((now.getTime() - note.get("lastEvent")) < interval) {
			throttle = true;
		}
		else {
			throttle = false;
			
			note.set("timestamp", now.getTime());
			note.save();
		}
		
	}
	else {
		throttle = false;
		
		var newNote = Alloy.createModel("ThrottleRecord", { uuid:e.uuid, timestamp:new Date() });
		newNote.save();
	}
	
	return throttle;
};


