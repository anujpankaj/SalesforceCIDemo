({
	doInit : function(component, event, helper) {
		window.onbeforeunload = $A.getCallback(function(){
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Winow Close",
                    "message": "The record has been updated successfully.",
                    "type" : "warning"
                });
                toastEvent.fire();
              return true;
           });
    
	}
})