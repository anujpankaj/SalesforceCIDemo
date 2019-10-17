({
	GetHelpText : function(component) {
		var action=component.get("c.BindExpenceHelpText");
         action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.helptext", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})