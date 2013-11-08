

var ble = require("org.beuckman.tible");

var FitbitFlexServiceUUID = "ADABFB00-6E7D-4601-BDA2-BFFAA68956BA";


ble.addEventListener("state", function(e){
	switch (e.state) {
		case "off": 
			ble.startScan(FitbitFlexServiceUUID);
			break;
	}
});

ble.addEventListener("discover", function(e){
	Ti.API.debug(e);
	notify("You have a "+e.name+" nearby!");
});


ble.addEventListener("connect", function(e){

});
ble.addEventListener("connectFail", function(e){

});
ble.addEventListener("disconnect", function(e){

});

ble.addEventListener("services", function(e){

});
ble.addEventListener("characteristics", function(e){

});
ble.addEventListener("value", function(e){

});


setInterval(function(){
	Ti.API.debug("ble.state = "+ble.state);

		ble.startScan(FitbitFlexServiceUUID);

}, 2000);


ble.startScan(FitbitFlexServiceUUID);


function notify(msg, delay, sound) {
	
    var notification = Ti.App.iOS.scheduleLocalNotification({
        alertBody : msg,
        alertAction : "OK",
        userInfo : {
            "hello" : "world"
        },
        sound: sound || "magic.mp3",
        date : new Date(new Date().getTime() + (delay || 1))
    });
}

