({
	handleRecordUpdated : function(component, event, helper) {
        component.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult){
            if(deleteResult.state==="SUCCESS" || deleteResult.state==="DRAFT"){
                //record is deleted
                console.log("Record is deleted.");
            }
            else if(deleteResult.state==="INCOMPLETE"){
                console.log("User is offline, device doesn't support drafts.");
            }
            else if(deleteResult.state==="ERROR"){
                console.log("Problem deleting record, error :"+ JSON.stringify(deleteResult.error));
            }
            else{
                console.log("Unknown problem, state "+ deleteResult.state +", error" + JSON.stringify(deleteResult.error));    
             }
        }))
	},
    /**
     * Control the component behavior here when record is changed (via any component)
     */ 
    handleDeleteRecord : function(component, event, helper) {
		var eventParams=event.getParams();
        if(eventParams.changeType==="CHANGED"){
            //record is 
        }changed
        if(eventParams.changeType==="LOADED"){
            //record is loaded in the cache
        }
        if(eventParams.changeType==="REMOVED"){
            //recoed is deleted, show a toast UI message
            var resultToast=$A.get("e.force:showToast");
            resultToast.setParams({
                "title" : "Deleted",
                "message" : "The record was deleted."
            });
            resultToast.fire();
        }
        if(eventParams.changeType==="ERROR"){
            // there’s an error while loading, saving, or deleting the record
        }
	}
})