({
	updateOpportunityAction : function(component, event, helper) {
		var today= new Date();
        var fields={
                    CloseDate : {value:today.getFullYear() +"-"+ (today.getMonth() + 1) + "-" + today.getDate()},
                    Name:{value:(component.get("v.simpleOpportunity.Name") + "- Update via quickAction API")},
                    StageName:{value:"Qualification"}
                   };
      
        var args= {actionName : "Opportunity.identityapp__Update_Opportunity", entityName: "Opportunity", targetFields : fields};
        var actionApi=component.find("quickActionAPI");
        actionApi.setActionFieldValues(args).then(function(){
            actionApi.invokeAction(args);            
        }).catch(function(e){
            console.error(e.errors);
        });
	}
})