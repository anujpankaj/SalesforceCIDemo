({
	fireEvent : function(component, event, helper) {
		var cmpEvent=component.getEvent("compEvent");
        cmpEvent.fire();
        console.log("Fire a component event");
	},
    addEventHandler :function(component,event,helper){
        component.addEventHandler("compEvent",component.getReference("c.handleEvent"));
        console.log("Added handler for component event");
    },
    handleEvent : function(component,event,helper){
        alert("Handled the component event");
    },
    fireAppEvent : function(component, event,helper){
        var appEvent=$A.get("e.c:appEvent");
        appEvent.fire();
        console.log("Fired an application event");
    },
    addAppEventHandler : function(component, event, helper){
        component.addEventHandler("c:appEvent",component.getReference("c.handleAppEvent"));
        console.log("Added handler for application event");
    },
    handleAppEvent : function(component, event, helper){
        alert("Handled the application event");
    }
})