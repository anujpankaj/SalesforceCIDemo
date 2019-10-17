({
	handleEdit : function(component, event, helper) {
		var selectedRecordId=component.get("v.recordId");
        var showtoster=$A.get("e.force:showToast");
        showtoster.setParams({
            "title" : "Object Name :-"+ component.get("v.sObjectName"),
            "message" : "Record Id :-" + component.get("v.recordId") 
        });
        showtoster.fire();
	}
})