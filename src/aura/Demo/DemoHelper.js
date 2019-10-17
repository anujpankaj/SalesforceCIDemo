({
	CallServerMethod : function(component, event) {
		
        var action = component.get("c.TestgetExpenses");
        action.setParams({ 
                          "inputStr": 'anuj' 
                       });
        action.setCallback(this, function(response) {
            var state = response.getState();
			if (state === "SUCCESS") {
                var returnvalue=response.getReturnValue();
                component.set('v.ReturnValue',returnvalue);
            }
        });
		$A.enqueueAction(action);
	}
})