({
	navigateToComponent : function(component, event, helper) {
        var pageReference = {
            type : 'standard__component',
            attributes : {
                componentName : 'c__targetComponent'
            },
            state : {
                c__releaseName : "Summer 18",
                c__recordId : component.get("v.recordId")
            }
        };
        var navService=component.find("navService");
        navService.navigate(pageReference);
        navService.generateUrl(pageReference).
        then($A.getCallback(function(url){
            console.log("New URL :" + url); 
        }),$A.getCallback(function(error){
           console.error(error); 
        }));
	}
})