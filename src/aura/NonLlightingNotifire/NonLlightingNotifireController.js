({
	NotifierEvent : function(component, event, helper) {
        //var comevent= component.getEvent("compEvent");
        var comevent=$A.get("e.c:NonLlightingEvent");
        comevent.setParams({
            "InputParameter" : "anuj not lighting event"
        });
        
        comevent.fire();
	}
    
})