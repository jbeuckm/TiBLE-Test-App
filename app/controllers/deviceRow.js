
var args = arguments[0] || {};

var model = args.$model;

function clickRow(e) {
    
    var detail = Alloy.createController("deviceDetail", { model: model.toJSON() });
    detail.getView().open();

}

