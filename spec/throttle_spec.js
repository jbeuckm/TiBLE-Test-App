



describe("Throttler Tests", function() {

	var throttle = require("/throttle");

    describe("can throttle events to a minimum interval", function() {

        it("can set and get the interval", function(){
        	
        	var interval = 1000;
        	throttle.setInterval(interval);
            
            expect(throttle.getInterval()).toEqual(interval);
        });

    });
    
}); 